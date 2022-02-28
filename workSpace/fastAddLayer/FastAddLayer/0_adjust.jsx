var thisComp = app.project.activeItem;

if (thisComp instanceof CompItem) {
	var temp1 = thisComp.selectedLayers.length; //获取当前选中图层数量
	var nowSl = []; //将当前选中图层进行存储
	var slnum = []; //用来存储新建的层
	var time = new Date();
	time = Number(time.getTime());
	//判断当前选中的层是否是新建哒
	function judge(judge) {
		for (i = 0; i < temp1 && (judge = true); i++) {
			var p = Number(thisComp.selectedLayers[i].comment);

			if (time - p < 2000) {
				judge = true;
			} else {
				judge = false;
			}
		}
		return judge;
	}

	function addLayer() {
		thisComp.layers.addSolid(
			[1, 1, 1],
			"调整图层",
			thisComp.width,
			thisComp.height,
			thisComp.pixelAspect,
			thisComp.duration
		);
		thisComp.selectedLayers[0].adjustmentLayer = true;
		thisComp.selectedLayers[0].label = 5;
	}
	if (temp1 >= 1) {
		for (i = 0; i < temp1; i++) {
			nowSl[i] = thisComp.selectedLayers[i];
		}
		if (temp1 > 1) {
			if (judge()) {
				// alert("lueluelue");

				var newinPoint = nowSl[0].inPoint,
					newoutPoint = nowSl[0].outPoint,
					newIndex = nowSl[0].index;

				for (i = 1; i < temp1; i++) {
					if (newinPoint > nowSl[i].inPoint) {
						newinPoint = nowSl[i].inPoint;
					}
					if (newoutPoint < nowSl[i].outPoint) {
						newoutPoint = nowSl[i].outPoint;
					}
					if (newIndex > nowSl[i].index) {
						newIndex = nowSl[i].index;
					}
				}
				app.beginUndoGroup("creat");
				addLayer();
				if (newIndex > 1) {
					thisComp.selectedLayers[0].moveBefore(newIndex);
				}
				thisComp.selectedLayers[0].inPoint = newinPoint;
				thisComp.selectedLayers[0].outPoint = newoutPoint;
				for (i = 0; i < temp1; i++) {
					nowSl[i].remove();
				}
				app.endUndoGroup();
			} else {
				app.beginUndoGroup("creat");
				for (i = 0; i < temp1; i++) {
					addLayer();
					thisComp.selectedLayers[0].moveBefore(nowSl[i]);
					thisComp.selectedLayers[0].inPoint = nowSl[i].inPoint;
					thisComp.selectedLayers[0].outPoint = nowSl[i].outPoint;
					slnum[i] = thisComp.selectedLayers[0];
				}

				//选中所有新建的层
				time = new Date();
				time = Number(time.getTime());
				for (i = 0; i < slnum.length; i++) {
					slnum[i].selected = true;
					slnum[i].comment = time;
				}
				app.endUndoGroup();
			}
		} else {
			app.beginUndoGroup("creat");
			addLayer();
			thisComp.selectedLayers[0].moveBefore(nowSl[0]);
			thisComp.selectedLayers[0].inPoint = nowSl[0].inPoint;
			thisComp.selectedLayers[0].outPoint = nowSl[0].outPoint;
			app.endUndoGroup();
		}
	} else {
		app.beginUndoGroup("creat");
		addLayer();
		app.endUndoGroup();
	}
}
