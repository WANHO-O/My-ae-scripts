var panelGlobal = this;

// DIALOG
// ------------------------------------------
//主体UI
var dialog = panelGlobal instanceof Panel ? panelGlobal : new Window("palette");
if (!(panelGlobal instanceof Panel)) dialog.text = "Dialog";
dialog.orientation = "column";
dialog.alignChildren = ["center", "top"];
dialog.spacing = 10;
dialog.margins = 16;

var buttonMarks = dialog.add("button", undefined, undefined, {
	name: "buttonMarks",
});
buttonMarks.text = "添加标记";
buttonMarks.onClick = marks_Button;
buttonMarks.preferredSize.width = 150;

var buttonFile = dialog.add("button", undefined, undefined, {
	name: "buttonFile",
});
buttonFile.text = "选择目录";
buttonFile.onClick = saving_Path;
buttonFile.preferredSize.width = 150;

var buttonRender = dialog.add("button", undefined, undefined, {
	name: "buttonRender",
});
buttonRender.text = "导出";
buttonRender.onClick = render;
buttonRender.preferredSize.width = 150;

dialog.layout.layout(true);
dialog.layout.resize();
dialog.onResizing = dialog.onResize = function () {
	this.layout.resize();
};

if (dialog instanceof Window) dialog.show();

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

//添加标记按钮事件
function marks_Button() {
	if (hadselctedLayersYN) {
		if (find_MarksLayer() === null) {
			add_MarksLayer();
			add_Marks();
		} else {
			add_Marks();
		}
	} else {
		alert("未选中合成!");
	}
}

//选择目录按钮事件
var savingFile = null;
function saving_Path() {
	savingFile = reSaving_File();
	savingFile = savingFile.saveDlg();
}
//导出按钮事件
function render() {
	savingFile = reSaving_File();
	addFolder = add_Folder(savingFile);
	if (find_MarksLayer() == null) {
		marks_Button();
	}
	for (i = 1; i <= find_MarksLayer().property("Marker").numKeys; i++) {
		marksTime = find_MarksLayer().property("Marker").keyTime(i);
		var myFile = new File(
			addFolder.fsName +
				"/" +
				app.project.activeItem.name +
				"_" +
				i +
				".png"
		);
		app.project.activeItem.saveFrameToPng(marksTime, myFile);
	}
	addFolder.execute();
}
//-----------------------------------------------

//返回savingFile
function reSaving_File() {
	if (!(app.project.file === null)) {
		if (savingFile === null) {
			savingFile = new File(
				app.project.file.parent.parent.fsName + "/Frame Output.png"
			);
		}
	} else {
		alert("请先保存工程！");
	}
	return savingFile;
}

//建立图象存储文件夹
function add_Folder(filePath) {
	var folderName = "Frame output";
	var folderPath = filePath.parent.fsName + "/" + folderName + "/";
	addFolder = new Folder(folderPath);
	if (!addFolder.exists) {
		addFolder.create();
	}
	return addFolder;
}

//添加标记图层
function add_MarksLayer() {
	app.project.activeItem.layers.addNull(0);
	app.project.activeItem.selectedLayers[0].enabled = false;
	app.project.activeItem.selectedLayers[0].label = 0;
	app.project.activeItem.selectedLayers[0].name = "render marks";
	app.project.activeItem.selectedLayers[0].guideLayer = true;
	app.project.activeItem.selectedLayers[0].comment = "marksLayer";
	app.project.activeItem.selectedLayers[0].source.name = "render marks";
}

//给图层添加标记
function add_Marks() {
	var renderMarks = new MarkerValue(
		find_MarksLayer().property("Marker").numKeys + 1
	);
	find_MarksLayer()
		.property("Marker")
		.setValueAtTime(
			app.project.activeItem.selectedLayers[0].time,
			renderMarks
		);
}

//寻找标记图层
// function find_MarksLayer() {
// 	return app.project.activeItem.layers.byName("render marks");
// }

function find_MarksLayer() {
	if (app.project.activeItem.layers.byName("render marks") === null) {
		return null;
	} else {
		for (l = 0; l < app.project.activeItem.selectedLayers.length; l++) {
			app.project.activeItem.selectedLayers[l].selected = false;
		}
		app.project.activeItem.layers.byName("render marks").selected = true;
		return app.project.activeItem.selectedLayers[0];
	}
}

//当前选中判断
function hadselctedLayersYN() {
	var hadselctedLayersYN = false;
	if (app.project.activeItem instanceof CompItem) {
		hadselctedLayersYN = true;
	} else {
		hadselctedLayersYN = false;
	}
	return hadselctedLayersYN;
}
