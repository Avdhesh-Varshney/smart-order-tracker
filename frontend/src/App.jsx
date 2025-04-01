import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { lookInSession } from "./common/session";

import Navbar from "./components/navbar.component";

import UserAuthForm from "./pages/userAuthForm.page";
import NewOrder from "./pages/newOrder.page";
import Home from "./pages/home.page";


export const UserContext = createContext({});

function App() {

  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    let userInSession = lookInSession("user");
    userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({ access_token: null });
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <div className="flex flex-col min-h-screen">
        {userAuth.access_token && <Navbar />}

        <div className="flex-1">
          <Routes>
            {
              userAuth.access_token ? (
                <Route path="/" element={<Home />} />
              ) : (
                <Route path="/" element={<UserAuthForm type="login" />} />
              )
            }
            <Route path="/register" element={<UserAuthForm type="register" />} />
            <Route path="/new-order" element={<NewOrder />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App;
