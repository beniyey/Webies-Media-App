import "./About.css";
import AboutFloater from "../../../Assets/Images/resources/photo-main-page.png"
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect } from "react";

const PinkButton = styled(Button)({
    transition: 'all 0.3s',
    color: '#E95A9C',
    backgroundColor: "transparent",
    padding: "10px 30px",
    marginTop: "30px",
    fontSize: "15px",
    borderRadius: "30px",
    border: "2px solid #E95A9C",
    '&:hover': {
        backgroundColor: "#E95A9C",
        color: "white",
        transition: '0.3s',
        border: "2px solid #E95A9C",
    }
})


function About(): JSX.Element {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div className="About">
            <div className="top-floater">
                {/* <div className="top-floater-image"> */}
                    <img className="top-floater-image" src={AboutFloater} alt="floating image of our team" />
                {/* </div> */}
                <div className="">
                    <div className="top-floater-text">
                        <div className="pink-caption">
                            <p>קצת עלינו</p>
                        </div>
                        <h1 style={{ fontSize: "50px", color: "#270B55" }}>ההצלחה שלך <span style={{ fontFamily: "fredoka-light" }}>היא המטרה</span> שלנו</h1>
                        <span className="internal-section-spacer"></span>
                        <div className="data-section-content">
                            המשימה שלנו היא לספק לך את הכלים הטובים ביותר לניהול העסק שלך ביעילות , כדי שתוכל להתמקד במה שאתה עושה הכי טוב, ואנחנו נדאג עבורך לכל השאר.
                            <br />
                            <span className="data-section-content-inner">
                                אנחנו איתכם בכל צעד בדרך להצלחה
                            </span>
                            <br />
                            כל צעד איתנו יהיה בתיאום מלא ותוכלו לפנות אלינו בכל עת
                            ולקבל עזרה והסברים על הפרוייקט שלכם.
                            כמו כן, נשמח לשמוע מכם ולהתאים את הפרוייקט לצרכיך
                            ולצרכי העסק שלכם.                         </div>
                        <PinkButton startIcon={<ArrowBackIosIcon />}>דברו איתנו</PinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
