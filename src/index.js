import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/auth_service";
import ImgUploader from "./service/imgUploader";
import Imgfile from "./components/diaries/ImgFile/imgfile";

const authService = new AuthService();
const imgUploader = new ImgUploader();
const FileInput = (props) => <Imgfile {...props} imgUploader={imgUploader} />; // 여기서 props는 왜 넘겨주는거임?

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
