# Firebase integration

Why Firebase ?
Firebase covers every need a mobile developer might have, from establishing real-time databases to analyzing crashes on your app to making predictions at extremely low cost. The operations and internal functions are solid, simple and the documentation is really good.

[Firebase](https://firebase.google.com/docs) gives you functionality like analytics, databases, messaging and crash reporting so you can move quickly and focus on your users. Firebase is built on Google infrastructure and scales automatically, for even the largest apps.

You are able to add [Firebase](https://firebase.google.com/docs) using Expo to install it. Firebase JS SDK supports Authentication, Firestore & Realtime databases, Storage, and Functions on React Native.

### Firebase Setup

After setting up a Firebase account and creating a new project. You can see more about firebase projects [here](https://firebase.google.com/docs/projects/learn-more).

Execute the above code into terminal to install firebase SDK:

```bash
$ expo install firebase
```

Firebase provides you with an API key, and other identifiers for your project needed for initialization. You can find
this information inside your project overview settings. And you need to initialize firebase using this line of code:
(You can create your own firebase init file or you can add this code into src/App.js, It's up to you)

```
import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

firebase.initializeApp(firebaseConfig);
```

### Storing data
Firebase provides both realtime database and firestore. You can see in [here](https://firebase.google.com/docs/database/rtdb-vs-firestore) the differences and choose what database you'd rather use.


### User Authentication
Firebase SDKs provide authentication methods for developers, so they don't have to reimplement common login systems such as Google or Facebook login.

This includes UI elements in the Web, Android, and iOS SDK versions for Firebase, however, these UI components do not work with React Native and should not be called. Thankfully, Firebase gives us ways to authenticate our data access given that we provide user authentication ourselves.

You can see more about authetication in [here](https://firebase.google.com/docs/auth/web/start).
