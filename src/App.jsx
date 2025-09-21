import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";
import Login from "./components/loginpage/LoginPage"
import Signup from "./components/singupform/SignupForm";
import LoginForm from "./components/loginform/LoginForm";

function App() {

  const singUpComponent = <Signup></Signup>
  const loginComponent = <LoginForm></LoginForm>


  return (
    <>
      <Nav />
        <div className="mt-14">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login formComponent = {loginComponent}   />} />
          <Route path="/signup" element={<Login formComponent = {singUpComponent} />} />
        </Routes>
        </div>
    </>
  );
}

export default App;