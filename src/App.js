import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NewOrderPage from "./pages/NewOrder/NewOrderPage.js";
import AuthPage from "./pages/Auth/AuthPage.js";
import OrderHistoryPage from "./pages/OrderHistory/OrderHistoryPage";
import NavBar from "./components/NavBar/NavBar";
import { getUser } from "./utilities/users-service";

function App() {
  // This code is for testing when setting up server and such.
  // async function testCall () {
  //   const res = await fetch("/test")
  //   const data = await res.json()
  //   console.log(data)
  // }

  // useEffect(() => {
  //   testCall()
  // }, [])
  const [user, setUser] = useState(getUser());
  console.log('current user', user)


  return (
    <div className="App">
      {user ? (
        <div>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </div>
      ) : (
        <AuthPage setUser={setUser}/>
      )}
    </div>
  );
}

export default App;
