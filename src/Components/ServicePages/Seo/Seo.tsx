import "./Seo.css"
import mainImg from "../../../Assets/Images/resources/development-page.jpg"
import React from "react"
import Contact from "../../Pages/Contact/Contact"


export default function Seo() {
    return (
        <div className="Seo Service-Page">
            <div className="top-floater">
                <div className="top-floater-bg-image"></div>
                <div className="top-floater-bg-image-overlay"></div>

                <div className="header-text">
                    <h1 className="heading">
                        קידום אתרים
                    </h1>
                </div>
            </div>

            <div className="text-content">
                <div className="pink-caption">
                    <p>שירותי SEO</p>
                </div>


                <section>
                    בעידן הדיגיטלי הנוכחי, גוברת החשיבות של SEO (Search Engine Optimization) ככלי אסטרטגי להגדיל את הנציגות והנוכחות המקוונת של העסק שלך.
                    אנו יודעים שהתחרות ברשת גוברת, ולכן אנו מציעים שירותי SEO מתקדמים שמותאמים לצרכים הייחודיים של עסקך. הנה כמה מהיתרונות של שירותי ה-SEO שלנו:
                </section>

                <section>
                    <ol>
                        <li>
                            מחקר מילות מפתח מתקדם: אנחנו נחקור את תחום העסק שלך ונזהה את מילות המפתח המרכזיות המשמעותיות ביותר בתחום ולקהל יעד שלך. השילוב הנכון של מילות המפתח יעזור לך להופיע בחיפושים הטובים ביותר במנועי החיפוש.
                        </li>
                        <li>
                            עדכון תכנים ובניית קישורים: נתכנן אסטרטגיה מקצועית לבניית קישורים וכתיבת תכנים ייחודיים ומעניינים. תוכן ברמה גבוהה וקישורים איכותיים ישפרו את הדירוג שלך במנועי החיפוש ויגבירו את התנועה אל האתר שלך.
                        </li>
                        <li>
                            אנליזת אתר ותיקונים טכניים: נבצע אנליזת אתר עמיקה ונזהה נקודות חלשות שלו. נתקן תקלות טכניות, נבצע עדכונים ונבנה את האתר שלך כך שיהיה מהיר וידידותי למנועי חיפוש.
                        </li>
                        <li>
                            תיקון תגים ומבנה האתר: נוודא שתגי ה-META ומבנה האתר שלך מותאמים ל-SEO באופן הטוב ביותר. התגובות והמבנה הנכונים יעזרו לגוגל ולמנועי החיפוש להבין את תוכן האתר שלך ולהציג אותו בצורה הטובה ביותר.
                        </li>
                        <li>
                            ניתוח תנועת האתר ודיווחים: נעקוב אחרי תנועת האתר שלך וננתח את התוצאות. תקבל דיווחים מפורטים ואסטרטגיות לשיפור נתוני ה-SEO ולהמשך גידול הנוכחות שלך ברשת.
                        </li>
                        <li>
                            קידום אורגני ותשואה גבוהה: המטרה שלנו היא להביא לך לקוחות מעניינים וממוקדים ללא תלות בפרסום ממומן. הצלחתנו נמדדת בתשואה גבוהה מההשקעה שלך ובקוחות מרוצים.
                        </li>
                    </ol>
                </section>
                <section>
                    ה-SEO הוא גורם חשוב בהצלחת העסק שלך ברשת ובידינו הכלים והמומחיות להבטיח שאתה מתמודד בהצלחה עם תחרות ברשת. אנחנו נתקדם איתך ביחד, להגדיל את נוכחותך באינטרנט ולהציע לך את השירותים המתאימים ביותר.
                </section>
            </div>

            <div className="contact-page">
                <Contact />
            </div>
        </div>
    )
}