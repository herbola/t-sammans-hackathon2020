import { Injectable } from "@angular/core";
import * as Permissions from "nativescript-permissions";

declare var android: any;

@Injectable()
export class PermissionController {
    getCameraPermission() {
        Permissions.requestPermission(
            android.Manifest.permission.CAMERA,
            "Needed for connectivity status"
        )
            .then(() => {
                console.log("Permission granted!");
            })
            .catch(() => {
                console.log("Permission is not granted (sadface)");
            });
    }
}
