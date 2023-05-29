importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAkI3rlSd3XKW70cRiHdr7m1d_mMmtjCo4",
  authDomain: "jnec-booking.firebaseapp.com",
  projectId: "jnec-booking",
  storageBucket: "jnec-booking.appspot.com",
  messagingSenderId: "387091398288",
  appId: "1:387091398288:web:237b7c0886367849792215",
  measurementId: "G-56EPL5QT2E",
});

const messaging = firebase.messaging();

// Optional: Customize the behavior of the service worker
messaging.setBackgroundMessageHandler(function (payload) {
  // Customize how to handle background messages
  // For example, show a notification
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
