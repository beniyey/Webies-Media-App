import { Button } from "@mui/material";
import "./HomePage.css";
import { styled } from "@mui/system";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AboutFloater from "../../../Assets/Images/resources/photo-main-page.png"
import OfferFloater from "../../../Assets/Images/resources/what-we-offer.png"
import HomePageServiceCard from "../../Cards/HomePageServiceCard/HomePageServiceCard";
import foodiesMockup from "../../../Assets/Images/portfolio/foodies-mockup-1.jpg"
import havanaMockup from "../../../Assets/Images/portfolio/havana-mockup-1(1).jpg"
import crispyMockup from "../../../Assets/Images/portfolio/chrispy-pizza-mobig.jpg"
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BrandCarousel from "../../Utils/BrandCarousel/BrandCarousel";
import Contact from "../Contact/Contact";
import {Helmet} from "react-helmet";

const PinkButton = styled(Button)({
    transition: 'all 0.3s',
    color: 'white',
    backgroundColor: "#E95A9C",
    padding: "10px 30px",
    borderRadius: "30px",
    '&:hover': {
        backgroundColor: "white",
        color: "#E95A9C",
        transition: '0.3s',
        border: "2px solid #E95A9C",
    }
})

const MoreInfoButton = styled(Button)({
    transition: "300ms",
    fontSize: "20px",
    color: "white",
    border: "2px solid #E95A9C",
    padding: "8px 20px",
    borderRadius: "30px",
    '&:hover': {
        transition: "300ms",
        color: "white",
        backgroundColor: "#E95A9C",
        border: "2px solid #E95A9C",
    }
})


function HomePage(): JSX.Element {

    const navigate = useNavigate()

    const options = {
        rootMargin: "0px",
        threshold: 0.25,
    }

    const [
        carousel,
        topBanner,
        whatWeDo,
        aboutUs,
        whatWeDoFloater,
        topProjects
    ] = [
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null)
        ]

    let containersArr = [
        carousel,
        topBanner,
        whatWeDo,
        aboutUs,
        whatWeDoFloater,
        topProjects
    ]

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animate(entry)
            } else {
                animate(entry, false)
            }
        })
    }, options)

    function rotateCarousel() {
        if (carousel.current) {
            carousel.current.scrollLeft += 100
        }
    }

    function animate(entry: any, isIntersecting = true) {

        switch (entry.target) {
            case topBanner.current:
                if (isIntersecting) {
                    topBanner.current.querySelector(".top-banner-text").classList.remove("animate__fadeOutDown");
                    topBanner.current.querySelector(".top-banner-text").classList.add("animate__fadeInUp");
                } else {
                    topBanner.current.querySelector(".top-banner-text").classList.remove("animate__fadeInUp");
                    topBanner.current.querySelector(".top-banner-text").classList.add("animate__fadeOutDown");
                }
                break;
            case whatWeDo.current:
                if (isIntersecting) {
                    whatWeDo.current.querySelectorAll("div.HomePageServiceCard").forEach((el) => {
                        el.classList.add("animate__fadeInUp")
                        el.classList.remove("animate__fadeOut")
                    });
                    whatWeDo.current.querySelectorAll("div.pink-caption").forEach((el) => {
                        el.classList.add("animate__fadeInUp")
                        el.classList.remove("animate__fadeOutUp")
                    });
                    whatWeDo.current.querySelectorAll("h1").forEach((el) => {
                        el.classList.add("animate__fadeIn")
                        el.classList.remove("animate__fadeOut")
                    });
                } else {
                    whatWeDo.current.querySelectorAll("div.HomePageServiceCard").forEach((el) => {
                        el.classList.remove("animate__fadeInUp")
                        el.classList.add("animate__fadeOut")
                    });
                    whatWeDo.current.querySelectorAll("div.pink-caption").forEach((el) => {
                        el.classList.remove("animate__fadeInUp")
                        el.classList.add("animate__fadeOutUp")
                    });
                    whatWeDo.current.querySelectorAll("h1").forEach((el) => {
                        el.classList.remove("animate__fadeIn")
                        el.classList.add("animate__fadeOut")
                    });
                }
                break;
            case aboutUs.current:
                if (isIntersecting) {
                    aboutUs.current.style.opacity = "1"
                }
                break;
            case whatWeDoFloater.current:
                if (isIntersecting) {
                    whatWeDoFloater.current.style.opacity = "1"
                }
                break;
            case topProjects.current:
                if (isIntersecting) {
                    console.log("intersecting", document.querySelectorAll(".project-summary"))
                    document.querySelectorAll(".project-summary").forEach((el) => {
                        el.classList.add("animate__fadeInRight")
                        el.classList.remove("animate__fadeOutRight")
                    })
                } else {
                    document.querySelectorAll(".project-summary").forEach((el) => {
                        el.classList.remove("animate__fadeInRight")
                        el.classList.add("animate__fadeOutRight")
                    })
                }
                break;
            default:
                break;
        }

    }

    useEffect(() => {
        window.scrollTo(0, 0);
        containersArr.forEach((element, index) => {
            if (element.current) {
                observer.observe(element.current)
            }
        })
        let carouselInterval = setInterval(() => {
            rotateCarousel()
        }, 2000)

        return function cleanup() {
            containersArr.forEach(element => {
                if (element.current) {
                    observer.unobserve(element.current)
                }
            })

            clearInterval(carouselInterval)
        }

    }, [])




    return (
        <article className="HomePage">

            <Helmet>
                {/* SEO Meta Tags */}
                <meta name="description" content="We are a web development agency based Israel, offering web design, web development, SEO, web site maintenance, and social media services." />
                <meta name="keywords" content="web development, design, SEO, maintenance, social media, Tel Aviv, Israel" />
                <meta name="author" content="Your Web Dev Agency" />
                <meta name="robots" content="index, follow" />

                {/* OpenGraph Meta Tags */}
                <meta property="og:title" content="Your Web Dev Agency - Tel Aviv, Israel" />
                <meta property="og:description" content="We are a web development agency based in Tel Aviv, Israel, offering design, development, SEO, maintenance, and social media services." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.youragencywebsite.com/" />
                <meta property="og:image" content="https://www.youragencywebsite.com/og-image.jpg" /> {/* Replace with your actual image URL */}
                <meta property="og:image:alt" content="Your Web Dev Agency - Tel Aviv, Israel" />
                <meta property="og:site_name" content="Your Web Dev Agency" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Your Web Dev Agency - Tel Aviv, Israel" />
                <meta name="twitter:description" content="We are a web development agency based in Tel Aviv, Israel, offering design, development, SEO, maintenance, and social media services." />
                <meta name="twitter:image" content="https://www.youragencywebsite.com/twitter-image.jpg" /> {/* Replace with your actual image URL */}
                <meta name="twitter:image:alt" content="Your Web Dev Agency - Tel Aviv, Israel" />
                <meta name="twitter:site" content="@youragency" /> {/* Replace with your Twitter handle */}
                <meta name="twitter:creator" content="@youragency" /> {/* Replace with your Twitter handle */}
            </Helmet>

            {/* Main Banner */}
            <section ref={topBanner} className="main-banner">
                <div className="animate__animated top-banner-text invisible">
                    <h1>
                        ממשו את פוטנציאל
                        העסק שלכם<span > בדיגיטל </span>
                    </h1>
                    <p>
                        ביחד ניצור שילוב של עיצוב חדשני ופיתוח מתקדם
                        בשביל להביא את העסק שלכם לרמה הבאה
                        ולהבדיל אתכם מהמתחרים
                    </p>

                    <MoreInfoButton onClick={() => navigate("/services")} variant="outlined" endIcon={<ArrowBackIosIcon />} >גלו עכשיו</MoreInfoButton>
                </div>
            </section>

            <section ref={carousel} className="brand-carousel">
                <BrandCarousel />
            </section>

            <section ref={whatWeDo} className="what-we-do">
                <div className="pink-caption animate__animated">
                    <p>מה אנחנו עושים?</p>
                </div>
                <h1 className="animate__animated heading">מעלים את העסק שלך לדיגיטל <br /> עם הטובים ביותר</h1>
                <span className="internal-section-spacer"></span>
                <div className="what-we-do-summary">
                    {[...Array(3)].map((el, i) => {
                        return <HomePageServiceCard key={i} index={i + 1} img={require(`../../../Assets/Images/shapes/service-i-${i + 1}.png`)} />
                    })}
                </div>
            </section>

            <section ref={aboutUs} className="about section" >

                <img src={AboutFloater} alt="bouncing image of workers" className="bouncing-img" />

                <div className="about-content-parent">
                    <div className="pink-caption">
                        <p>קצת עלינו</p>
                    </div>
                    <h1 className="heading center">ההצלחה שלך היא המטרה שלנו</h1>
                    <span className="internal-section-spacer"></span>
                    <div className="about-content">
                        אנחנו צוות של מפתחים ומעצבים עם תשוקה רבה לתחום והמון רצון לעזור לעסקים להתקדם לעבר עידן הטכנולוגיה ולהתקדם בתחום בו הם עוסקיו
                        <span className="about-content-inner">
                            אנחנו איתך בכל צעד בדרך להצלחה
                        </span>
                        כל צעד איתנו בדרך להצלחה יהיה בתיאום מלא ובכל עת תוכל לפנות אלינו ולקבל עזרה והסברים על הפרויקט שלך, כמו כן נשמח לשמוע ממך ולהתאים את הפרויקט לצרכיך ולצרכי העסק שלך
                    </div>
                </div>

            </section >

            <section ref={whatWeDoFloater} className="services section" >
                <img src={OfferFloater} alt="bouncing image of workers" className="bouncing-img" />
                <div className="services-content-parent">
                    <div className="pink-caption">
                        <p>מה אנחנו עושים</p>
                    </div>
                    <h1 className="heading">אנחנו מציעים את הכלים הטובים ביותר
                        לעסק שלך</h1>
                    <span className="internal-section-spacer"></span>
                    <div className="services-content">
                        המשימה שלנו היא לספק לך את הכלים הטובים ביותר לניהול העסק שלך ביעילות , כדי שתוכל להתמקד במה שאתה עושה הכי טוב, ואנחנו נדאג עבורך לכל השאר.                        <br />
                        <span className="services-content-inner">
                            כלים לניהול
                        </span>
                        אנחנו נעזור לך לפתח כלים לשיפור ויעול הניהול באתר שלךת על מנת ליעל את הזמן שלך ואת איכות השירותים שאתה מציע,
                        <span className="services-content-inner">
                            סטטיסטיקה וביצועי האתר

                        </span>
                        אנחנו נעמיד ברשותך כלים לבקרת ביצועי האתר שלך, ונעזור לך להבין את המשתמשים שלך ואת הפעילות שלהם באתר שלך, בשביל לספק להם בעתיד חווית משתמש טובה יותר, ולהגדיל את הכנסות העסק שלך                    </div>
                </div>
            </section >

            <section className="featured-projects" ref={topProjects}>
                <div className="pink-caption">
                    <p>כנסו והתרשמו</p>
                </div>
                <h1 className="heading">הפרוייקטים המובילים שלנו</h1>
                <span className="internal-section-spacer"></span>
                <div className="portfolio-summary-parent">
                    <div className="project-summary invisible animate__animated">
                        <img className="portfolio-image" src={foodiesMockup} alt="" />
                    </div>
                    <div style={{ animationDelay: "0.2s" }} className="project-summary invisible animate__animated">
                        <img className="portfolio-image" src={havanaMockup} alt="" />
                    </div>
                    <div style={{ animationDelay: "0.4s" }} className="project-summary invisible animate__animated">
                        <img className="portfolio-image" src={crispyMockup} alt="" />
                    </div>
                </div>
                <PinkButton onClick={() => navigate("/portfolio")} className="center" startIcon={<ArrowBackIosIcon />}>לכל הפרוייקטים</PinkButton>
            </section>

            <section className="contact-page">
                <Contact />
            </section>
        </article>
    );
}
export default HomePage;

