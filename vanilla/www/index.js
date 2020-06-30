//import { Plugins, CameraResultType } from './capacitor.js';
import * as Cap from './capacitor.js';

export async function takePicture() {
    //const { Camera } = Plugins;
    const image = await Cap.Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
    });
};

export async function logToConsole() {
    console.log("hello from module!");
}

