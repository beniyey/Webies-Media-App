import "./Seo.css"
import mainImg from "../../../Assets/Images/resources/development-page.webp"
import React from "react"
import Contact from "../../Pages/Contact/Contact"
import { Helmet, HelmetProvider } from "react-helmet-async"


export default function Seo() {
    return (
        <article className="Seo Service-Page">

            <HelmetProvider>
                <Helmet>
                    {/* SEO Meta Tags */}
                    <title>Webies || קידום אתרים</title>
                    <meta name="description" content="אנחנו סטודיו לפיתוח אתרים בישראל, מפתחים אתרים מתקדמים ומעוצבים ברמה הגבוהה ביותר. ייעוץ ותכנון אישי לפי דרישות העסק שלך." />
                    <meta name="keywords" content="פיתוח אתרים, עיצוב אתרים, קידום אתרים, תחזוקת אתרים, ניהול רשתות חברתיות, ניהול אתרים" />
                    <meta name="author" content="Webies Media" />
                    <meta name="robots" content="index, follow" />

                    {/* OpenGraph Meta Tags */}
                    <meta property="og:title" content="Webies Media - פיתוח אתרים" />
                    <meta property="og:description" content="אנחנו סטודיו לפיתוח אתרים בישראל, מפתחים אתרים מתקדמים ומעוצבים ברמה הגבוהה ביותר. ייעוץ ותכנון אישי לפי דרישות העסק שלך." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.webies-media.com/development" /> {/* Replace with your actual URL */}
                    <meta property="og:image" content="https://www.webies-media.com/static/media/development-image.webp" /> {/* Replace with your actual image URL */}
                    <meta property="og:image:alt" content="Webies Media - תל אביב, ישראל" />
                    <meta property="og:site_name" content="Webies Media" />

                    {/* Twitter Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Webies Media - פיתוח אתרים" />
                    <meta name="twitter:description" content="אנחנו סטודיו לפיתוח אתרים בישראל, מפתחים אתרים מתקדמים ומעוצבים ברמה הגבוהה ביותר. ייעוץ ותכנון אישי לפי דרישות העסק שלך." />
                    <meta name="twitter:image" content="https://www.webies-media.com/static/media/development-image.webp" /> {/* Replace with your actual image URL */}
                    <meta name="twitter:image:alt" content="Webies Media - תל אביב, ישראל" />
                    <meta name="twitter:site" content="@webies_media" /> {/* Replace with your Twitter handle */}
                    <meta name="twitter:creator" content="@webies_media" /> {/* Replace with your Twitter handle */}
                </Helmet>
            </HelmetProvider>

            <section className="top-floater">
                <div className="top-floater-bg-image"></div>
                <div className="top-floater-bg-image-overlay"></div>

                <div className="header-text">
                    <h1 className="heading">
                        קידום אתרים
                    </h1>
                </div>
            </section>

            <article className="text-content">
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
            </article>

            <section className="contact-page">
                <Contact />
            </section>
        </article>
    )
}