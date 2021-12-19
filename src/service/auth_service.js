import firebase from "firebase";
import fbApp from "./firebaseAuth";

// 어플리케이션에서 사용자가 로그인, 로그아웃같은 authentication에 관련된 일을 하는 클래스
class AuthService {
  login(provider) {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    return fbApp.auth().signInWithPopup(authProvider);
  }
  // 사용자가 바뀔 때 사용자 정보를 전달
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
