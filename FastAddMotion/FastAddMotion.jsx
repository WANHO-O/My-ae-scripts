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
	if (!(panelGlobal instanceof Panel)) dialog.text = "FastAddMotion";
	dialog.orientation = "column";
	dialog.alignChildren = ["center", "center"];
	dialog.spacing = 10;
	dialog.margins = 0;

	var slider1 = dialog.add(
		"slider",
		undefined,
		undefined,
		undefined,
		undefined,
		{ name: "slider1" }
	);
	slider1.minvalue = 0;
	slider1.maxvalue = 1000;
	slider1.value = 600;
	slider1.onChanging = function () {
		edittext1.text = Math.round(slider1.value);
	};
	slider1.preferredSize.width = 180;
	slider1.alignment = ["center", "center"];

	var group9 = dialog.add("group", undefined, { name: "group9" });
	group9.orientation = "row";
	group9.alignChildren = ["center", "center"];
	group9.spacing = 10;
	group9.margins = 0;
	group9.alignment = ["center", "center"];

	var edittext1 = group9.add('edittext {properties: {name: "edittext1"}}');
	edittext1.text = "600";
	edittext1.onChanging = function () {
		slider1.value = Number(edittext1.text);
	};
	edittext1.preferredSize.width = 80;
	edittext1.alignment = ["center", "top"];

	var edittext2 = group9.add('edittext {properties: {name: "edittext2"}}');
	edittext2.text = "20";
	0;
	edittext2.preferredSize.width = 80;
	edittext2.alignment = ["center", "top"];

	// GROUP2
	// ======
	var group2 = dialog.add("group", undefined, { name: "group2" });
	group2.orientation = "row";
	group2.alignChildren = ["center", "center"];
	group2.spacing = 10;
	group2.margins = 0;

	var iconbutton1_imgString =
		"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%09pHYs%00%00%00%01%00%00%00%01%00O%25%C3%84%C3%96%00%00%00%24zTXtCreator%00%00%08%C2%99sL%C3%89OJUpL%2BI-RpMKKM.)%06%00Az%06%C3%8Ejz%15%C3%85%00%00%00%C3%BBIDAT8%C2%8D%C3%AD%C3%931N%02Q%14%C2%85%C3%A1%C2%99%C2%A9f%01t%10%1A%16%40MgBBGCMIec%C3%AD%1E%C3%9C%C2%80%7B0%C2%AC%C3%80%C2%92%0A%17%40%C3%A2%02%0C%05%C2%85%05%26%C3%84%04%3E%C2%9B%3B%3A%C2%8E%C3%A2%C3%8Bt%16%C3%9C%C3%A4%253%C3%B7%C2%9D%C3%B3%C3%A7%C3%8Eyo%C2%B2%2CQ%C2%98%C3%BB%C2%AAyJ_%C2%A4%04m%C3%AB%02%C2%BC%00%C3%BF%0D%10%7D%5C%C2%A3%C3%97%16%C2%80%5Ex%C3%BBU%C2%A3%C3%84%3D%0Ex%40%C2%B7a8%C3%BB%C3%AB%C2%A1%1B%C2%9EC0%C3%8A%0C%23l%C3%82p%C3%82%1AW%C3%88%C3%8F%01%C2%91%C2%87f%1D%1E%C3%81%18e(0%C3%85s%C3%8D%C2%B8%C3%81%24%C3%B6%C2%BE%01%C2%A37%C2%A9%0D!%C2%BCS%14%C3%95%C3%A8%05%C2%86x%C3%841D%5B%C3%9C%60Q3.%C2%A2%C2%B7%C2%8D%C3%B7cx%C2%86%C2%9F%C2%B0F%26%03%2C%C3%B1%1E%C2%867%C2%ACj%C3%80U%C3%B4%C2%84f%C2%89%C3%81_'%C2%96%C2%A3%C2%83%3B%C3%ACk%C2%B9%C2%BE%C3%86%C2%AA%C3%B2%C3%9A%C2%87%C2%A6%23%C2%B2N%5D%C2%85%12%C2%B7%C3%98%C3%B9Y%C2%BB%C3%98%2B%C2%93%C2%A0_%C2%A03%C2%BC%C3%84d%C2%A7x%C2%9E%C2%B5%C2%865%22%18%C3%A3)%C3%968%C3%B5%C2%89%1F%C3%80%C3%BB%C3%98%C3%B2%C2%A9%1F%C2%BF%C2%A0%00%00%00%00IEND%C2%AEB%60%C2%82";

	var iconbutton1 = group2.add(
		"iconbutton",
		undefined,
		File.decode(iconbutton1_imgString),
		{ name: "iconbutton1", style: "toolbutton" }
	);
	iconbutton1.onClick = function () {
		main(0, -Number(edittext1.text));
	};

	var iconbutton2_imgString =
		"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%09pHYs%00%00%00%01%00%00%00%01%00O%25%C3%84%C3%96%00%00%00%24zTXtCreator%00%00%08%C2%99sL%C3%89OJUpL%2BI-RpMKKM.)%06%00Az%06%C3%8Ejz%15%C3%85%00%00%00%C3%BBIDAT8%C2%8D%C3%AD%C3%92!n%02Q%14%C2%85%C3%A1a%C3%94%2C%00%07%C3%81%C2%B0%004%C2%8E%C2%84%04W%C2%83F%C2%A2j%C2%AA%C2%BB%C2%87n%C2%A0%7BhXA%25%C2%AA%5D%00%09%0B%20%08D%05MH%13%C3%A6%C2%AB%C2%B9%C2%93%C2%BC%0Ct%C2%A0U%15%C3%9C%C3%A4%C2%899%C3%A7%C2%9E%3Fo%C3%8EL%C2%965%0CZ%18%C3%A3%3D%C3%8E%18%C2%AD%C2%A6L%13%C2%AC%C3%80%14%1B%C2%94q6%C2%A1%15%7F%C2%81%3Db%C3%A7tv%C3%A1%5D%C2%86%C3%86%2B%C2%B6%C3%B1%C2%84%7D%00J%7C%C3%84)C%C3%9B%C3%87N%C2%BB%C2%B1%02%C3%B4%C2%B1%C3%80W%04%3F%C2%B1Ln%C2%B7%0CM%C3%AC%2C%C3%90%3F%07%C3%8A1%C3%80%2B%C2%8E%11%C3%98%C3%A2%01%C3%B3%048%0Fm%1B%C3%8F%C3%87%C3%88%0C%C2%90%C2%A7%C2%B0%3B%C2%AC%C2%93%C3%A0%0A%C2%93%C3%B0f%C2%89%3E%0Bm%12%3B%C3%95%C2%AC%C2%83%C2%91g%18%26f%C2%897%C2%8C%C2%AAn%C3%AA%C3%80%C2%A4%C3%ABQ%C3%ACV%C2%BD%C2%AE0%C2%AC%C2%BE%C3%A83%0ExA%C2%A7V%C3%87%090%C3%B1%3A%C2%919%04%C2%A3%C2%A8%C2%8C%1E%C3%AE%C3%91%3D%C3%93%C3%AF%C2%8F%C3%80%C3%B0%C2%BB%C2%91%C3%AD%5D%C3%BC%C2%8D%C2%AE%01%C3%96'%C2%BF%C2%8A%C3%BA%C2%8B%C2%B9%01o%C3%80%C3%BF%00%C3%BC%06%C2%8BX%C3%A7%C2%9A%C2%AF%C3%B3%23%C2%BF%00%00%00%00IEND%C2%AEB%60%C2%82";

	var iconbutton2 = group2.add(
		"iconbutton",
		undefined,
		File.decode(iconbutton2_imgString),
		{ name: "iconbutton2", style: "toolbutton" }
	);
	iconbutton2.onClick = function () {
		main(0, Number(edittext1.text));
	};

	var iconbutton3_imgString =
		"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%09pHYs%00%00%00%01%00%00%00%01%00O%25%C3%84%C3%96%00%00%00%24zTXtCreator%00%00%08%C2%99sL%C3%89OJUpL%2BI-RpMKKM.)%06%00Az%06%C3%8Ejz%15%C3%85%00%00%00%C3%95IDAT8%C2%8D%C2%B5%C3%951.EA%14%06%C3%A0%7F%5E%14%C2%B7S%C3%90%11%C2%8D%05%C2%A8%C2%A9T%C2%AF%C3%93%C2%A8I%C3%94%1A%C2%B5%3D(5%C3%B6%20V%60%05%12Q%C2%BE%C3%84%06(4%2F%C3%B1%12%C2%91%C3%B0)%C3%AET%12%C3%A4%C3%9D%C2%B9%C3%BE~%C2%BE%C2%9C%C2%999s%26Y%22%C3%A8%C2%B0%C2%8B%C3%892%C3%AB~%C3%82%C2%B6p%C2%85%19%0E%C2%9AQ%C2%9C%C3%A2M%C2%9FG%C3%AC%C2%B4%C2%82%C2%9B%C2%B8%C3%86gEo%C2%B1%C2%8D%C3%92%C2%82n%C3%A0%C2%AE%C2%82%1F%C2%B8%C3%81zk%C2%A5%C3%BB%C3%B5%1C%C3%A1%1D%17%C3%A8Z%C3%80%C2%82)%C2%9E%2B%C3%BA%C2%8A%C3%B3Vt%C2%823%2C*%C3%BA%C2%82C%C2%94%15%1C%0Dt%17I%1E%C2%92%C3%AC%25YKr%C2%99d%5E%60p%C2%A9%7D%C3%A6IV%C2%93Hr%C3%9F%C3%9E%C3%B1%C3%9FR%1A%C2%B6%C3%9C%259I%C2%BF%C3%A5%C2%92%C3%A4)%C3%89%C3%B1%20%C3%A9%C2%B7K%19%C2%82%C2%8D%C3%9B6%C2%A36%C3%B6%C2%A8Oo%C3%B4%C3%A1%C3%B0%1F%C3%A3k%C3%9C%01%5B%C3%91%3F%C2%BF%C2%80%2F%C3%9D%00Uu%C2%B4%7C5k%00%00%00%00IEND%C2%AEB%60%C2%82";

	var iconbutton3 = group2.add(
		"iconbutton",
		undefined,
		File.decode(iconbutton3_imgString),
		{ name: "iconbutton3", style: "toolbutton" }
	);
	iconbutton3.onClick = function () {
		main(-Number(edittext1.text), 0);
	};

	var iconbutton4_imgString =
		"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%14%00%00%00%14%08%06%00%00%00%C2%8D%C2%89%1D%0D%00%00%00%09pHYs%00%00%00%01%00%00%00%01%00O%25%C3%84%C3%96%00%00%00%24zTXtCreator%00%00%08%C2%99sL%C3%89OJUpL%2BI-RpMKKM.)%06%00Az%06%C3%8Ejz%15%C3%85%00%00%00%C3%ABIDAT8%C2%8D%C2%AD%C3%95%C2%A1JDA%14%06%C3%A0%C3%BF.%C2%86m%06-%C2%A2X%7C%00%C2%83%C3%89%26%0A6%C2%8B%C3%91G%C2%B0%C2%98%7D%07%C2%A3%C3%85%26X%C3%85'0%1B4%18%17%7C%02%C2%83Epa%11%C3%B43%C3%9CY%C2%B8%08%2B%C3%AE%C3%AC%C3%BD%C3%B3%C3%B0q%0Eg%C3%A6L2%23%18%60%17%C3%83Yg%C3%BE%C2%9D%C2%82%1Da%C2%84%2Blb!p%1B%2F%C3%9ALpZ%05%C2%A2%C3%81%16%C3%AE%0B%C3%B6%C2%8D%5Bl%C3%94%C2%82%C2%AB%C2%B8%C3%83W%01%1F%C2%B1%3E%C2%BF%C3%94bC%5C%C3%A0%C2%B3%60%23%C3%AC-%C2%82%C2%9D%C3%A3%C2%A3%60%C2%AF8DS%C2%8358%C3%86%5B%C3%81%C3%868%C3%83%C2%A0%C2%A6%C2%B8%C2%A5%24%C3%BBI.%C2%93%C2%AC%24%C2%91%C3%A49%C3%898%C3%89I%C3%8D%20%1A%3C%25%C3%99I%C3%92%24yO%C2%B2%5CS%C3%994Um%C3%BD%C2%95%06%07In%C2%92%C2%AC%C2%A5m%C3%B9!%C3%89u%C2%92I%C2%95%C3%98%C3%B7P%C2%A6h%7F%C3%97%C3%A6%17%C3%9A%C3%8F%C3%85%C3%AE%C2%A0%C3%BD%3D%C2%BD%02%C3%B6%C2%BB%1C%3Ap%3F%C3%AB%C2%AB%03%C3%B6%C2%BB%60%3B%C3%A8%C3%9C_%C3%80%0F%C2%81Kg%C3%84%C3%BDia%C2%9D%00%00%00%00IEND%C2%AEB%60%C2%82";

	var iconbutton4 = group2.add(
		"iconbutton",
		undefined,
		File.decode(iconbutton4_imgString),
		{ name: "iconbutton4", style: "toolbutton" }
	);
	iconbutton4.onClick = function () {
		main(Number(edittext1.text), 0);
	};

	//主函数
	function main(x, y) {
		if (err()) {
			var selLayer = app.project.activeItem.selectedLayers;
			app.beginUndoGroup("w");
			for (q = 0; q < selLayer.length; q++) {
				set_Key(selLayer[q], x, y);
				set_Key_Easy(selLayer[q]);
				if (selLayer[q].comment == "1") {
					selLayer[q].comment = "0";
				} else {
					selLayer[q].comment = "1";
				}
			}
			app.endUndoGroup();
		} else {
			alert("未选中层！");
		}
	}

	//输出帧转秒
	function FTT() {
		return edittext2.text * app.project.activeItem.frameDuration;
	}

	//设置关键帧
	function set_Key(layer, x, y) {
		if (layer.comment == "1") {
			opacity1 = layer.opacity.value;
			opacity2 = 0;
			posi1 = [layer.position.value[0], layer.position.value[1]];
			posi2 = [layer.position.value[0] - x, layer.position.value[1] - y];
			layer.outPoint = layer.time + FTT();
		} else {
			opacity1 = 0;
			if (layer.opacity.value == 0) {
				opacity2 = 100;
			} else {
				opacity2 = layer.opacity.value;
			}

			posi1 = [layer.position.value[0] + x, layer.position.value[1] + y];
			posi2 = [layer.position.value[0], layer.position.value[1]];
			if (layer.comment == "") {
				layer.inPoint = layer.time;
			}
		}
		layer.opacity.setValueAtTime(layer.time, opacity1);
		layer.opacity.setValueAtTime(layer.time + FTT(), opacity2);
		layer.position.setValueAtTime(layer.time, posi1);
		layer.position.setValueAtTime(layer.time + FTT(), posi2);
	}

	//调整设置关键帧的曲线
	function set_Key_Easy(layer) {
		var myKey = new KeyframeEase(0, 70);
		var myKey1 = new KeyframeEase(0, 30);
		var keyIndexO = [
			layer.property("opacity").nearestKeyIndex(layer.time),
			layer.property("opacity").nearestKeyIndex(layer.time) + 1,
		];
		var keyIndexP = [
			layer.property("position").nearestKeyIndex(layer.time),
			layer.property("position").nearestKeyIndex(layer.time) + 1,
		];

		layer
			.property("opacity")
			.setTemporalEaseAtKey(keyIndexO[0], [myKey1], [myKey1]);
		layer
			.property("opacity")
			.setTemporalEaseAtKey(keyIndexO[1], [myKey1], [myKey1]);

		if (layer.comment == "1") {
			easykey = 1;
		} else {
			easykey = 0;
		}
		switch (easykey) {
			case 0:
				layer
					.property("position")
					.setTemporalEaseAtKey(keyIndexP[0], [myKey1], [myKey1]);
				layer
					.property("position")
					.setTemporalEaseAtKey(keyIndexP[1], [myKey], [myKey]);

				break;
			case 1:
				layer
					.property("position")
					.setTemporalEaseAtKey(keyIndexP[0], [myKey], [myKey]);
				layer
					.property("position")
					.setTemporalEaseAtKey(keyIndexP[1], [myKey1], [myKey1]);
				break;
			default:
				break;
		}
	}

	//判断当前是否选中层 返回布尔值
	function err() {
		var p = false;
		if (app.project.activeItem instanceof CompItem) {
			if (app.project.activeItem.selectedLayers.length > 0) {
				p = true;
			} else {
				p = false;
			}
		} else {
			p = false;
		}
		return p;
	}

	dialog.layout.layout(true);
	dialog.layout.resize();
	dialog.onResizing = dialog.onResize = function () {
		this.layout.resize();
	};

	if (dialog instanceof Window) dialog.show();

	return dialog;
})();
