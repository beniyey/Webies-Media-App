import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import HomePage from "../../Pages/HomePage/HomePage";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Services from "../../Pages/Services/Services";
import Development from "../../ServicePages/Development/Development";
import Seo from "../../ServicePages/Seo/Seo";
import Maintanance from "../../ServicePages/Maintanance/Maintanance";
import Social from "../../ServicePages/Social/Social";
import ErrorPage from "../ErrorPage/ErrorPage";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/portfolio"} element={<Portfolio />} />
                <Route path={"/services"} element={<Services />} />
                <Route path={"/development"} element={<Development />} />
                <Route path={"/seo"} element={<Seo />} />
                <Route path={"/maintanance"} element={<Maintanance />} />
                <Route path={"/social"} element={<Social />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default Routing;
