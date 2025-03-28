import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";
import "./index.css";
import "./App.css";
import BottomNav from "./components/BottomNav.jsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/post" element={<Post />} />
            </Routes>
            <BottomNav />
        </Router>
    );
}

export default App;
