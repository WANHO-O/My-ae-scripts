// by 熊喵
var panelGlobal = this;
var dialog = (function () {
	// DIALOG
	// ======
	var dialog =
		panelGlobal instanceof Panel
			? panelGlobal
			: new Window("palette", undefined, undefined, {
					su1PanelCoordinates: true,
					resizeable: true,
			  });
	if (!(panelGlobal instanceof Panel)) dialog.text = "LayerMaskCut";
	dialog.orientation = "row";
	dialog.alignChildren = ["center", "center"];
	dialog.spacing = 10;
	dialog.margins = 16;

	var button1 = dialog.add("button", undefined, undefined, {
		name: "button1",
	});
	button1.text = "Cut";
	button1.onClick = LayerMc;
	button1.preferredSize.width = 100;
	button1.alignment = ["center", "center"];

	function LayerMc() {
		app.beginUndoGroup("mask操作");
		var p = app.project.activeItem.selectedProperties;
		var l = app.project.activeItem.selectedLayers;
		if (l.length) {
			for (var i = l.length - 1; i >= 0; i--) {
				//处理所有选中的图层,因为会删除选中的层，所以反向遍历
				go(l[i]);
			}
		} else {
			alert("请先选中图层或mask！", "提示：");
		}
		app.endUndoGroup();

		function go(layer) {
			if (layer.mask.numProperties > 1) {
				//mask数量至少大于1才做处理
				for (var i = 1; i <= layer.mask.numProperties; i++) {
					deleteMask(layer.duplicate(), i); //处理复制后的图层
				}
				layer.remove();
			}
		}
		function deleteMask(layer, index) {
			for (var i = layer.mask.numProperties; i > 0; i--) {
				//遍历mask然后删除，因为会删除mask，所以反向遍历
				if (i != index) {
					//排除指定的mask
					layer.mask(i).remove();
				} else {
					layer.name = layer.mask(i).name;
				}
			}
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
