# Home Control Android App

An Android App for controlling home WiFi-connected sensors, switches, cameras, etc.

# Development

Install [Expo](https://docs.expo.io/versions/latest/) globally: `npm install -g expo-cli` and download the Expo mobile app.

Run the following command, replacing the internal and external API host variables as appropriate.

```sh
cat > ./src/config/config-secrets.js << EOF
module.exports = {
    'internalApi': '${INTERNAL_HOST}',
    'externalApi': '${EXTERNAL_HOST}'
};
EOF
```

Run `expo start`, and open the app on a test device and scan the QR code to test this app on the device.

**NOTE:** There are some differences in padding in the Expo emulator compared the to app installed via the built .apk file.

# Build & Deploy

Run `eas build -p android`.

## License

MIT