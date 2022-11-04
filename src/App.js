import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home.jsx"
import Posts from "./Pages/Posts.jsx";
function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path=":id" element={<Posts/>}></Route>
          
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
