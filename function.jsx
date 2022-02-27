//判断当前有无选中层，返回布尔值
function hadselctedLayersYN() {
	var hadselctedLayersYN = 0;
	if (app.project.activeItem instanceof CompItem) {
		if (app.project.activeItem.selectedLayers.length > 0) {
			hadselctedLayersYN = 2;
		} else {
			hadselctedLayersYN = 1;
		}
	} else {
		hadselctedLayersYN = 0;
	}
	return hadselctedLayersYN;
}
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

//在项目文件的爷级目录新建文件夹
var projectFile = app.project.file;
var addFolderPath = projectFile.parent.parent.fsName + "/myfolder/";
var addFolder = new Folder(addFolderPath);
if (!addFolder.exists) {
	addFolder.create();
	addFolder.execute();
}

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//渲染

var b = app.project.renderQueue.items.add(a);
b.render = true;
b.timeSpanDuration = 0.1;
b.timeSpanStart = 0;
app.project.renderQueue.render();

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//渲染设置
({
	"Audio Bit Depth": "16 Bit",
	"Audio Channels": "Stereo",
	"Audio Sample Rate": "48.000 kHz",
	Crop: "false",
	"Include Project Link": "false",
	"Include Source XMP Metadata": "false",
	"Output Audio": "Auto",
	"Output File Info": {
		"Full Flat Path":
			"D:\\WANHOO\\OneDrive\\Desktop\\商业MG\\9期_超级激励者\\output\\合成 1.mp4",
		"Base Path":
			"D:\\WANHOO\\OneDrive\\Desktop\\商业MG\\9期_超级激励者\\output",
		"Subfolder Path": "",
		"File Name": "合成 1.mp4",
		"File Template": "[compName].[fileextension]",
	},
	"Post-Render Action": "None",
	Resize: "false",
	"Video Output": "true",
});

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//file文件操作

var infile = File("~/Desktop/Untitled.ffx");
$.writeln(infile.displayName); //获得File对象的名字,包括后缀
$.writeln(infile.fsName); //获得File对象的路径
$.writeln(infile.fullName); //获得File对象的绝对路径
$.writeln(infile.length); //获得File对象的文件大小,单位是字节,不存在文件则为-1
$.writeln(infile.name); //获得File对象的名字
$.writeln(infile.parent); //获得包含此文件的文件夹对象,是个Folder对象

infile.open("r"); //打开文件,"r'为read模式,只读取,不写入,"w"为write模式,摧毁一切已存在的数据,写入新数据到文件中
infile.encoding = "BINARY"; //更改编码模式为二进制,有些文件只有二进制的时候才能被脚本读取到值
var str = infile.read(); //读取文件内容字符串,赋值给一个变量
infile.close(); //文件关闭,必须在读取写入之后关闭这个文件,否则重复open会导致文件损坏

var outfileTemp = File("~/Desktop/Trans.ffx"); //新建一个文件
outfileTemp.open("w"); //打开文件,写入
outfileTemp.encoding = "binary"; //更改编码
outfileTemp.write(str); //写入操作
outfileTemp.close(); //关闭文件

outfileTemp.remove(); //删除文件对象,不可恢复.

//infile.copy(path)         复制文件到另外一个位置,path是个路径字符串,必须包含文件夹与文件的名字以及后缀
selectedFiles = File.openDialog("选择文件", ["*.png", "*.jpg", "*.*"], true);
//打开文件选择窗口,第一个参数为窗口名,第二个参数为过滤选项,必须是包含字符串的数组类型,第三个是是否可以多选.这个方法返回选中的文件,没有选择则返回null
saveFile = File.openDialog("选择文件存储位置", ["*.png", "*.jpg", "*.*"]);
//打开文件存放窗口,第一个参数为窗口名,第二个参数为过滤选项,必须是包含字符串的数组类型.这个方法返回设定好的文件对象,没有设定则返回null

//找图层并且选中

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

//---------------------------------------------------------
app.beginUndoGroup();
app.endUndoGroup();

//
layer.constructor.name;
// 判断图层类型
// 图层构造器名称
