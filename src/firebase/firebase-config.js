const admin = require("firebase-admin");
console.log(__dirname);
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: process.env.FIREBASE_PROJECT_ID,
});

module.exports = admin;