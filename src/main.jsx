import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { DataUser } from "./components/user/userContext/Context.jsx";
import { ContextArea } from "./components/context/AreaContext.jsx";
import { MoviesContextArea } from "./components/movies/movieContext/Context.jsx";
import { ListContextProvider } from "./components/list/listContext/Context.jsx";
import { AuthContextProvider } from "./pages/login/loginContext/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextArea>
      <DataUser>
        <MoviesContextArea>
          <AuthContextProvider>
            <ListContextProvider>
              <App />
            </ListContextProvider>
          </AuthContextProvider>
        </MoviesContextArea>
      </DataUser>
    </ContextArea>
  </BrowserRouter>
);
