
var folderName = ["footage", "image", "audio", "comp"];
function folders() {
	if (app.project.numItems == 0) {
		app.newProject();
		for (i = 0; i < folderName.length; i++) {
			app.project.items.addFolder(folderName[i]);
		}
	}
}
// app.scheduleTask("folders()", 5000, false);
