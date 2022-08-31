# PhaserJS + Capacitor Tutorial Project

Hey there 👋

This repo contains the project files to go along with the article I wrote on creating PhaserJS games which run as native Android and/or iOS apps, here:

https://saricden.com/articles/port-phaserjs-games-to-native-android-ios-apps-using-capacitorjs

## Setup

First install dependencies:

```
npm install
```

Then, build the project:

```
npm run build
```

Next, sync the build with native project folders:

```
npx cap sync
```

Finally, open it in the native editor of your choice and proceed:

```
npx cap open android
```

Or

```
npx cap open ios
```