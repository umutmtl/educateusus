// firebase kütüphanesinden her şeyi import
//ettik "firebase" objesi olarak
import * as firebase from "firebase"

//firebase projemize bağlanmamız için firebase'in
//verdiği config objesini yapıştırıyoruz.
var config = {
  apiKey: "AIzaSyBt9QMGtsF9xBsfkVARVQZ_hndw_BQMosU",
  authDomain: "educateus-app.firebaseapp.com",
  databaseURL: "https://educateus-app.firebaseio.com",
  projectId: "educateus-app",
  storageBucket: "educateus-app.appspot.com",
  messagingSenderId: "746517105396"
}

//Diğer class yani componentlerde kullanabilmek, import edebilmek
//için export etmemiz lazım
export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app())
