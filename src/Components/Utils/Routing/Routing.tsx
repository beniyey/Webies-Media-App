import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import HomePage from "../../Pages/HomePage/HomePage";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Services from "../../Pages/Services/Services";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/portfolio"} element={<Portfolio />} />
                <Route path={"/services"} element={<Services />} />
            </Routes>
        </div>
    );
}

export default Routing;
