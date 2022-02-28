var panelGlobal = this;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":16,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[0,0],"margins":16,"orientation":"row","spacing":10,"alignChildren":["中央","中央"]}},"item-1":{"id":1,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-2":{"id":2,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"","preferredSize":[0,0],"margins":0,"orientation":"排","spacing":0,"alignChildren":["剩下","最佳"],"alignment":null}},"item-3":{"id":3,"type":"EditText","parentId":1,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":true,"scrollable":true,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"EditText","justify":"left","preferredSize":[350,450],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Panel","parentId":2,"style":{"enabled":true,"varName":"","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"cut","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-5":{"id":5,"type":"Group","parentId":4,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-6":{"id":6,"type":"Checkbox","parentId":5,"style":{"enabled":true,"varName":null,"text":"Checkbox","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"Checkbox","parentId":5,"style":{"enabled":true,"varName":null,"text":"Checkbox","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"EditText","justify":"left","preferredSize":[131,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Button","parentId":4,"style":{"enabled":true,"varName":null,"text":"cut","justify":"center","preferredSize":[131,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Panel","parentId":2,"style":{"enabled":true,"varName":"","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"mark","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-12":{"id":12,"type":"Button","parentId":11,"style":{"enabled":true,"varName":null,"text":"addmarks","justify":"center","preferredSize":[131,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Panel","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"BG","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-14":{"id":14,"type":"Group","parentId":13,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-15":{"id":15,"type":"Button","parentId":13,"style":{"enabled":true,"varName":null,"text":"addBG","justify":"center","preferredSize":[131,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Button","parentId":2,"style":{"enabled":true,"varName":null,"text":"run","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1,3,2,4,5,6,7,9,10,11,12,13,14,15,16],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":true,"itemReferenceList":"None"}}
*/

// DIALOG
// ======
var dialog = panelGlobal instanceof Panel ? panelGlobal : new Window("palette");
if (!(panelGlobal instanceof Panel)) dialog.text = "Dialog";
dialog.orientation = "row";
dialog.alignChildren = ["center", "top"];
dialog.spacing = 10;
dialog.margins = 10;

// GROUP1
// ======
var group1 = dialog.add("group", undefined, { name: "group1" });
group1.orientation = "row";
group1.alignChildren = ["left", "center"];
group1.spacing = 10;
group1.margins = 0;

var textEdit = group1.add(
	'edittext {properties: {name: "textEdit", multiline: true, scrollable: true}}'
);
textEdit.text = "";
textEdit.preferredSize.width = 350;
textEdit.preferredSize.height = 450;

// GROUP2
// ======
var group2 = dialog.add("group", undefined, { name: "group2" });
group2.orientation = "column";
group2.alignChildren = ["center", "center"];
group2.spacing = 10;
group2.margins = 10;

// PANEL1
// ======
var panel1 = group2.add("panel", undefined, undefined, { name: "panel1" });
panel1.text = "cut";
panel1.orientation = "column";
panel1.alignChildren = ["center", "center"];
panel1.spacing = 10;
panel1.margins = 10;

// GROUP3
// ======
var group3 = panel1.add("group", undefined, { name: "group3" });
group3.orientation = "row";
group3.alignChildren = ["center", "center"];
group3.spacing = 10;
group3.margins = 0;

var checkbox1 = group3.add("checkbox", undefined, undefined, {
	name: "checkbox1",
});
checkbox1.text = "删除括号";
checkbox1.value = true;

var checkbox2 = group3.add("checkbox", undefined, undefined, {
	name: "checkbox2",
});
checkbox2.text = "删除换行";
checkbox2.value = true;
// PANEL1
// ======

var cutButton = panel1.add("button", undefined, undefined, {
	name: "cutButton",
});
cutButton.text = "cut";
cutButton.preferredSize.width = 131;
cutButton.onClick = text_cut;

var addmarksButton = group2.add("button", undefined, undefined, {
	name: "addmarksButton",
});
addmarksButton.text = "addmarks";
addmarksButton.preferredSize.width = 160;
addmarksButton.onClick = add_marks_UI;

var addBGButton = group2.add("button", undefined, undefined, {
	name: "addBGButton",
});
addBGButton.text = "addBG";
addBGButton.preferredSize.width = 160;
addBGButton.onClick = add_BG;
// GROUP2
// ======
var runButton = group2.add("button", undefined, undefined, {
	name: "runButton",
});
runButton.text = "run";
runButton.preferredSize.width = 160;
runButton.onClick = run;

dialog.layout.layout(true);
dialog.layout.resize();
dialog.onResizing = dialog.onResize = function () {
	this.layout.resize();
};

if (dialog instanceof Window) dialog.show();

//----------------------------------------------------------------------------------------------
//addmarks面板

function add_marks_UI() {
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

	statictext1 = addMarksgroup1.add("statictext", undefined, undefined, {
		name: "statictext1",
	});
	statictext1.preferredSize.width = 400;

	statictext2 = addMarksgroup1.add("statictext", undefined, undefined, {
		name: "statictext2",
	});
	statictext2.preferredSize.width = 400;

	statictext3 = addMarksgroup1.add("statictext", undefined, undefined, {
		name: "statictext3",
	});
	statictext3.preferredSize.width = 400;

	statictext1.graphics.foregroundColor = color1;
	statictext2.graphics.foregroundColor = color2;
	statictext3.graphics.foregroundColor = color1;
	// DIALOG
	// ======
	var addMarksbutton1 = addMarks.add("button", undefined, undefined, {
		name: "button1",
	});
	addMarksbutton1.text = "add marks";
	addMarksbutton1.preferredSize.width = 400;
	addMarksbutton1.onClick = add_marks;

	addMarks.layout.layout(true);
	addMarks.layout.resize();
	addMarks.onResizing = addMarks.onResize = function () {
		this.layout.resize();
	};

	if (addMarks instanceof Window) addMarks.show();
	if (find_Layer("_Text_Layer") === null) {
		add_textLayer();
	}
	statictext1.text =
		textEdit.text.split(/\n/g)[
			app.project.activeItem.selectedLayers[0].property("Marker")
				.numKeys - 1
		];
	statictext2.text =
		textEdit.text.split(/\n/g)[
			app.project.activeItem.selectedLayers[0].property("Marker").numKeys
		];
	statictext3.text =
		textEdit.text.split(/\n/g)[
			app.project.activeItem.selectedLayers[0].property("Marker")
				.numKeys + 1
		];

	return addMarks;
}

//------------------------------------------------------------------------------------------------
//cut按钮事件

function text_cut() {
	var longText = 0;

	//对语气符号进行替换保留
	var text = textEdit.text.replace(/[!！]/g, "！_").replace(/[?？]/g, "？_");

	//复选框1：是否删除括号中内容
	if (checkbox1.value) {
		text = text.replace(/\（[^\）]*\）/g, "");
	}

	//复选框2：是否删除换行符
	if (checkbox2.value) {
		text = text.replace(/[\s]/g, "");
	}

	//对文本进行切割，依据下列符号。 下划线为语气符号的替换符号
	text = text.split(/[,.，。;:；：_]/);

	//处理文本中引号部分，对引号中的句子，每个单句重新加引号
	for (i = 0, j = false; i < text.length; i++) {
		if (/“/.test(text[i])) {
			text[i] = text[i].replace("“", "");
			j = true;
		}
		if (/”/.test(text[i])) {
			text[i] = text[i].replace("”", "");
			j = false;
		}
		if (j) {
			text[i] = "“" + text[i] + "”";
		}
	}

	//检测处理后文本中是否有超长段
	for (i = 0; i < text.length; i++) {
		if (text[i].length > 20) {
			longText += 1;
		}
	}

	//复选框2的后续处理
	if (checkbox2.value) {
		text = text.join("\n");
	} else {
		text = text.join("");
	}

	//将处理后的文本重新打印在edittext中
	textEdit.text = text;
	if (longText != 0) {
		alert("有" + longText + "个超长段，请分割");
	}
}

//addmarks按钮事件
function add_marks() {
	var marks = new MarkerValue(marks_comment());
	//添加标记
	app.executeCommand(2157);
	find_Layer("_Text_Layer")
		.property("Marker")
		.setValueAtKey(
			find_Layer("_Text_Layer").property("Marker").numKeys,
			marks
		);
}

//addBG按钮事件
function add_BG() {
	var layer = app.project.activeItem.selectedLayers[0];
	text_BG(layer);
}

//run按钮事件
function run() {
	var oldText = [];
	//如果输入框中无文本，则将时间线中文本图层的字幕回溯到输入框中
	if (textEdit.text === "") {
		for (
			i = 1;
			i <= find_Layer("_Text_Layer").property("Marker").numKeys;
			i++
		) {
			oldText[i - 1] = find_Layer("_Text_Layer")
				.property("Marker")
				.keyValue(i).comment;
		}
		textEdit.text = oldText.join("\n");
	} else {
		//输入框中有文本，那么将输入框中文本打到图层标记注释上
		for (
			i = 1;
			i <= find_Layer("_Text_Layer").property("Marker").numKeys;
			i++
		) {
			var marks = new MarkerValue(textEdit.text.split(/\n/g)[i - 1]);
			find_Layer("_Text_Layer")
				.property("Marker")
				.setValueAtKey(i, marks);
		}
	}
}

//--------------------------------------------------------------------------------
//添加文字底色图层
function text_BG(layer) {
	app.project.activeItem.layers.addShape();
	app.project.activeItem.selectedLayers[0].label = 0;
	app.project.activeItem.selectedLayers[0].name = "_Text_BG";
	app.project.activeItem.selectedLayers[0].comment = "_Text_BG";
	app.project.activeItem.selectedLayers[0].position.setValue([
		layer.position.value[0],
		layer.position.value[1],
	]);
	app.project.activeItem.selectedLayers[0].parent = layer;
	app.project.activeItem.selectedLayers[0].moveAfter(layer);
	app.project.activeItem.selectedLayers[0].opacity.setValue(50);
	var shapeGroup1 = app.project.activeItem.selectedLayers[0]
		.property("Contents")
		.addProperty("ADBE Vector Group"); // creating a group1
	shapeGroup1.name = "_Text_BG"; //name the group1
	shapeGroup1.property("Contents").addProperty("ADBE Vector Shape - Rect"); // adding rectangle to the group1
	shapeGroup1
		.property("Contents")
		.addProperty("ADBE Vector Graphic - Fill")
		.color.setValue([0, 0, 0]); // adding rectangle to the group1
	app.project.activeItem.selectedLayers[0]
		.property("ADBE Effect Parade")
		.addProperty("ADBE Slider Control").name = "高度";

	app.project.activeItem.selectedLayers[0]
		.property("ADBE Effect Parade")
		.property("高度")("ADBE Slider Control-0001")
		.setValue(10);

	app.project.activeItem.selectedLayers[0]
		.property("ADBE Effect Parade")
		.addProperty("ADBE Slider Control").name = "宽度";

	app.project.activeItem.selectedLayers[0]
		.property("ADBE Effect Parade")
		.property("宽度")("ADBE Slider Control-0001")
		.setValue(40);

	app.project.activeItem.selectedLayers[0]
		.property("ADBE Effect Parade")
		.addProperty("ADBE Slider Control").name = "圆角";

	app.project.activeItem.selectedLayers[0]
		.property("ADBE Effect Parade")
		.property("圆角")("ADBE Slider Control-0001")
		.setValue(5);

	app.project.activeItem.selectedLayers[0].property("Contents")(
		"ADBE Vector Group"
	)("Contents")("ADBE Vector Shape - Rect")(
		"ADBE Vector Rect Size"
	).expression =
		'marginW = effect("宽度")("ADBE Slider Control-0001");' +
		'marginH = effect("高度")("ADBE Slider Control-0001");' +
		'var tarLayer = thisComp.layer("' +
		layer.name +
		'");' +
		"var tarRect = tarLayer.sourceRectAtTime(time - tarLayer.inPoint, true);" +
		"wT = tarRect.width;" +
		"hT = tarRect.height;" +
		"w = wT == 0 ? marginW * -1 : wT;" +
		"h = hT == 0 ? marginH * -1 : hT;" +
		"[w + marginW, h + marginH];";

	app.project.activeItem.selectedLayers[0].property("Contents")(
		"ADBE Vector Group"
	)("Contents")("ADBE Vector Shape - Rect")(
		"ADBE Vector Rect Roundness"
	).expression = 'effect("圆角")("ADBE Slider Control-0001");';
}

//添加文本图层
function add_textLayer() {
	app.project.activeItem.layers.addText();
	app.project.activeItem.selectedLayers[0].label = 0;
	app.project.activeItem.selectedLayers[0].name = "_Text_Layer";
	app.project.activeItem.selectedLayers[0].comment = "_Text_Layer";
	app.project.activeItem.selectedLayers[0]("Text")("sourceText").expression =
		"m = thisLayer;" +
		"n = 0;" +
		"if (m.marker.numKeys > 0) {" +
		"n = m.marker.nearestKey(time).index;" +
		"if (m.marker.key(n).time > time) n--;" +
		"}" +
		"if (n < m.marker.numKeys) {" +
		"if (m.marker.key(n + 1).time - time > 0.2) {" +
		"if (n > 0) {" +
		"m.marker.key(n).comment;" +
		"} else {" +
		'	("");' +
		"}" +
		"} else {" +
		'("");' +
		"}" +
		"} else {" +
		"	m.marker.key(n).comment;" +
		"}";
	app.project.activeItem.selectedLayers[0]("Transform")(
		"Anchor Point"
	).expression =
		" l =thisLayer.sourceRectAtTime();" +
		"[l.left + l.width / 2, l.top + l.height / 2];";
}

//marks 注释内容
function marks_comment() {
	var num =
		app.project.activeItem.selectedLayers[0].property("Marker").numKeys;
	var text = textEdit.text.split(/\n/g);
	//更改 addMarks面板中的静态文本
	statictext1.text = text[num - 1];
	statictext2.text = text[num];
	statictext3.text = text[num + 1];
	return text[num];
}

//判断当前选中、
function hadselctedLayersYN() {
	var hadselctedLayersYN = 0;
	if (app.project.activeItem instanceof CompItem) {
		if (app.project.activeItem.selectedLayers.length > 0) {
			hadselctedLayersYN = 2;
		} else {
			hadselctedLayersYN = 1;
		}
	} else {
		alert("未选中合成");
		hadselctedLayersYN = 0;
	}
	return hadselctedLayersYN;
}

//判断选中层类型
function type(o) {
	var s = Object.prototype.toString.call(o);
	return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}
//寻找字幕图层
function find_Layer(name) {
	if (app.project.activeItem.layers.byName(name) === null) {
		return null;
	} else {
		for (
			var selectedLayers = 0;
			selectedLayers < app.project.activeItem.selectedLayers.length;
			selectedLayers++
		) {
			app.project.activeItem.selectedLayers[
				selectedLayers
			].selected = false;
		}
		app.project.activeItem.layers.byName(name).selected = true;
		return app.project.activeItem.selectedLayers[0];
	}
}

// 待完功能：对整个text与标记进行重新匹配。2：如果edittext===null，将文本层中text复制到edittext中
// 复选框，”是否自动添加BG层“
