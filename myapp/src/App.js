import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./RoutePages/Home";
import SignIn from "./RoutePages/Signin";
import SignUp from "./RoutePages/Signup";
import Profile from "./RoutePages/Profile";
import Offers from "./RoutePages/Offers";
import ForgetPassword from "./RoutePages/ForgetPass";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/ForgetPassworde" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
