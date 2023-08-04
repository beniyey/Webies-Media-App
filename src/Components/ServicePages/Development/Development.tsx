import "./Development.css"
import React from "react"
import Contact from "../../Pages/Contact/Contact"
import { Helmet, HelmetProvider } from "react-helmet-async"


export default function Development() {
    return (
        <article className="Development Service-Page">

            <HelmetProvider>
                <Helmet>
                    {/* SEO Meta Tags */}
                    <title>Webies || פיתוח אתרים</title>
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
                        עיצוב ופיתוח אתרים
                    </h1>
                </div>
            </section>

            <article className="text-content">
                <div className="pink-caption">
                    <p>ברוכים הבאים לעמוד השירותים שלנו - עיצוב ופיתוח אתרים!</p>
                </div>

                <section>
                    בעולם שכולו טכנולוגיה, אתר האינטרנט שלך הוא המקום הראשון שאנשים רואים כשהם נתקלים בעסק שלך ברשת.
                    דף הבית שלך הוא ההזדמנות המושלמת להעביר את המסר הנכון ולהתרשם באמצעות מראה מקצועי ומרשים.
                </section>

                <section>
                    כיום, לפיתוח אתר אינטרנט איכותי חשיבות מרבית בקידום כל עסק או חברה.
                    אתר העסק שלך הוא כלי המכפיל את יכולת ההגעה שלך ללקוחות ומאפשר להם להתחבר בקלות וביעילות רבה.
                </section>

                <section>
                    אנחנו כאן כדי לספק לך שירותי עיצוב ופיתוח איכותיים שישדרגו את חוויית המשתמש של לקוחותיך.
                    אנחנו דואגים לבנות אתרים יעילים וגמישים, שמתאימים לצרכים המשתנים של הלקוחות ומותאמים לכל תקציב.
                </section>

                <section>
                    האתר שלך הוא חלון לעסק שלך באונליין. אנחנו יודעים כמה חשוב לתת תחושה ומראה מקצועיים ואטרקטיביים.
                    עם תחרות שגוברת מיום ליום, עיצוב אתר מקצועי הוא היתרון שייכניס אותך למיקומים מובילים בתחום העסקי שלך.
                </section>

                <section>
                    אל תתעכב! בוא נעבוד יחד ונבנה את האתר האינטרנטי המושלם עבורך.
                    נבנה אתר שיתאים לצרכים הספציפיים של עסקך וישדרג את הנוכחות שלך ברשת. אתר שמקפיץ, מרשים ומשפר את המקום שלך בשוק.
                    ניתן לעסק שלך את הכלים שהוא זקוק להם על מנת לצמוח ולהצליח.
                </section>

                <section>
                    בוא נתפס את ההזדמנות ונשפר יחד את הנוכחות המקוונת שלך!
                </section>
            </article>


            <section className="contact-page">
                <Contact embeded={true}/>
            </section>

        </article>
    )
}