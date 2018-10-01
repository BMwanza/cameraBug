const BrowseViewModel = require("./browse-view-model");
var camera = require("nativescript-camera");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new BrowseViewModel();
}

function launchCamera() {
    camera.requestPermissions();
    let options = { width: 300, height: 200, keepAspectRatio: false, saveToGallery: false };

    camera.takePicture(options).then(_ =>{
        console.log("Bug")
    }).catch(error =>{
        console.log(error);
    })
}

exports.launchCamera = launchCamera
exports.onNavigatingTo = onNavigatingTo;
