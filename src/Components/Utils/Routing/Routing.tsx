import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../Pages/About/About";
import HomePage from "../../Pages/HomePage/HomePage";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path={"/about"} element={<About />} />
            </Routes>
        </div>
    );
}

export default Routing;
