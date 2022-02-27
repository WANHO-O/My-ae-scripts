(function run() {
	var composition = app.project.activeItem;
	if (!(composition && composition instanceof CompItem)) {
		return;
	}
	app.beginUndoGroup("Null");
	//在没有选中图层的情况下，在合成中直接创建一个空对象
	var nullSize = 100;
	if (composition.selectedLayers.length === 0) {
		var target = composition.layers.addNull();
		target.name = "空001";
		target.label = 1;
		target.source.width = nullSize;
		target.source.height = nullSize;
		target.anchorPoint.setValue([
			target.source.width / 2,
			target.source.height / 2,
		]);
	} else {
		//选中图层的情况下，为所选图层创建中心父级空对象
		var xmin = void 0;
		var xmax = void 0;
		var ymin = void 0;
		var ymax = void 0;
		var zmin = Infinity;
		var zmax = -Infinity;
		var newNull = void 0;
		if (composition !== null) {
			var selectedLayers = composition.selectedLayers;
			//判断有没有3D图层
			var allLayersAre3d =
				selectedLayers.filter(function (layer) {
					if (
						layer instanceof ShapeLayer ||
						layer instanceof TextLayer ||
						layer instanceof AVLayer
					) {
						return layer.threeDLayer === true;
					}
					return false;
				}).length === selectedLayers.length;
			if (selectedLayers.length > 0) {
				minIndex = selectedLayers[0].index;
				xmin = xmax = selectedLayers[0].property("Position").value[0];
				ymin = ymax = selectedLayers[0].property("Position").value[1];
				if (composition != null && composition instanceof CompItem) {
					var myLayers = composition.selectedLayers;
					//判断所选图层的入点和出点
					if (myLayers.length != 0) {
						var saveIn = composition.duration;
						var saveOut = 0;
						var saveIndex = composition.numLayers;
						var newInpoint = composition.duration;
						var newOutpoint = 0;
						var myIndex = composition.numLayers;
						for (var i = 0; i <= myLayers.length - 1; i += 1) {
							var currentLayer = myLayers[i];
							saveIn =
								currentLayer.stretch < 0
									? currentLayer.outPoint
									: currentLayer.inPoint;
							saveOut =
								currentLayer.stretch < 0
									? currentLayer.inPoint
									: currentLayer.outPoint;
							saveIndex = currentLayer.index;
							if (saveIn < newInpoint) {
								newInpoint = saveIn;
							}
							if (saveOut > newOutpoint) {
								newOutpoint = saveOut;
							}
							if (saveIndex < myIndex) {
								myIndex = saveIndex;
							}
						}
						//创建修剪到选择图层总出入点的空对象
						newNull = composition.layers.addNull();
						newNull.name = "中心空对象";
						newNull.source.width = nullSize;
						newNull.source.height = nullSize;
						newNull.inPoint = newInpoint;
						newNull.outPoint = newOutpoint;
						newNull.label = 1;
						var ctr = 0;
						for (
							var num = 0;
							num < selectedLayers.length;
							num += 1
						) {
							lay = selectedLayers[num];
							ctr++;
							var xIn = lay.property("Position").value[0];
							if (xIn > xmax) {
								xmax = xIn;
							}
							if (xIn < xmin) {
								xmin = xIn;
							}
							var yIn = lay.property("Position").value[1];
							if (yIn > ymax) {
								ymax = yIn;
							}
							if (yIn < ymin) {
								ymin = yIn;
							}
							if (allLayersAre3d) {
								var zIn = lay.property("Position").value[2];
								if (zIn > zmax) {
									zmax = zIn;
								}
								if (zIn < zmin) {
									zmin = zIn;
								}
							}
						}
						var xpos = (xmax - xmin) / 2 + xmin;
						var ypos = (ymax - ymin) / 2 + ymin;
						var zpos = (zmax - zmin) / 2 + zmin;
						//如果有3D图层，返回[x,y,z]，没有，返回[x,y]
						if (allLayersAre3d) {
							newNull.threeDLayer = true;
							newNull
								.property("Position")
								.setValue([xpos, ypos, zpos]);
						} else {
							newNull.property("Position").setValue([xpos, ypos]);
						}
						newNull.anchorPoint.setValue([
							newNull.source.width / 2,
							newNull.source.height / 2,
						]);
						for (
							var num = 0;
							num < selectedLayers.length;
							num += 1
						) {
							var lay = selectedLayers[num];
							lay.parent = newNull;
							if (lay.index < minIndex) {
								minIndex = lay.index;
							}
						}
					}
					var lastLayer = composition.layer(myIndex);
					var layer = composition.layer(myIndex + 1);
					var isTrackMatte =
						lastLayer &&
						lastLayer.enabled === false &&
						layer instanceof ShapeLayer &&
						layer.trackMatteType !== TrackMatteType.NO_TRACK_MATTE;
					//把空对象移动到选择图层上方
					newNull.moveBefore(isTrackMatte ? lastLayer : layer);
					newNull.label = 1;
				}
			}
		}
	}
	app.endUndoGroup();
})();
