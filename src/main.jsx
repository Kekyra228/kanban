import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserData } from "./contexts/contextUser.jsx";
import { TasksData } from "./contexts/hooks/contextTasks.jsx";

const basename = "/kanban";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <UserData>
        <TasksData>
          <App />
        </TasksData>
      </UserData>
    </BrowserRouter>
  </React.StrictMode>
);
