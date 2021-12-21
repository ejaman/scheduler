import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Diary from "./components/diaries/diary/diary";
// import Calendar from "./components/calendar/calendar";
import Schedule from "./components/schedules/schedule/schedule";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/login" element={<Login authService={authService} />} />
          <Route path="/scheduler" element={<Schedule />} />
          {/* <Route path="/calendar" element={<Calendar />} /> */}
          <Route path="/diary" element={<Diary authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
