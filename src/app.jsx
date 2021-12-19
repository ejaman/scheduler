import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Diary from "./components/diary/diary";
import Login from "./components/login/login";
import Schedule from "./components/schedule/schedule";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/login" element={<Login authService={authService} />} />
          <Route path="/scheduler" element={<Schedule />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
