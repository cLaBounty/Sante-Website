const APPLE_APP_STORE_ID = "6476798776"
const ANDROID_BUNDLE_ID = "com.sante.android"

const onAppStoreDownloadClicked = () => {
    let url = "https://apps.apple.com/app/id" + APPLE_APP_STORE_ID
    window.open(url)
}

const onGooglePlayDownloadClicked = () => {
    let url = "https://play.google.com/store/apps/details?id=" + ANDROID_BUNDLE_ID
    window.open(url)
}