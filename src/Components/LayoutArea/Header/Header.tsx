import "./Header.css";
import Button from '@mui/material/Button';
import { styled } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import logo from "../../../Assets/Images/resources/logo.png"
import React, { SyntheticEvent } from "react";
import MenuIcon from '@mui/icons-material/Menu';


const navItems = [
    { display: 'בית', value: "home" },
    { display: 'שירותים', value: "services" },
    { display: 'קצת עלינו', value: "about" },
    { display: 'צור קשר', value: "contact" },
    { display: 'העבודות שלנו', value: "portfolio" },
];

const services = [
    { display: 'עיצוב ופיתוח אתרים', value: "development" },
    { display: 'קידום אתרים', value: "seo" },
    { display: 'מדיה חברתית', value: "social" },
    { display: 'תחזוקת אתרים', value: "maintanance" },
];

const ContactButton = styled(Button)({
    transition: 'all 0.3s',
    color: 'white',
    backgroundColor: "#E95A9C",
    padding: "10px 30px",
    borderRadius: "30px",
    '&:hover': {
        backgroundColor: "white",
        color: "#E95A9C",
        boxShadow: '0px 0px 1px 3px white',
        //fade in transition
        transition: 'all 0.3s',
    }
})

const NavigationButton = styled(Link)({
    transition: "300ms",
    fontSize: "18px",
    '&:hover': {
        transition: "300ms",
        color: "#E95A9C"
    }
})

export default function Header() {
    let timer: any;

    const location = useLocation()

    const [serviceTimer, setserviceTimer] = React.useState<any>(null)

    const [active, setActive] = React.useState("home")

    React.useEffect(() => {
        onRouteChange(location.pathname.substring(1))
    }, [location])

    function onRouteChange(route: string) {
        setActive(route)
    }

    function toggleMenu(event?: SyntheticEvent, active: boolean = false) {

        let element: HTMLElement;
        let routes: NodeListOf<HTMLElement>;

        document.getElementById("page-overlay")?.classList.toggle("no-display")
        element = document.getElementById("mobile-buttons")
        routes = document.querySelectorAll(".mobile-route")

        let present = element?.classList.toggle("animate__fadeIn")
        element.classList.toggle("defer", !present)
        element.classList.toggle("animate__fadeOut", !present)
        routes.forEach((item: any) => {
            let present = item.classList.toggle("animate__fadeInDown")
            item.classList.toggle("animate__fadeOutUp", !present)
        })
        if (active && event) {
            document.querySelectorAll(".active").forEach((element) => { element.classList.remove("active") })
            let status = (event.target as HTMLElement).classList.add("active")
        }
    }


    return (
        <div className="Header">
            <img className="logo" src={logo} />

            {/* normal screen */}
            <div className="links regular">
                {navItems.map((item) => (
                    <div className={`route ${item.value == "services" ? "services-select-wrapper" : ""}`} key={item.value}>
                        <NavigationButton className={`${active == item.value ? "active" : ""}`} onClick={(event) => { onRouteChange(item.value) }} to={item.value} key={item.display} sx={{ color: '#fff' }}>
                            {item.display}
                        </NavigationButton>
                        {
                            item.value == "services" &&
                            <div  id="services-select" className="services-select dropdown animate__animated">
                                {
                                    services.map((service) => (
                                        <NavigationButton className={`service-route animate__animated`} onClick={() => onRouteChange(service.value)} to={service.value} key={service.display}>
                                            {service.display}
                                        </NavigationButton>
                                    ))
                                }
                            </div>
                        }
                    </div>
                ))}
            </div>

            {/* mobile screen */}
            <div className="links mobile ">
                <MenuIcon fontSize="large" onClick={toggleMenu} sx={{ color: "white", alignItems: "center" }} />
                <div id="mobile-buttons" className="mobile-buttons animate__animated dropdown">
                    {navItems.map((item, index) => (
                        <NavigationButton className={` route mobile-route animate__animated`} onClick={(event) => { onRouteChange(item.value); toggleMenu(event, true) }} to={item.value} key={item.display} sx={{ animationDelay: `0.${index}s` }}>
                            {item.display}
                        </NavigationButton>
                    ))}
                </div>
            </div>

            <ContactButton className="contact-button" variant="contained" href="#contained-buttons" endIcon={<ArrowForwardIosIcon />}>
                <b>בואו נדבר</b>
            </ContactButton>

            <div id="page-overlay" onClick={toggleMenu} className="page-overlay no-display" />
        </div>
    );
}