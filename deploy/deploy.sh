#!/bin/bash

cd android && ./gradlew assembleRelease
DATE=`date +%Y%m%d`
cp app/build/outputs/apk/app-release.apk /Users/matt/Dropbox/Software/Releases/HomeDashboard-$DATE.apk
