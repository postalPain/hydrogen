# Stryber React Native Template #

## Description ##

React Native Hydrogen app

## Prerequisites ##

You need the following tools installed on your host machine:

- npm / node
- yarn
- cocoapods
- react-native-cli
- Xcode
- Android SDK

## Development ##

### How to initialize template ###

```shell script
PROJECT_NAME=[project name] PROJECT_DISPLAY_NAME=[project display name] yarn init:template
```

### How to debug on IOS device / emulator ###

Run the following command in the terminal

```shell script
yarn run ios
```

### How to debug on Android device / emulator ###

Run the following command in the terminal

```shell script
yarn run android
```

### How to debug on IOS device / simulator ###

Run the following command in the terminal

```shell script
yarn run ios
```

### Testing ###

linter

```shell script
yarn run lint
```

unit tests

```shell script
yarn run test
```

### App version ###

To change build version for Android -> android/app/src/build.gradle
```
versionCode 3
versionName "0.8.0"
```
To change build version for iOS -> ios/Quit4Good/info.plist
```
<key>CFBundleShortVersionString</key>
<string>0.8.0</string>
<key>CFBundleVersion</key>
<string>3</string>
```
where versionCode/CFBundleVersion = prevVersionCode + 1 and versionName/CFBundleShortVersionString depending on your needs (minor or major update)
