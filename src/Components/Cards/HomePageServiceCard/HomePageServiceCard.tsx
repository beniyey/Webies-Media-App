import "./HomePageServiceCard.css";

function HomePageServiceCard(props: { img: string, index: number }): JSX.Element {
    return (
        <div className="HomePageServiceCard invisible animate__animated">
            <div className="service-card">
                <div className="row header">
                    <img src={props.img} alt="image of improving web" />
                    {props.index === 1 && <div className="service-text">
                        <span className="upper-text">תחזוקת אתרים</span>
                        <br />
                        <span className="lower-text">להיות בשליטה מלאה</span>
                    </div>}
                    {props.index === 2 && <div className="service-text">
                        <span className="upper-text">קידום אתרים</span>
                        <br />
                        <span className="lower-text">SEO optimization</span>
                    </div>}
                    {props.index === 3 && <div className="service-text">
                        <span className="upper-text">עיצוב ופיתוח אתרים</span>
                        <br />
                        <span className="lower-text">פיתרונות דיגיטליים</span>
                    </div>}
                </div>
                <span className="divider-line" ></span>
                <div>
                    {props.index === 1 && <div className="main-text">
                        <span>
                            אתר הוא כלי המאפשר לך לספק ערך ללקוחותיך, וככל כלי מדי פעם הוא דורש טיפוח וחידוש, אנחנו נספק לך שירות שיעזור לך בזה , צוות המקצוענים שלנו יבצע חידוש, העלאת תוכן ושידרוג לפי הצרכים שלך, בשביל שתוכלו להתעסק במה שבאמת חשוב לכם ולעסק שלכם
                        </span>
                    </div>}
                    {props.index === 2 && <div className="main-text">
                        <span>
                            דירוג אתרים במנועי החיפוש הוא הכלי העיקרי בקידום העסק, אתרים המדורגים בצמרת מנועי החיפוש מקבלים חשיפה גבוה יותר ומספר גבוה יותר של לקוחות ומכירות, וכך גם יותר תוצאות חיוביות לעסק שלך ביחד עם צוות קידום האתרים שלנו תוכלו להגיע לדירוג גבוה במנועי החיפוש ולהגדיל את החשיפה שלך
                        </span>
                    </div>}
                    {props.index === 3 && <div className="main-text">
                        <span>
                            ,אנחנו עובדים עם צוות של מעצבי ומפתחי האתרים הטובים בתחום, על מנת לספק לכם את המוצר המתאים ביותר לצרכי העסק אנחנו נעזור לך להגדיר את המוצר המתאים ביותר, ונפתח אתר מותאם אישית לצרכים שלך
                        </span>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default HomePageServiceCard;
