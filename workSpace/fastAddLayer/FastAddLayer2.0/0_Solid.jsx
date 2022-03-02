//main
app.beginUndoGroup("Solid");
switch (hadselctedLayersYN()) {
	case 1:
		addLayer();
		break;

	case 2:
		case2();
		break;

	default:
		break;
}

app.endUndoGroup();

function case2() {
	if (app.project.activeItem.selectedLayers.length === 1) {
		var Layer = app.project.activeItem.selectedLayers[0];
		var newLayer = addLayer();
		newLayer.moveBefore(Layer);
		newLayer.inPoint = Layer.inPoint;
		newLayer.outPoint = Layer.outPoint;
	} else {
		var Layers = app.project.activeItem.selectedLayers;
		var inPoint = Layers[0].inPoint;
		var outPoint = Layers[0].outPoint;
		var topLayer = Layers[0];
		for (var i = 0; i < Layers.length; i++) {
			if (inPoint > Layers[i].inPoint) {
				inPoint = Layers[i].inPoint;
			}
			if (outPoint < Layers[i].outPoint) {
				outPoint = Layers[i].outPoint;
			}
			if (topLayer.index > Layers[i].index) {
				topLayer = Layers[i];
			}
		}
		var newLayer = addLayer();
		newLayer.moveBefore(topLayer);
		newLayer.inPoint = inPoint;
		newLayer.outPoint = outPoint;
	}
}

//新建层
function addLayer() {
	var thisComp = app.project.activeItem;
	thisComp.layers.addSolid(
		[0, 0, 0],
		"Solid",
		thisComp.width,
		thisComp.height,
		thisComp.pixelAspect,
		thisComp.duration
	);
	thisComp.selectedLayers[0]
		.property("ADBE Effect Parade")
		.addProperty("ADBE Fill")(3)
		.setValue([0, 0, 0]);
	return thisComp.selectedLayers[0];
}

//判断选中
function hadselctedLayersYN() {
	var hadselctedLayersYN = 0;
	if (app.project.activeItem instanceof CompItem) {
		if (app.project.activeItem.selectedLayers.length > 0) {
			hadselctedLayersYN = 2;
		} else {
			hadselctedLayersYN = 1;
		}
	} else {
		hadselctedLayersYN = 0;
	}
	return hadselctedLayersYN;
}
