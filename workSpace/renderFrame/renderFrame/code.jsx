// var omItem1_settable_str = app.project.renderQueue
// 	.item(1)
// 	.outputModule(1)
// 	.getSettings(GetSettingsFormat.STRING_SETTABLE);
var omItem1_settable_str = app.project.renderQueue
	.item(1)
	.outputModule(1).templates;
var omItem1_settable_str_json = omItem1_settable_str.toSource();

$.writeln(omItem1_settable_str_json.toString());
