import { createContext, useState } from "react";
import Navbar from "./components/navbar.component";
import { Route, Routes } from "react-router-dom";
import UserAuthForm from "./pages/userAuthForm.page";

export const UserContext = createContext({});

function App() {

  const [userAuth, setUserAuth] = useState({});

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <div className="flex flex-col min-h-screen">
        {userAuth.access_token && <Navbar />}

        <div className="flex-1">
          <Routes>
            {
              userAuth.access_token ? (
                <Route path="/" element={<h1>Home page</h1>} />
              ) : (
                <Route path="/" element={<UserAuthForm type="login" />} />
              )
            }
            <Route path="/register" element={<UserAuthForm type="register" />}></Route>
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App;
