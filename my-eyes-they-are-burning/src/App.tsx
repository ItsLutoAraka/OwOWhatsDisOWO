import { useState } from "react";
import Timeline from "./Timeline";
import "./App.css";
import LoginPage from "./LoginPage";

function App() {
  // @ts-ignore
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <>{isLoggedIn ? <Timeline></Timeline> : <LoginPage></LoginPage>}</>;
}

export default App;
