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

var iconbuttonSetting_imgString =
	"%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%C2%96%00%00%00%1E%08%06%00%00%00%C3%8E%C3%A2%C3%A7W%00%00%00%09pHYs%00%00%00%01%00%00%00%01%00O%25%C3%84%C3%96%00%00%00%24zTXtCreator%00%00%08%C2%99sL%C3%89OJUpL%2BI-RpMKKM.)%06%00Az%06%C3%8Ejz%15%C3%85%00%00%02%C3%B7IDATx%C2%9C%C3%AD%C3%99%3FH%1BQ%1C%07%C3%B0_%12%C2%A3I%14%09%C2%87!%C2%8B%C2%92%5E%C2%92b%5B%C2%82p%19%C3%9A%25%C2%938%C2%95%14%1CB!%C2%81%16t%11%C3%9A%C3%91%C2%A1%C2%B5%C3%90.BK'%C2%97%C2%B6%C2%ABtI%C2%96%0C%C2%81%C2%A6C%C3%81%C3%B1%26%C2%87ZPj%25%C3%97%5E%25B%10%C3%A5%0C%C3%B7%C3%AE%C2%88D%C2%90.*A%C3%B2%C3%A7%C2%9D%C3%AF%5E%2F%C3%8A%C3%AF%C2%B3%1D%C2%BFw_~y%C3%B7K%5EH%00%10B%08!%C2%84%10B%C3%A8%26%C2%93eyAQ%C2%94MEQ6eY%5Ep%C2%BA%C2%9F~3%C3%A0t%03%C3%97%C3%95%C3%B0%C3%B0%C2%B0%20%08B%02%00%C2%80%10%228%C3%9DO%C2%BFq%3B%C3%9D%00%C2%BA%C2%99p%C2%B0%10%178X%C2%88%C2%8B%C2%8E%C3%9F%C2%B1J%C2%A5%C3%92%C2%BD%C2%91%C2%91%C2%91(%00%C3%80%C3%81%C3%81%C3%81V6%C2%9B%C3%BD%C3%8BZk%C2%B5%C2%BA%C2%BAzgbb%22%C3%8E%C3%92%7C%C2%B7%C3%BCb%C2%B1x%3B%18%0CN%C2%B2%C3%A4%C3%97%C3%AB%C3%B5%C2%9DL%26S%C3%A9%C2%B5%C3%AE%C3%B4%C3%B44%C2%BE%C2%B6%C2%B6%C2%96%C2%B63%C2%BFP(%C3%9C%0A%C2%85B%09%C2%AB%C2%99%C2%AD%C2%AA%C3%95%C2%AA277%C3%B7%C2%8BW%C2%BEa%18%7Ffgg%7F%C2%B6%C2%ABu%1C%C2%ACh4%C3%BAt%7C%7C%C3%BC%05%00%C2%80%C2%A2(%C3%8F%01%C3%A0%13k%C2%ADU(%14%C3%8A%25%C2%93%C3%89%C3%97Wx%3D%17%C2%BA%C3%A5%C3%87b%C2%B1L%24%12y%C3%8B%C2%92%C2%BF%C2%BB%C2%BB%C3%BB%0A%00%C3%9E%C3%B5Z'%C2%8A%C3%A2%C2%BC(%C2%8A%C3%B3v%C3%A6%C3%87b%C2%B1%C2%87%C3%B1x%C3%BC%C2%A3%C3%95%C3%8CV%C3%87%C3%87%C3%87%C3%8B%00%C3%B0%C2%86W%C3%BE%C3%9E%C3%9E%C3%9E%7B%00x%C3%99%C2%AE%C2%86G!%C3%A2%C3%82%C2%B1%C2%9F%1Bt%5D%C3%9F%C3%9E%C3%9F%C3%9F%2F%C2%B0d%18%C2%86%C3%B1%C2%9Bf%C2%9D%C2%A6i%C3%9FONNvh%C3%96z%C2%BD%C3%9EIA%10%C2%92V%C3%BA%C3%A0%C2%9D_%C2%AB%C3%95~%C2%B8%C3%9D%C3%AEm%C2%9A%C2%B5%1E%C2%8F'%3A66%C3%B6%C3%80J%C3%BE%C3%91%C3%91%C3%91V%C2%B3%C3%99%C3%9C%C2%B43%C3%9F%C2%B1%C3%81%C3%8A%C3%A5r%05%00%60%1A%2CZ%C2%84%C2%90%C2%A2%24I%3D%C2%8F4%00%C2%80%C2%8D%C2%8D%C2%8D%25%C2%AB%0F%C2%9Ew%C2%BE%C2%AA%C2%AA_%C3%92%C3%A9t%C3%9B%23%C3%AD%C2%B2%C3%B5%C3%B5%C3%B5gV%07%C3%8B4%C3%8D%C2%AFSSSm%C2%8F%C2%B4%C2%AB%C3%A6%C3%A3Q%C2%88%C2%B8p%C3%AC%13%2B%C2%9F%C3%8Fg%25Iz%C3%84%C2%92Q%C2%AB%C3%95%3EOOO%7F%C2%B3%C2%AB'd%1F%C3%87%06ktt%C3%B4n8%1C%C3%8E%C2%B2d%10Bd%C2%BB%C3%BAA%C3%B6%C3%82%C2%A3%10q%C3%91%17%7FBW*%C2%95%0F%C2%84%10%C2%AA%23%C3%8D%C3%A5r%3D%C2%96%24%C3%A9%09%C3%AF%C2%9E%10%C2%9B%C2%BE%18%2C%C2%97%C3%8B%C2%B5%3D33S%C2%A6Y%5B.%C2%97%C3%AF%C3%B3%C3%AE%07%C2%B1%C2%A3%1A%2CM%C3%93%06%01%20x~M%08%19%C2%A0%C2%A9%C3%91%C2%BA%C2%9C%C3%91%C2%8Di%C2%9A%7D%C3%B1f%C3%B8%C2%9F%C3%8E%5E3%C3%95%C3%BE%C2%9C%C3%AD%C2%A5%25g%C3%8F%C3%8C%C3%96%7C%C2%AA%C2%87%C2%94H%24VTU%5D9%C2%BF%1E%1A%1A%C2%A2%C2%AA%C3%91%C2%BA%C2%9C%C3%91%C3%8D%C3%A0%C2%A0%C3%A5%7D%C2%BB%C3%B6R%C2%A9%C3%94%C2%92%C2%AA%C2%AAK4k%C2%BD%5E%C2%AF%C3%A5%7CQ%14%17UU%5D%C2%B43%C2%9Fj%C2%B0%02%C2%81%C3%80%C2%95j%C2%B4%C3%AC%C3%88%C2%B8%C3%89%C3%BC~%3F%C3%B8%C3%BD~n%C3%B9%3E%C2%9F%0F%7C%3E%C2%9F%C2%AD%C2%99%1D%07K%C3%97%C3%B5CM%C3%93%C2%B6X%C3%82%1B%C2%8DF%C2%BDS%C3%8D0%0C%C2%8Dg%C2%BEi%C2%9A%17%C3%B9%C2%A6ij%C2%B4%C2%99%C2%B4%C3%B7%C3%B1%C3%8Eo4%1Au%C3%96%C3%BD1%0C%C2%83k%C2%BE%C2%AE%C3%AB%C2%87%2C%C3%B7%23%C2%84%10B%08!%C2%84%C3%BA%C3%80%3FL%02l%C2%B6r%C2%A2d%3A%00%00%00%00IEND%C2%AEB%60%C2%82";
var iconbuttonSetting = dialog.add(
	"iconbutton",
	undefined,
	File.decode(iconbuttonSetting_imgString),
	{ name: "iconbuttonSetting", style: "toolbutton" }
);
iconbuttonSetting.onClick = setting;

var buttonMarks = dialog.add("button", undefined, undefined, {
	name: "buttonMarks",
});
buttonMarks.text = "添加标记";
buttonMarks.onClick;
buttonMarks.preferredSize.width = 150;

var buttonFile = dialog.add("button", undefined, undefined, {
	name: "buttonFile",
});
buttonFile.text = "选择目录";
buttonFile.onClick;
buttonFile.preferredSize.width = 150;

var buttonRender = dialog.add("button", undefined, undefined, {
	name: "buttonRender",
});
buttonRender.text = "导出";
buttonRender.onClick;
buttonRender.preferredSize.width = 150;

dialog.layout.layout(true);
dialog.layout.resize();
dialog.onResizing = dialog.onResize = function () {
	this.layout.resize();
};

if (dialog instanceof Window) dialog.show();

//---------------------------------------------------------
//设置窗口UI函数
function setting() {
	var panelGlobal = this;

	// SETTING
	// =======
	var setting =
		panelGlobal instanceof Panel
			? panelGlobal
			: new Window("palette", undefined, undefined, {
					closeButton: false,
			  });
	if (!(panelGlobal instanceof Panel)) setting.text = "setting";
	setting.preferredSize.width = 200;
	setting.orientation = "column";
	setting.alignChildren = ["fill", "top"];
	setting.spacing = 10;
	setting.margins = 16;

	// GROUPTYPE
	// =========
	var groupType = setting.add("group", undefined, { name: "groupType" });
	groupType.preferredSize.width = 150;
	groupType.orientation = "row";
	groupType.alignChildren = ["left", "center"];
	groupType.spacing = 10;
	groupType.margins = 0;

	var staticText_Type = groupType.add("statictext", undefined, undefined, {
		name: "staticText_Type",
	});
	staticText_Type.text = "格式";
	staticText_Type.preferredSize.width = 70;

	var setting_dropdown1_array = ["Jpeg", "Png", "photoshop", "Tiff"];
	var setting_dropdown1 = groupType.add(
		"dropdownlist",
		undefined,
		undefined,
		{
			name: "setting_dropdown1",
			items: setting_dropdown1_array,
		}
	);
	setting_dropdown1.selection = 3;
	setting_dropdown1.preferredSize.width = 100;

	// GROUPRESOLUTION
	// ===============
	var groupResolution = setting.add("group", undefined, {
		name: "groupResolution",
	});
	groupResolution.preferredSize.width = 150;
	groupResolution.orientation = "row";
	groupResolution.alignChildren = ["left", "center"];
	groupResolution.spacing = 10;
	groupResolution.margins = 0;

	var staticText_Resolution = groupResolution.add(
		"statictext",
		undefined,
		undefined,
		{ name: "staticText_Resolution" }
	);
	staticText_Resolution.text = "分辨率";
	staticText_Resolution.preferredSize.width = 70;

	var setting_dropdown2_array = ["完整", "二分之一", "三分之一", "四分之一"];
	var setting_dropdown2 = groupResolution.add(
		"dropdownlist",
		undefined,
		undefined,
		{ name: "setting_dropdown2", items: setting_dropdown2_array }
	);
	setting_dropdown2.selection = 0;
	setting_dropdown2.preferredSize.width = 100;

	// GROUPCHANNEL
	// ============
	var groupChannel = setting.add("group", undefined, {
		name: "groupChannel",
	});
	groupChannel.preferredSize.width = 150;
	groupChannel.orientation = "row";
	groupChannel.alignChildren = ["left", "center"];
	groupChannel.spacing = 10;
	groupChannel.margins = 0;

	var staticText_Channel = groupChannel.add(
		"statictext",
		undefined,
		undefined,
		{
			name: "staticText_Channel",
		}
	);
	staticText_Channel.text = "通道";
	staticText_Channel.preferredSize.width = 70;

	var setting_dropdown3_array = ["RGB", "Alpha", "RGB + Alpha"];
	var setting_dropdown3 = groupChannel.add(
		"dropdownlist",
		undefined,
		undefined,
		{
			name: "setting_dropdown3",
			items: setting_dropdown3_array,
		}
	);
	setting_dropdown3.selection = 2;
	setting_dropdown3.preferredSize.width = 100;

	// GROUPMASK
	// =========
	var groupMask = setting.add("group", undefined, { name: "groupMask" });
	groupMask.preferredSize.width = 150;
	groupMask.orientation = "row";
	groupMask.alignChildren = ["left", "center"];
	groupMask.spacing = 10;
	groupMask.margins = 0;

	var staticText_Mask = groupMask.add("statictext", undefined, undefined, {
		name: "staticText_Mask",
	});
	staticText_Mask.text = "遮罩";
	staticText_Mask.preferredSize.width = 70;

	var setting_dropdown5_array = ["直接", "预乘"];
	var setting_dropdown5 = groupMask.add(
		"dropdownlist",
		undefined,
		undefined,
		{
			name: "setting_dropdown5",
			items: setting_dropdown5_array,
		}
	);
	setting_dropdown5.selection = 0;
	setting_dropdown5.preferredSize.width = 100;

	// GROUPADJUST
	// ===========
	var groupAdjust = setting.add("panel", undefined, undefined, {
		name: "groupAdjust",
	});
	groupAdjust.text = "调整大小";
	groupAdjust.preferredSize.width = 150;
	groupAdjust.orientation = "column";
	groupAdjust.alignChildren = ["center", "center"];
	groupAdjust.spacing = 10;
	groupAdjust.margins = 10;

	var staticText_CompRes = groupAdjust.add(
		"statictext",
		undefined,
		undefined,
		{
			name: "staticText_CompRes",
		}
	);
	staticText_CompRes.text = "0000*0000";
	staticText_CompRes.preferredSize.width = 70;

	// ADJUST_GROUP1
	// =============
	var adjust_group1 = groupAdjust.add("group", undefined, {
		name: "adjust_group1",
	});
	adjust_group1.preferredSize.width = 150;
	adjust_group1.preferredSize.height = 30;
	adjust_group1.orientation = "row";
	adjust_group1.alignChildren = ["left", "top"];
	adjust_group1.spacing = 0;
	adjust_group1.margins = 0;

	// ADJUST_GROUP2
	// =============
	var adjust_group2 = adjust_group1.add("group", undefined, {
		name: "adjust_group2",
	});
	adjust_group2.preferredSize.width = 75;
	adjust_group2.orientation = "row";
	adjust_group2.alignChildren = ["left", "center"];
	adjust_group2.spacing = 10;
	adjust_group2.margins = 0;

	var edittextAdjustx = adjust_group2.add(
		'edittext {properties: {name: "edittextAdjustx"}}'
	);
	edittextAdjustx.text = "EditText";
	edittextAdjustx.preferredSize.width = 60;

	// ADJUST_GROUP3
	// =============
	var adjust_group3 = adjust_group1.add("group", undefined, {
		name: "adjust_group3",
	});
	adjust_group3.preferredSize.width = 20;
	adjust_group3.orientation = "row";
	adjust_group3.alignChildren = ["center", "center"];
	adjust_group3.spacing = 10;
	adjust_group3.margins = 0;

	var checkBoxAdjust = adjust_group3.add("checkbox", undefined, undefined, {
		name: "checkBoxAdjust",
	});

	// ADJUST_GROUP4
	// =============
	var adjust_group4 = adjust_group1.add("group", undefined, {
		name: "adjust_group4",
	});
	adjust_group4.preferredSize.width = 65;
	adjust_group4.orientation = "row";
	adjust_group4.alignChildren = ["right", "center"];
	adjust_group4.spacing = 10;
	adjust_group4.margins = 0;

	var edittextAdjusty = adjust_group4.add(
		'edittext {properties: {name: "edittextAdjusty"}}'
	);
	edittextAdjusty.text = "EditText";
	edittextAdjusty.preferredSize.width = 60;

	// GROUPBUTTON
	// ===========
	var groupButton = setting.add("group", undefined, { name: "groupButton" });
	groupButton.preferredSize.width = 150;
	groupButton.orientation = "row";
	groupButton.alignChildren = ["left", "center"];
	groupButton.spacing = 10;
	groupButton.margins = 0;

	var settingButton = groupButton.add("button", undefined, undefined, {
		name: "settingButton",
	});
	settingButton.text = "确定";
	settingButton.onClick = function () {
		setting.hide();
	};
	settingButton.preferredSize.width = 182;

	setting.layout.layout(true);
	setting.layout.resize();
	setting.onResizing = setting.onResize = function () {
		this.layout.resize();
	};

	if (setting instanceof Window) setting.show();
}

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

//添加标记按钮事件
