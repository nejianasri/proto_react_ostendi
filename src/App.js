import './App.css';
import Tabs from "./components/pages/Tabs";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <section>
            <Routes>
                <Route path="*" element={<Tabs/>}/>
            </Routes>
        </section>
    );
}

export default App;
