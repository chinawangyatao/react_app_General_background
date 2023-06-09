import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./page/login/Login.jsx";
import { Layout } from "@/page/layout/Layout.jsx";
import { AuthComponent } from "@/components/AuthComponent.jsx";

function App() {
  return (
    // 配置路由
    <BrowserRouter>
      <>
        <Routes>
          {/*    创建路由path和对应关系*/}

          <Route
            path={"/"}
            element={
              <AuthComponent>
                <Layout />
              </AuthComponent>
            }
          ></Route>

          <Route path={"/login"} element={<Login />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
