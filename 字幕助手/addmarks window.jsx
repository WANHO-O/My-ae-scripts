var panelGlobal = this;
var addMarks =
	panelGlobal instanceof Panel ? panelGlobal : new Window("palette");
if (!(panelGlobal instanceof Panel)) addMarks.text = "addmarks";
addMarks.orientation = "column";
addMarks.alignChildren = ["center", "center"];

var winGraphics = addMarks.graphics;
var color1 = winGraphics.newPen(
	winGraphics.BrushType.SOLID_COLOR,
	[1, 1, 1, 0.2],
	1
);
var color2 = winGraphics.newPen(
	winGraphics.BrushType.SOLID_COLOR,
	[1, 1, 1, 1],
	1
);

// GROUP1
// ======
var addMarksgroup1 = addMarks.add("group", undefined, { name: "group1" });
addMarksgroup1.orientation = "column";
addMarksgroup1.alignChildren = ["center", "center"];
addMarksgroup1.spacing = 15;

var statictext1 = addMarksgroup1.add("statictext", undefined, undefined, {
	name: "statictext1",
});
statictext1.text = "??????";

var statictext2 = addMarksgroup1.add("statictext", undefined, undefined, {
	name: "statictext2",
});
statictext2.text = "StaticText";

var statictext3 = addMarksgroup1.add("statictext", undefined, undefined, {
	name: "statictext3",
});
statictext3.text = "StaticText";

statictext1.graphics.foregroundColor = color1;
statictext2.graphics.foregroundColor = color2;
statictext3.graphics.foregroundColor = color1;
// DIALOG
// ======
var addMarksbutton1 = addMarks.add("button", undefined, undefined, {
	name: "button1",
});
addMarksbutton1.text = "Button";
addMarksbutton1.preferredSize.width = 400;

addMarks.layout.layout(true);
addMarks.layout.resize();
addMarks.onResizing = addMarks.onResize = function () {
	this.layout.resize();
};

if (addMarks instanceof Window) addMarks.show();
