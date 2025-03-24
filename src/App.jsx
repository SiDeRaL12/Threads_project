
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn  from "./Pages/SignIn";
import "./index.css"; 
import './App.css'
import SignUp from "./Pages/SignUp";

import GoogleSignInButton from './Pages/GoogleSignInButton';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path= "/" element= {<GoogleSignInButton />}/>
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App
