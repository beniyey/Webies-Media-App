import { Button } from "@mui/material";
import "./HomePage.css";
import { styled } from "@mui/system";
import mainBannerImg from "../../../Assets/Images/backgrounds/top-banner-home-page.jpeg"
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

const MainBannerWrapper = styled('div')({
    backgroundImage: `url(${mainBannerImg})`,
})

const MainBannerContentWrapper = styled('div')({
    position: "relative",
})

const MainBannerContent = styled('div')({

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

let standardWidth = "clamp(200px,80%,100%)"

const WhatWeDo = styled('div')({
    margin: "100px auto",
    width: "100%",
    textAlign: "center",
})

const DataSection = styled('div')({
    margin: "auto",
    width: "clamp(200px,90%,100%)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
})

const PortfolioSummary = styled('div')({
    margin: "100px auto 0px",

    textAlign: "center",
})

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

function HomePage(): JSX.Element {


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

    const navigate = useNavigate()

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
                }else{
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
        <div className="HomePage">
            <MainBannerWrapper ref={topBanner} className="main-banner ">
                <MainBannerContentWrapper sx={{ width: "inherit" }}>
                    <MainBannerContent className="main-banner-content">
                        <div className="animate__animated top-banner-text invisible">
                            <p >פיתרונות דיגיטל מותאמים </p>
                            <p >אישית <span >להגדלת</span> </p>
                            <p>החשיפה של העסק שלכם</p>
                            {/* <p >אנחנו Webies סוכנות דיגיטל</p>
                            <p >ומיתוג לעסקים <span >ועצמאיים</span> </p>
                            <p>ביחד נביא את החשיפה שלכם ברשת</p>
                            <p>למיצוי מקסימלי, ועלייה בכמות הלקוחות\מכירות</p> */}
                            <MoreInfoButton onClick={() => navigate("/services")} variant="outlined" endIcon={<ArrowBackIosIcon />} >גלו עכשיו</MoreInfoButton>
                        </div>
                    </MainBannerContent>
                </MainBannerContentWrapper>
            </MainBannerWrapper>

            <div ref={carousel} className="brand-carousel">
                <BrandCarousel />
            </div>

            <WhatWeDo ref={whatWeDo}>
                <div className="pink-caption animate__animated">
                    <p>מה אנחנו עושים?</p>
                </div>
                <h1 className="animate__animated" style={{ fontSize: "50px" }}>מעלים את העסק שלך לדיגיטל <br /> עם הטובים ביותר</h1>
                <span className="internal-section-spacer"></span>
                <div className="what-we-do-summary">
                    {[...Array(3)].map((el, i) => {
                        return <HomePageServiceCard key={i} index={i + 1} img={require(`../../../Assets/Images/shapes/service-i-${i + 1}.png`)} />
                    })}
                </div>
            </WhatWeDo>
            <div ref={aboutUs} className="data-section" >

                <img src={AboutFloater} alt="bouncing image of workers" className="bouncing-img" />
                <div className="data-section-parent">
                    <div className="pink-caption">
                        <p>קצת עלינו</p>
                    </div>
                    <h1 style={{ fontSize: "50px" }}>ההצלחה שלך היא המטרה שלנו</h1>
                    <span className="internal-section-spacer"></span>
                    <div className="data-section-content">
                        אנחנו צוות של מפתחים ומעצבים עם תשוקה רבה לתחום והמון רצון לעזור לעסקים להתקדם לעבר עידן הטכנולוגיה ולהתקדם בתחום בו הם עוסקיו
                        <br />
                        <span className="data-section-content-inner">
                            אנחנו איתך בכל צעד בדרך להצלחה
                        </span>
                        <br />
                        כל צעד איתנו בדרך להצלחה יהיה בתיאום מלא ובכל עת תוכל לפנות אלינו ולקבל עזרה והסברים על הפרויקט שלך, כמו כן נשמח לשמוע ממך ולהתאים את הפרויקט לצרכיך ולצרכי העסק שלך
                    </div>

                </div>
            </div >
            <div ref={whatWeDoFloater} className="data-section" >
                <div className="data-section-parent">
                    <div className="pink-caption">
                        <p>מה אנחנו עושים</p>
                    </div>
                    <h1 style={{ fontSize: "50px" }}>אנחנו מציעים את הכלים הטובים ביותר
                        לעסק שלך</h1>
                    <span className="internal-section-spacer"></span>
                    <div className="data-section-content">
                        המשימה שלנו היא לספק לך את הכלים הטובים ביותר לניהול העסק שלך ביעילות , כדי שתוכל להתמקד במה שאתה עושה הכי טוב, ואנחנו נדאג עבורך לכל השאר.                        <br />
                        <span className="data-section-content-inner">
                            כלים לניהול
                        </span>
                        <br />
                        אנחנו נעזור לך לפתח כלים לשיפור ויעול הניהול באתר שלךת על מנת ליעל את הזמן שלך ואת איכות השירותים שאתה מציע,
                        <br />
                        <span className="data-section-content-inner">
                            סטטיסטיקה וביצועי האתר

                        </span>
                        <br />
                        אנחנו נעמיד ברשותך כלים לבקרת ביצועי האתר שלך, ונעזור לך להבין את המשתמשים שלך ואת הפעילות שלהם באתר שלך, בשביל לספק להם בעתיד חווית משתמש טובה יותר, ולהגדיל את הכנסות העסק שלך                    </div>
                </div>
                <img src={OfferFloater} alt="bouncing image of workers" className="bouncing-img" />
            </div >
            <PortfolioSummary className="" ref={topProjects}>
                <div className="pink-caption">
                    <p>כנסו והתרשמו</p>
                </div>
                <h1 style={{ fontSize: "50px" }}>הפרוייקטים המובילים שלנו</h1>
                <span className="internal-section-spacer"></span>
                <div className="portfolio-summary-parent">
                    <div className="project-summary invisible animate__animated">
                        <img className="portfolio-image" src={foodiesMockup} alt="" />
                    </div>
                    <div style={{animationDelay:"0.2s"}} className="project-summary invisible animate__animated">
                        <img className="portfolio-image" src={havanaMockup} alt="" />
                    </div>
                    <div style={{animationDelay:"0.4s"}} className="project-summary invisible animate__animated">
                        <img className="portfolio-image" src={crispyMockup} alt="" />
                    </div>
                </div>
                <PinkButton startIcon={<ArrowBackIosIcon />}>לכל הפרוייקטים</PinkButton>
            </PortfolioSummary>

            <div className="contact-page">
                <Contact />
            </div>
        </div>
    );
}
export default HomePage;
