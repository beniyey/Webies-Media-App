import "./Development.css"
import mainImg from "../../../Assets/Images/resources/development-page.webp"
import React from "react"
import Contact from "../../Pages/Contact/Contact"


export default function Development() {
    return (
        <div className="Development Service-Page">
            <div className="top-floater">
                <div className="top-floater-bg-image"></div>
                <div className="top-floater-bg-image-overlay"></div>

                <div className="header-text">
                    <h1 className="heading">
                        עיצוב ופיתוח אתרים
                    </h1>
                </div>
            </div>

            <div className="text-content">
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
            </div>

            
            <div className="contact-page">
                <Contact />
            </div>

        </div>
    )
}