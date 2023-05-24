// 判断token是否存在

//如果存在跳转

//如果不存在 重定向路由

import { Navigate } from "react-router-dom";

export function AuthComponent({ children }) {
  if (localStorage.getItem("token")) {
    return <>{children}</>;
  } else {
    return (
      <>
        <Navigate to={"/login"} replace />
      </>
    );
  }
}
