#!/bin/bash

cd android && ./gradlew assembleRelease
cp app/build/outputs/apk/app-release.apk /Users/matt/Dropbox/Software/Releases
