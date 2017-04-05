#!/bin/bash

cd android && ./gradlew assembleRelease
cp app/build/outputs/apk/app-release.apk /Volumes/aspire-r3610/APK/home-control.apk
