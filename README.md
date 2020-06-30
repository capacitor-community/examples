# Capacitor Examples

Capacitor works with any web technology to enable web developers to deploy their web apps natively to iOS and Android, and the web as a Progressive Web App.

Capacitor drops into any new or existing web app. To see how to use Capacitor with your frontend tooling of choice, check out the examples in this repo.

## How to Run

1. Change into the UI Framework directory of choice, then run `npm install`.
2. Build the web app: `npm run build`.
3. Add a native platform: `npx cap add android` or `npx cap add ios`.
4. Copy the built web app into the native platform: `npx cap copy`.
5. Open the native IDE and run the app: `npx cap open android` or `npx cap open ios`.

> Normally the top-level `android` and `ios` native project folders are committed to source control. They are excluded here to avoid bloating this repository.
