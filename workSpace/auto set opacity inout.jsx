var panelGlobal = this;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":true,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"Dialog","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["center","fill"]}},"item-1":{"id":1,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"inButton","text":"in","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-2":{"id":2,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"outButton","text":"out","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}}},"order":[0,1,2],"settings":{"importJSON":true,"indentSize":true,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":true,"itemReferenceList":"None"}}
*/

// DIALOG
// ======
var dialog =
	panelGlobal instanceof Panel
		? panelGlobal
		: new Window("palette", undefined, undefined, {
				su1PanelCoordinates: true,
				resizeable: true,
		  });
if (!(panelGlobal instanceof Panel)) dialog.text = "auto opacity inout";
dialog.orientation = "row";

dialog.spacing = 10;
dialog.margins = 10;

var inButton = dialog.add("button", undefined, undefined, { name: "inButton" });
inButton.text = "in";
inButton.alignment = ["fill", "top"];
inButton.onClick = in_Button;

var outButton = dialog.add("button", undefined, undefined, {
	name: "outButton",
});
outButton.text = "out";
outButton.alignment = ["fill", "top"];
outButton.onClick = out_Button;

dialog.layout.layout(true);
dialog.layout.resize();
dialog.onResizing = dialog.onResize = function () {
	this.layout.resize();
};

if (dialog instanceof Window) dialog.show();

//_-------------------------------------------------------------------------------
var inTime, outTime;

function in_Button() {
	if (hadselctedLayersYN() === 2) {
		inTime = add_Marks("in");
	}
}

function out_Button() {
	if (hadselctedLayersYN() === 2) {
		outTime = add_Marks("out");
		var num = outTime - inTime;
		var space = 0.2;
		num = num / space;
		num = parseInt(num);
		if (opacity(num) === 0) {
			num = num + 1;
		}
		for (var i = 0; i <= num; i++) {
			app.project.activeItem.selectedLayers[0].opacity.setValueAtTime(
				inTime + 0.2 * i,
				opacity(i + 1)
			);
		}
	}
}

//_-------------------------------------------------------------------------------
function opacity(i) {
	if (i % 2 == 0) {
		return 100;
	} else {
		return 0;
	}
}

function add_Marks(type) {
	var marks = new MarkerValue(type);
	app.project.activeItem.selectedLayers[0]
		.property("Marker")
		.setValueAtTime(app.project.activeItem.selectedLayers[0].time, marks);
	return app.project.activeItem.selectedLayers[0].time;
}

//判断当前有无选中层，返回布尔值
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
