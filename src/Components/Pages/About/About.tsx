import "./About.css";
import AboutFloater from "../../../Assets/Images/resources/photo-main-page.png"
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../Contact/Contact";

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

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
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
                        <PinkButton onClick={()=>navigate("/contact")} startIcon={<ArrowBackIosIcon />}>דברו איתנו</PinkButton>
                    </div>
                </div>
            </div>
            <div className="about-content">
                <div className="pink-caption">
                    <p>על צוות הפיתוח ועיצוב שלנו</p>
                </div>

                <div className="team-section">

                    <section>
                        צוות הפיתוח שלנו מורכב מקבוצת מתכנתים ומעצבים מובילים בתחום, בעלי ידע רחב ובניסיון עשיר בתחום.
                    </section>

                    <section>
                        Webies הוא סטודיו דיגיטלי בעל ניסיון של שנים רבות, המתמחה בעיצוב ופיתוח ממשקי משתמש מרהיבים ובניית אתרים מתקדמים ומתואמים אישית.
                        כל חבר צוות נבחר בקפידה, ואנחנו גאים לצוות המומחים שלנו.  לכל פרוייקט נתאים צוות מומחים מנוסים שיעבוד עם יכולות יצירתיות ואנרגיה רבה בהתאם לדרישות הפרוייקט שלך,  כדי להבטיח אתר או ממשק דיגיטלי איכותי וייחודי ביותר בשבילך.
                    </section>

                    <section>
                        המתכנתים שלנו עובדים בדיוק רב תוך פיקוח על קוד נקי, תוכנה בטוחה ושירותי אינטרנט אמינים.
                        יחד עם המעצבים המוכשרים שלנו, אנו יוצרים ממשקים ידידותיים, אסתטיים ויעילים, המספקים למשתמשים חוויה חיובית, מרהיבה ונגישה.
                    </section>

                    <section>
                        הניסיון הרב והידע העשיר של הצוות מאפשרים לנו להתמודד בקלות עם אתגרים טכנולוגיים ולספק פתרונות מותאמים אישית, בהתאם לצרכי הלקוחות.
                        אנחנו מקפידים תמיד להתעדכן בטכנולוגיות הכי חדשות בתחום, ומביאים לכם את ההבנה העמוקה ביותר של עולם הפיתוח והעיצוב.
                    </section>

                    <section>
                        אנו מתחייבים למתן שירות מעולה, לשמוע לצרכי הלקוחות שלנו, ולעבוד בשותפות עם כל לקוח כדי לספק פתרונות שיתאימו בדיוק לצרכים שלכם.
                    </section>

                    <section>
                        צרו קשר עוד היום עם צוות המומחים שלנו! נשמח לעמוד לשירותכם ולהביא לכם את האתר או הממשק הדיגיטלי המושלם שיתאים לצרכים שלכם. מוכנים להביא את הפרוייקט שלכם לרמה הבאה?
                    </section>

                </div>
            </div>

            <div className="contact-page">
                <Contact />
            </div>
        </div>
    );
}

export default About;
