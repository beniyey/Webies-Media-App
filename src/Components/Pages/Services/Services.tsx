import "./Services.css";
import OfferFloater from "../../../Assets/Images/resources/what-we-offer.webp";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../Contact/Contact";

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

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="Services">
            <div className="top-floater">
                <div className="top-floater-image">
                    <img src={OfferFloater} className="" alt="floating image of our team" />
                </div>
                <div className="top-floater-text">
                    <div className="pink-caption">
                        <p>מה אנחנו עושים</p>
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
                    <PinkButton onClick={() => navigate("/contact")} startIcon={<ArrowBackIosIcon />}>דברו איתנו</PinkButton>
                </div>
            </div>

            <div className="services-wrapper">
                <div className="services-text">
                    <div className="pink-caption">
                        <p>השירותים שלנו</p>
                    </div>
                    <h1 style={{ fontSize: "50px", color: "#270B55" }}>מעלים את העסק שלך לדיגיטל <br /> <span style={{ fontFamily: "fredoka-light" }}>עם הטובים</span> ביותר</h1>
                    <span className="internal-section-spacer"></span>
                    <div className="services-cards">
                        <div className="service-card development">
                            <div className="service-card-background"></div>
                            <DesignServicesIcon sx={{ fontSize: "35px", color: "#E95A9C" }} />
                            <h1>
                                עיצוב ופיתוח אתרים

                            </h1>
                            <p className="service-text">
                                האתר שלך הוא הפנים הראשון של עסקך בעולם הדיגיטלי. אנחנו מבינים כמה חשוב להציג את העסק שלך בצורה מושכת ומקצועית. באמצעות צוות מומחים בעיצוב ופיתוח, אנחנו נבנה לך אתר אינטרנט מותאם אישית שיענה על כל צרכי העסק שלך. אנחנו מציעים פתרונות טכנולוגיים מתקדמים ומערכות ניהול תוכן ידידותיות, כדי שתוכל לעדכן את האתר שלך בקלות ובנוחות.
                            </p>
                            <Button onClick={() => navigate("/development")} sx={{ borderRadius: "100%" }}><RightArrowIcon /></Button>
                        </div>
                        <div className="service-card seo">
                            <div className="service-card-background"></div>
                            <DashboardOutlinedIcon sx={{ fontSize: "35px", color: "#E95A9C" }} />
                            <h1>
                                קידום אתרים
                            </h1>
                            <p className="service-text">
                                אינטרנט מלא באתרים, והידע כיצד לעשות שמציאות תהיה ברורה לגולשים הוא מפתח להצלחה בעולם המקוון. אנחנו מתמחים באופטימיזציה למנועי חיפוש (SEO) ונותנים מענה מקצועי לקידום אתרים. עם שירותי ה-SEO שלנו, אתה יכול להיות בטוח שהאתר שלך יופיע בראש תוצאות החיפוש, מה שיעניק לעסק שלך חשיפה מרבית ותעוזה בקרב לקוחות פוטנציאליים.
                            </p>
                            <Button onClick={() => navigate("/seo")} sx={{ borderRadius: "100%" }}><RightArrowIcon /></Button>
                        </div>
                        <div className="service-card social">
                            <div className="service-card-background"></div>
                            <EngineeringIcon sx={{ fontSize: "35px", color: "#E95A9C" }} />
                            <h1>
                                מדיה חברתית
                            </h1>
                            <p className="service-text">
                                הרשתות החברתיות הפכו לכלי חיוני בקידום עסקים וביצוע קמפיינים שיווקיים יעילים. אנחנו מציעים שירותי ניהול וקידום ברשתות החברתיות כדי להגדיל את הנוכחות הדיגיטלית שלך ולקדם את המותג בקרב הקהל הרחב שלך. בעזרת תכניות ייחודיות, יצירת תוכן מרתק ואסטרטגיות יעילות, אנחנו נעזור לך להגיע לקהל יעד ולפתח קהילה נאמנה שתמכור לך מוצרים ושירותים.
                            </p>
                            <Button onClick={() => navigate("/social")} sx={{ borderRadius: "100%" }}><RightArrowIcon /></Button>
                        </div>
                        <div className="service-card">
                            <div className="service-card-background maintanance"></div>
                            <Diversity1Icon sx={{ fontSize: "35px", color: "#E95A9C" }} />
                            <h1>
                                תחזוקת אתרים
                            </h1>
                            <p className="service-text">
                                האתר שלך דורש תחזוקה וטיפוח קבועים כדי להבטיח פעילות חלקה ובטיחותית. אנחנו מציעים שירותי תחזוקת אתרים אמינים ומקצועיים, כדי שתוכל להתמקד בעיקרון העסק שלך ולהיות בטוח שאתרך תמיד מתעדכן ופועל בצורה אופטימלית. מכניסים שיפורים, מעדכנים תוכן, וכמובן מסייעים בפתרון תקלות טכניות באופן מהיר ויעיל.
                            </p>
                            <Button onClick={() => navigate("/maintanance")} sx={{ borderRadius: "100%" }}><RightArrowIcon /></Button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="contact-page">
                <Contact />
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