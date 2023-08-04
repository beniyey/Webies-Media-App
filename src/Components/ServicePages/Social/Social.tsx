import "./Social.css"
import mainImg from "../../../Assets/Images/resources/development-page.webp"
import React from "react"
import Contact from "../../Pages/Contact/Contact"
import { Helmet, HelmetProvider } from "react-helmet-async"


export default function Social() {
    return (
        <article className="Social Service-Page">

            <HelmetProvider>
                <Helmet>
                    {/* SEO Meta Tags */}
                    <title>Webies || מדיה חברתית</title>
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
                        מדיה חברתית
                    </h1>
                </div>
            </section>

            <article className="text-content">
                <div className="pink-caption">
                    <p>ברוכים הבאים לעמוד השירותים שלנו - עיצוב ופיתוח אתרים!</p>
                </div>

                <section>
                    מדיה חברתית היא לא רק כלי ליצירת קשר עם הלקוחות, אלא גם פלטפורמה חזקה לבניית זהות והקניית לקוחות חדשים.
                    בחברתנו, אנו מבינים את הכוח הגדול שבמדיה חברתית ומציעים שירות מקצועי וייחודי לניהול והתנהלות מוצלחת ברשתות החברתיות. הנה כמה מהיתרונות של שירותי ניהול מדיה חברתית שלנו.
                </section>

                <section>
                    <ol>
                        <li>
                            הגדלת החשיפה לקהל היעד שלך: אנחנו נזהה את קהל היעד המדויק שלך ונפתח תכנים אטרקטיביים שמתאימים לאינטרסים והצרכים שלהם. כך, תוכל להיות בטוח שההודעות שלך מגיעות לאנשים הנכונים בזמן הנכון.
                        </li>
                        <li>
                            יצירת תוכן איכותי ומרשים: כתיבה היא התחום שלנו! ניצור תוכן מקורי, מרתק ומשכנע שיעניק לקהל שלך ערך ולא יתן להם להישאר אדישים. התוכן שלך יהיה מעוצב לפי שפת העיצוב שלך, כדי לשדר את ההודעות והמסרים שלך בצורה ברורה ומרשימה.
                        </li>
                        <li>
                            ניהול קמפיינים ופרסום ממומן: נבנה עבורך קמפיינים ממומנים מדויקים ברשתות החברתיות, כדי להגיע לקהל רחב יותר ולשפר את החשיפה שלך. נמדוד את תוצאות הקמפיינים ונעשה עדכונים כדי להבטיח תשואה גבוהה מההשקעה.
                        </li>
                        <li>
                            תגובה ללקוחות וניהול משוב: נתייחס בזהירות ומקצועיות לתגובות והערות של לקוחותיך על פעילות ברשתות החברתיות. נדאג לצור קשר ולהגיב באופן יעיל, וכמובן לנצל כל המשוב שלהם כדי לשפר ולגדול.
                        </li>
                        <li>
                            ניתוח נתונים ודיווחים: נעקוב אחרי ביצועי הדף שלך ונספק דיווחים מפורטים על הפעילות וההשפעה של תוכניות המדיה החברתית שלך. נשתף אותך בתוצאות ונבטיח שתהיה תמיד מעודכן בביצועי הדף שלך ברשתות החברתיות.
                        </li>
                    </ol>
                </section>

                <section>
                    המדיה החברתית היא כלי עצום לשיווק וקידמה, ובידינו הידע והיכולת לנהל עבורך חשבונות ברמה הגבוהה ביותר. נבנה עבורך אסטרטגיה ייעודית ויחודית שתכניס אותך לעולם הדיגיטלי בצורה חזקה ומוצלחת. אתך בכל צעד, להצלחה ולהגדלה!
                </section>
            </article>

            <section className="contact-page">
                <Contact embeded={true}/>
            </section>

        </article>
    )
}