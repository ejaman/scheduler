import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Diary from "./components/diaries/diary/diary";
import Calendars from "./components/calendar/calendars/calendars";

function App({ authService, FileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/login" element={<Login authService={authService} />} />
          {/* <Route path="/calendar" element={<Calendar />} /> */}
          <Route
            path="/diary"
            element={<Diary authService={authService} FileInput={FileInput} />}
          />
          <Route
            path="/calendar"
            element={<Calendars authService={authService} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
