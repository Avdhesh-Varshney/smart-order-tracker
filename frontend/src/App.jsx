import { createContext, useState } from "react";
import Navbar from "./components/navbar.component";

export const UserContext = createContext({});

function App() {

  const [userAuth, setUserAuth] = useState({});

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
      </div>
    </UserContext.Provider>
  )
}

export default App;
