import "./Maintanance.css"
import mainImg from "../../../Assets/Images/resources/development-page.webp"
import React from "react"
import Contact from "../../Pages/Contact/Contact"
import { Helmet, HelmetProvider } from "react-helmet-async"


export default function Maintanance() {
    return (
        <article className="Maintanance Service-Page">
            <HelmetProvider>
                <Helmet>
                    {/* SEO Meta Tags */}
                    <title>Webies || תחזוקה וניהול אתרים</title>
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
                        תחזוקת אתרים
                    </h1>
                </div>
            </section>

            <article className="text-content">
                <div className="pink-caption">
                    <p>שירותי תחזוקה לאתרים </p>
                </div>

                <section>
                    אתר אינטרנט הוא כמו חלון לעסק שלך בעולם המקוון.
                    כמו שאתה רוצה שהחנות שלך תיראה מסודרת כדי למשוך לקוחות, כך גם אתר האינטרנט שלך חייב להראות ולפעול בצורה מקצועית וחלקה כדי ליצור רושם טוב ולהפיק ממנו את המרב.
                </section>

                <section>
                    צותנו בתחום העיצוב והפיתוח של אתרים מציעה לך שירות ייחודי וכולל תחזוקה עקבית ושדרוגים רציפים לאתרך.
                    הנה כמה נקודות עיקריות על שירות התחזוקה והשדרוגים שלנו:
                </section>

                <section>
                    <ol>
                        <li>שיפור ותיקונים טכניים: האתר שלך עשוי להיתקל בבעיות טכניות מדי פעם, כמו תקלות בקוד, טעינה איטית או חסרונות בתפקוד. הצוות שלנו יטפל בכל התקלות וימנע מהן להשפיע על חוויית המשתמש של הלקוחות שלך.</li>
                        <li>אבטחת אתרים: אבטחת האתר היא חיונית למניעת גישה למידע רגיש ולמניעת תקיפות ופריצות. נשקיע את המאמצים הנדרשים כדי לוודא שאתרך מאובטח ומוגן מפני איומים.</li>
                        <li>שדרוגים ועדכונים: הטכנולוגיה מתקדמת בקצב מהיר ותוכן האתר שלך צריך תמיד לעניין ולהשתמש בטכנולוגיה החדשה ביותר. אנו נשדרג את אתרך כך שהוא יהיה תומך בטכנולוגיות אלו ונתאים את עיצוב האתר.</li>
                        <li>שיפור חוויית משתמש: אנחנו נקנה תשומת לב מיוחדת לחוויית המשתמש ונבנה את האתר שלך בצורה שמבטיחה שהלקוחות שלך ימצאו את מה שהם מחפשים בקלות ובמהירות.</li>
                        <li>תמיכה וטיפול בתקלות: אנחנו תמיד כאן לשירותך. תקלה טכנית? שאלה? צור קשר איתנו ואנחנו נעזור לך לפתור את הבעיה במהירות וביעילות.</li>
                        <li>תחזוקה יעילה ומתמשכת: אנחנו נספק לך תחזוקה יעילה ומתמשכת לאתרך, כך שתוכל להתרכז בגידול העסק שלך בלי לדאוג לפרטים הטכניים.</li>
                    </ol>
                </section>

                <section>
                    בידינו הידע והניסיון הרב בייצוב, תחזוקה ושדרוג של אתרים. אנו נעבוד בצמוד עם צוות העיצוב והפיתוח שלך כדי לוודא שהאתר שלך ימשיך להתקדם ולהתפתח בצעדי ענק.
                </section>
            </article>

            <section className="contact-page">
                <Contact />
            </section>

        </article>
    )
}