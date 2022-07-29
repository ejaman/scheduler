import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Calendars from "./components/calendar/calendars/calendars";
import Diary from "./components/diaries/diary/diary";

function App({ authService, FileInput, Repo }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route path="/login" element={<Login authService={authService} />} />
          <Route
            path="/calendar"
            element={<Calendars authService={authService} Repo={Repo} />}
          />
          <Route
            path="/diary"
            element={
              <Diary
                authService={authService}
                FileInput={FileInput}
                Repo={Repo}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
