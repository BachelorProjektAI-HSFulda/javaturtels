cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "id": "cordova-plugin-camera.Camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "id": "cordova-plugin-camera.camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "file": "plugins/cordova-plugin-contacts/www/contacts.js",
    "id": "cordova-plugin-contacts.contacts",
    "clobbers": [
      "navigator.contacts"
    ]
  },
  {
    "file": "plugins/cordova-plugin-contacts/www/Contact.js",
    "id": "cordova-plugin-contacts.Contact",
    "clobbers": [
      "Contact"
    ]
  },
  {
    "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
    "id": "cordova-plugin-contacts.convertUtils"
  },
  {
    "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
    "id": "cordova-plugin-contacts.ContactAddress",
    "clobbers": [
      "ContactAddress"
    ]
  },
  {
    "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
    "id": "cordova-plugin-contacts.ContactError",
    "clobbers": [
      "ContactError"
    ]
  },
  {
    "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
    "id": "cordova-plugin-contacts.ContactField",
    "clobbers": [
      "ContactField"
    ]
  },
  {
    "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
    "id": "cordova-plugin-contacts.ContactFindOptions",
    "clobbers": [
      "ContactFindOptions"
    ]
  },
  {
    "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
    "id": "cordova-plugin-contacts.ContactName",
    "clobbers": [
      "ContactName"
    ]
  },
  {
    "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
    "id": "cordova-plugin-contacts.ContactOrganization",
    "clobbers": [
      "ContactOrganization"
    ]
  },
  {
    "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
    "id": "cordova-plugin-contacts.ContactFieldType",
    "merges": [
      ""
    ]
  },
  {
    "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
    "id": "cordova-plugin-customurlscheme.LaunchMyApp",
    "clobbers": [
      "window.plugins.launchmyapp"
    ]
  },
  {
    "file": "plugins/cordova-plugin-device/www/device.js",
    "id": "cordova-plugin-device.device",
    "clobbers": [
      "device"
    ]
  },
  {
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "file": "plugins/cordova-plugin-media/www/MediaError.js",
    "id": "cordova-plugin-media.MediaError",
    "clobbers": [
      "window.MediaError"
    ]
  },
  {
    "file": "plugins/cordova-plugin-media/www/Media.js",
    "id": "cordova-plugin-media.Media",
    "clobbers": [
      "window.Media"
    ]
  },
  {
    "file": "plugins/cordova-plugin-safariviewcontroller/www/SafariViewController.js",
    "id": "cordova-plugin-safariviewcontroller.SafariViewController",
    "clobbers": [
      "SafariViewController"
    ]
  },
  {
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "id": "cordova-plugin-statusbar.statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "id": "ionic-plugin-keyboard.keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-file.DirectoryEntry",
    "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.DirectoryReader",
    "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.DirectoryReader"
    ]
  },
  {
    "id": "cordova-plugin-file.Entry",
    "file": "plugins/cordova-plugin-file/www/Entry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Entry"
    ]
  },
  {
    "id": "cordova-plugin-file.File",
    "file": "plugins/cordova-plugin-file/www/File.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.File"
    ]
  },
  {
    "id": "cordova-plugin-file.FileEntry",
    "file": "plugins/cordova-plugin-file/www/FileEntry.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileEntry"
    ]
  },
  {
    "id": "cordova-plugin-file.FileError",
    "file": "plugins/cordova-plugin-file/www/FileError.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileError"
    ]
  },
  {
    "id": "cordova-plugin-file.FileReader",
    "file": "plugins/cordova-plugin-file/www/FileReader.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileReader"
    ]
  },
  {
    "id": "cordova-plugin-file.FileSystem",
    "file": "plugins/cordova-plugin-file/www/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadOptions",
    "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadOptions"
    ]
  },
  {
    "id": "cordova-plugin-file.FileUploadResult",
    "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileUploadResult"
    ]
  },
  {
    "id": "cordova-plugin-file.FileWriter",
    "file": "plugins/cordova-plugin-file/www/FileWriter.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.FileWriter"
    ]
  },
  {
    "id": "cordova-plugin-file.Flags",
    "file": "plugins/cordova-plugin-file/www/Flags.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Flags"
    ]
  },
  {
    "id": "cordova-plugin-file.LocalFileSystem",
    "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.LocalFileSystem"
    ],
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.Metadata",
    "file": "plugins/cordova-plugin-file/www/Metadata.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.Metadata"
    ]
  },
  {
    "id": "cordova-plugin-file.ProgressEvent",
    "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.ProgressEvent"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems",
    "file": "plugins/cordova-plugin-file/www/fileSystems.js",
    "pluginId": "cordova-plugin-file"
  },
  {
    "id": "cordova-plugin-file.requestFileSystem",
    "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
    "pluginId": "cordova-plugin-file",
    "clobbers": [
      "window.requestFileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.resolveLocalFileSystemURI",
    "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "window"
    ]
  },
  {
    "id": "cordova-plugin-file.isChrome",
    "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.androidFileSystem",
    "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "FileSystem"
    ]
  },
  {
    "id": "cordova-plugin-file.fileSystems-roots",
    "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
    "pluginId": "cordova-plugin-file",
    "runs": true
  },
  {
    "id": "cordova-plugin-file.fileSystemPaths",
    "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "pluginId": "cordova-plugin-file",
    "merges": [
      "cordova"
    ],
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-compat": "1.2.0",
  "cordova-plugin-camera": "2.4.1",
  "cordova-plugin-console": "1.0.5",
  "cordova-plugin-contacts": "2.3.1",
  "cordova-plugin-customurlscheme": "4.3.0",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-inappbrowser": "1.7.2",
  "cordova-plugin-media": "2.4.1",
  "cordova-plugin-safariviewcontroller": "1.5.2",
  "cordova-plugin-splashscreen": "4.0.3",
  "cordova-plugin-statusbar": "2.2.1",
  "cordova-plugin-whitelist": "1.3.1",
  "cordova-sqlite-storage": "2.2.0",
  "ionic-plugin-keyboard": "2.2.1",
  "cordova-plugin-file": "5.0.0"
};
// BOTTOM OF METADATA
});