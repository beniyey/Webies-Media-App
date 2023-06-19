import "./Services.css";
import OfferFloater from "../../../Assets/Images/resources/what-we-offer.png";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { useEffect } from "react";

const RightArrowIcon = styled(ArrowCircleRightIcon)({
    color: "#E95A9C",
    fontSize: "35px",
    borderRadius: "100%",
    opacity: "0.4",
    transition: '0.3s',
    '&:hover': {
        transition: '0.3s',
        opacity: "1",
    },
})

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
});

function Services(): JSX.Element {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <div className="Services">
            <div className="top-floater">
                <div className="top-floater-image">
                    <img src={OfferFloater} className="" alt="floating image of our team" />
                </div>
                <div className="top-floater-text">
                    <div className="pink-caption">
                        <p>קצת עלינו</p>
                    </div>
                    <h1 style={{ fontSize: "50px", color: "#270B55" }}>אנחנו מציעים את הכלים <br /><span style={{ fontFamily: "fredoka-light" }}>הטובים ביותר לעסק</span> שלכם</h1>
                    <span className="internal-section-spacer" />
                    <div className="data-section-content">
                        <span className="data-section-content-inner">
                            סטטיסטיקה וביצועי האתר
                        </span>
                        אנחנו צוות של מפתחים ומעצבים עם תשוקה רבה לתחום
                        והמון רצון לעזור לעסקים להתקדם לעבר עידן הטכנולוגיה
                        ולהתקדם בתחום בו הם עוסקים.                            <br />
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

            <div className="services-wrapper">
                <div className="services-text">
                    <div className="pink-caption">
                        <p>קצת עלינו</p>
                    </div>
                    <h1 style={{ fontSize: "50px", color: "#270B55" }}>מעלים את העסק שלך לדיגיטל <br /> <span style={{ fontFamily: "fredoka-light" }}>עם הטובים</span> ביותר</h1>
                    <span className="internal-section-spacer"></span>
                    <div className="services-cards">
                        <div className="service-card">
                            <div className="service-card-background"></div>
                            <DashboardOutlinedIcon sx={{ fontSize: "35px", color: "#E95A9C" }} />
                            <h1>
                                קידום אתרים
                            </h1>
                            <span>
                                אנחנו נעניק לאתר שלכם חשיפה גבוה יותר במנועי החיפוש, ונדאג לכך שלקוחות יוכלו למצוא אתכם יוצר בקלות במרחב הדיגיטלי
                            </span>
                            <Button sx={{ borderRadius: "100%" }}><RightArrowIcon /></Button>
                        </div>
                        <div className="service-card">
                            <div className="service-card-background"></div>
                            <DesignServicesIcon sx={{ fontSize: "35px", color: "#E95A9C" }} />
                            <h1>
                                עיצוב ופיתוח אתרים

                            </h1>
                            <span>
                                תוך שימוש בטכנולוגיות המתקדמות ביותר, אנחנו נעצב נפתח ונעלה אתר לעסק שלכם                            </span>
                            <Button sx={{ borderRadius: "100%" }}><RightArrowIcon /></Button>
                        </div>
                        <div className="service-card">
                            <div className="service-card-background"></div>
                            <EngineeringIcon sx={{ fontSize: "35px", color: "#E95A9C" }} />
                            <h1>
                                מדיה חברתית
                            </h1>
                            <span>
                                אנחנו נקים לכם עמוד instagram/Facebook שיתאים לדרישות שלכם, וינגיש את השירותים שלכם ללקוחות                            </span>
                            <Button sx={{ borderRadius: "100%" }}><RightArrowIcon /></Button>
                        </div>
                        <div className="service-card">
                            <div className="service-card-background"></div>
                            <Diversity1Icon sx={{ fontSize: "35px", color: "#E95A9C" }} />
                            <h1>
                                תחזוקת אתרים
                            </h1>
                            <span>
                                בכל מקרה שאתר שלכם דורש תחזוקה או חידוש של התוכן, אנחנו נדאג לעזור לכם ולבצע את השינויים הנדרשים בצורה הטובה ביותר                            </span>
                            <Button sx={{ borderRadius: "100%" }}><RightArrowIcon /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;









//        <div className="Services">
{/* <div className="top-floater">
<div className="top-floater-image parent">
    <img src={OfferFloater} className="child" alt="floating image of our team" />
</div>
<div className="parent">
    <div className="top-floater-text child">
        <div className="pink-caption">
            <p>קצת עלינו</p>
        </div>
        <h1 style={{ fontSize: "50px", color: "#270B55", whiteSpace: "nowrap" }}>אנחנו מציעים את הכלים <br /><span style={{ fontFamily: "fredoka-light" }}>הטובים ביותר לעסק</span> שלכם</h1>
        <span className="internal-section-spacer" />
        <div className="data-section-content">
            <span className="data-section-content-inner">
                סטטיסטיקה וביצועי האתר
            </span>
            אנחנו צוות של מפתחים ומעצבים עם תשוקה רבה לתחום
            והמון רצון לעזור לעסקים להתקדם לעבר עידן הטכנולוגיה
            ולהתקדם בתחום בו הם עוסקים.                            <br />
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

<div className="services-wrapper">
<div className="top-floater-text">
    <div className="pink-caption">
        <p>קצת עלינו</p>
    </div>
    <h1 style={{ fontSize: "50px", color: "#270B55", whiteSpace: "nowrap" }}>מעלים את העסק שלך לדיגיטל <br /> <span style={{ fontFamily: "fredoka-light" }}>עם הטובים</span> ביותר</h1>
    <span className="internal-section-spacer"></span>
    <div className="services-cards">
        <div className="service-card">
            <div className="service-card-background"></div>
            <DashboardOutlinedIcon sx={{fontSize:"35px", color:"#E95A9C"}}/>
            <h1>
                קידום אתרים
            </h1>
            <span>
                אנחנו נעניק לאתר שלכם חשיפה גבוה יותר במנועי החיפוש, ונדאג לכך שלקוחות יוכלו למצוא אתכם יוצר בקלות במרחב הדיגיטלי
            </span>
            <Button sx={{borderRadius:"100%"}}><RightArrowIcon /></Button>
        </div>
        <div className="service-card">
            <div className="service-card-background"></div>
            <DesignServicesIcon sx={{fontSize:"35px", color:"#E95A9C"}} />
            <h1>
                עיצוב ופיתוח אתרים

            </h1>
            <span>
                תוך שימוש בטכנולוגיות המתקדמות ביותר, אנחנו נעצב נפתח ונעלה אתר לעסק שלכם                            </span>
            <Button sx={{borderRadius:"100%"}}><RightArrowIcon /></Button>
        </div>
        <div className="service-card">
            <div className="service-card-background"></div>
            <EngineeringIcon sx={{fontSize:"35px", color:"#E95A9C"}} />
            <h1>
                מדיה חברתית
            </h1>
            <span>
                אנחנו נקים לכם עמוד instagram/Facebook שיתאים לדרישות שלכם, וינגיש את השירותים שלכם ללקוחות                            </span>
            <Button sx={{borderRadius:"100%"}}><RightArrowIcon /></Button>
        </div>
        <div className="service-card">
            <div className="service-card-background"></div>
            <Diversity1Icon sx={{fontSize:"35px", color:"#E95A9C"}} />
            <h1>
                תחזוקת אתרים
            </h1>
            <span>
                בכל מקרה שאתר שלכם דורש תחזוקה או חידוש של התוכן, אנחנו נדאג לעזור לכם ולבצע את השינויים הנדרשים בצורה הטובה ביותר                            </span>
            <Button sx={{borderRadius:"100%"}}><RightArrowIcon /></Button>
        </div>
    </div>
</div>
</div>
</div> */}