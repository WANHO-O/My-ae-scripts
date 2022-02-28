var panelGlobal = this;
var dialog = (function () {
	// DIALOG
	// ======
	var dialog =
		panelGlobal instanceof Panel
			? panelGlobal
			: new Window("palette", undefined, undefined, { resizeable: true });
	if (!(panelGlobal instanceof Panel)) dialog.text = "TextCut";
	dialog.preferredSize.width = 400;
	dialog.preferredSize.height = 350;
	dialog.orientation = "column";
	dialog.alignChildren = ["center", "top"];
	dialog.spacing = 10;
	dialog.margins = 16;

	var edittext1 = dialog.add(
		'edittext {properties: {name: "edittext1", multiline: true, scrollable: true}}'
	);
	edittext1.helpTip = "输入文本";
	edittext1.text = "";
	edittext1.preferredSize.width = 400;
	edittext1.preferredSize.height = 350;

	var button1 = dialog.add("button", undefined, undefined, {
		name: "button1",
	});
	button1.text = "cut";
	button1.onClick = textCut;
	button1.preferredSize.width = 299;

	var button2 = dialog.add("button", undefined, undefined, {
		name: "button2",
	});
	button2.text = "Expression";
	button2.onClick = Expression;
	button2.preferredSize.width = 299;

	function textCut() {
		var veryL = 0;
		var judge = false;
		var text = edittext1.text
			.replace(/[\s]/g, "")
			.replace(/[!！]/g, "！_")
			.replace(/[?？]/g, "？_");
		text = text.split(/[,.，。;:；：_]/);

		for (i = 0; i < text.length; i++) {
			if (/“/.test(text[i])) {
				text[i] = text[i].replace("“", "");
				judge = true;
			}
			if (/”/.test(text[i])) {
				text[i] = text[i].replace("”", "");
				judge = false;
			}
			if (judge) {
				text[i] = "“" + text[i] + "”";
			}
		}

		for (i = 0; i < text.length; i++) {
			if (text[i].length > 20) {
				veryL += 1;
			}
		}
		text = text.join("\n");
		edittext1.text = text;
		if (veryL != 0) {
			alert("有" + veryL + "个超长段，请分割");
		}
	}
	function Expression() {
		var thisComp = app.project.activeItem;
		var selLayer = thisComp.selectedLayers;
		function type(o) {
			var s = Object.prototype.toString.call(o);
			return s.match(/\[object (.*?)\]/)[1].toLowerCase();
		}
		if (thisComp instanceof CompItem) {
			if (selLayer.length == 1 && type(selLayer[0]) == "textlayer") {
				selLayer[0]("Text")("sourceText").expression =
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
			} else {
				alert("请选中一个文本图层！");
			}
		} else {
			alert("请先选中合成！");
		}
	}

	dialog.layout.layout(true);
	dialog.layout.resize();
	dialog.onResizing = dialog.onResize = function () {
		this.layout.resize();
	};

	if (dialog instanceof Window) dialog.show();

	return dialog;
})();
