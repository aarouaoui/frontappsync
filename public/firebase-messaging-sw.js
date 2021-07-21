importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js');


var firebaseConfig = {
    apiKey: "AIzaSyDaDlWQC9CoiRGofN7Xv0WQEMZ8agE2NUU",
    authDomain: "live-d721e.firebaseapp.com",
    projectId: "live-d721e",
    storageBucket: "live-d721e.appspot.com",
    messagingSenderId: "766189789867",
    appId: "1:766189789867:web:6b418ff17c805fe5274dee",
    measurementId: "G-G1PMQR4TMY"

};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});