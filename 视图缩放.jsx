app.activeViewer.views["0"].options.zoom = 0.66;

var panelGlobal = this;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"","windowType":"Palette","creationProps":{"su1PanelCoordinates":true,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"视图缩放","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Slider","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[200,0],"alignment":null,"helpTip":null}}},"order":[0,1],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":true,"itemReferenceList":"None"}}
*/

// PALETTE
// =======
var palette =
	panelGlobal instanceof Panel
		? panelGlobal
		: new Window("palette", undefined, undefined, {
				su1PanelCoordinates: true,
				resizeable: true,
		  });
if (!(panelGlobal instanceof Panel)) palette.text = "视图缩放";
palette.orientation = "column";
palette.alignChildren = ["fill", "top"];
palette.spacing = 10;
palette.margins = 16;

var slider1 = palette.add(
	"slider",
	undefined,
	undefined,
	undefined,
	undefined,
	{ name: "slider1" }
);
slider1.minvalue = 0;
slider1.maxvalue = 100;
slider1.value = 50;
slider1.onChange = zoom;
slider1.preferredSize.width = 200;

palette.layout.layout(true);
palette.layout.resize();
palette.onResizing = palette.onResize = function () {
	this.layout.resize();
};

if (palette instanceof Window) palette.show();

function zoom() {
	app.activeViewer.views["0"].options.zoom = slider1.value / 100;
}
