import "./Footer.css";
import pinkLogo from "../../../Assets/Images/pink-logo-webies-png.webp"
import { Link } from "@mui/material";
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { styled } from "@mui/system";
import letsTalkImage from "../../../Assets/Images/resources/lets-talk.webp"

const ContactLink = styled(Link)({
    color: "grey",
    textDecoration: "none",
    transition: "500ms",
    '&:hover': {
        color: "black",
        transition: "500ms",
        textDecoration: "none",
    }
})
function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div className="parent">
                <img loading="lazy" className="child" width={"220px"} src={pinkLogo} alt="a pink logo of webies media" />
            </div>
            <div className="parent">
                <div className="contact-footer-wrapper child">
                    <div className="contact-method-wrapper" >
                        <span className="method">
                            <PhoneEnabledOutlinedIcon sx={{ verticalAlign: "middle", color: "#ff57a4" }} /> דברו איתנו
                        </span>
                        <span className="data">
                            <ContactLink href="tel:+972544737024">0544737024</ContactLink>
                        </span>
                    </div>
                    <div className="contact-method-wrapper" >
                        <span className="method">
                            <AlternateEmailOutlinedIcon sx={{ verticalAlign: "middle", color: "#ff57a4" }} /> המייל שלנו
                        </span>
                        <span className="data">
                            <ContactLink href="mailto:bensp@webies-media.com">bensp@webies-media.com</ContactLink>
                        </span>
                    </div>
                </div>
            </div>
            <div className="parent">
                <img loading="lazy" className="child contact-img" src={letsTalkImage} alt="" />
            </div>
        </div>
    );
}

export default Footer;
