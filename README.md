## Before we start make sure you have to following SDK’s
- Install Android SDK, (Android studio)
- Install IOS SDK, (X code)
- Install java SDK

Having a gradle issue? Set the right permissions by running:
-	chmod +x /Applications/Android\ Studio.app/Contents/gradle/gradle-4.1/bin/gradle

```sh
# Create a JAVA_HOME variable, determined dynamically
export JAVA_HOME=$(/usr/libexec/java_home)
# Add that to the global PATH variable
export PATH=${JAVA_HOME}/bin:$PATH
# Set Android_HOME
# export ANDROID_HOME=ANDROID_SDK_ROOT
export ANDROID_SDK_ROOT=~/Library/Android/sdk/
# Add the Android SDK to the ANDROID_HOME variable
export PATH=$ANDROID_SDK_ROOT/platform-tools:$PATH
export PATH=$ANDROID_SDK_ROOT/tools:$PATH
```


### Add the necessary platforms
Needed platforms are: android, ios, browser

Add platforms with the following command:
```sh
$ cordova platform add {platform}
```


Run the application
To run the application in the browser use:
```sh
$ ionic serve
// or
$ ionic cordova run browser
```

For android you have 2 ways to debug in the emulator or you can connect your phone with usb and enable usb debugging/developer mode:
```sh
$ ionic cordova run android –-device (--livereload)
// or
$ ionic cordova run android –-emulator (--target=Nexus_5_API_26)
```

To run or build android for production run:
```sh
$ ionic cordova run android --prod --release
// or
$ ionic cordova build android --prod -–release
```

For ios :
```sh
$ ionic cordova run ios –-emulator
// or
$ ionic cordova build ios --prod –-release
```

note: builds are not working yet
