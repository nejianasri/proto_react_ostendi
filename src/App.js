import './App.css';
import Home from "./components/pages/Home";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </section>
    );
}

export default App;
