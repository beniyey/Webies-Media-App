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

let standardWidth = "clamp(360px,80%,100%)"

const BrandCarousel = styled('div')({
    display: "flex",
    justifyContent: "space-around",
    width: standardWidth,
    margin: "100px auto",
    overflow: "scroll",
    gap: "40px",
})

const WhatWeDo = styled('div')({
    margin: "100px auto",
    width: "100%",
    textAlign: "center",
})

const DataSection = styled('div')({
    margin: "auto",
    width: "clamp(360px,90%,100%)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    textAlign: "center",
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
        root: document.querySelector("#scrollArea"),
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
                }else{
                    topBanner.current.querySelector(".top-banner-text").classList.remove("animate__fadeInUp");
                    topBanner.current.querySelector(".top-banner-text").classList.add("animate__fadeOutDown");
                }
                break;
            case whatWeDo.current:
                if (isIntersecting) {
                    whatWeDo.current.querySelectorAll("div.HomePageServiceCard").forEach((el)=>{
                        el.classList.add("animate__fadeInUp")
                        el.classList.remove("animate__fadeOut")
                    });
                    whatWeDo.current.querySelectorAll("div.pink-caption").forEach((el)=>{
                        el.classList.add("animate__fadeInUp")
                        el.classList.remove("animate__fadeOutUp")
                    });
                    whatWeDo.current.querySelectorAll("h1").forEach((el)=>{
                        el.classList.add("animate__fadeIn")
                        el.classList.remove("animate__fadeOut")
                    });
                }else{
                    whatWeDo.current.querySelectorAll("div.HomePageServiceCard").forEach((el)=>{
                        el.classList.remove("animate__fadeInUp")
                        el.classList.add("animate__fadeOut")
                    });
                    whatWeDo.current.querySelectorAll("div.pink-caption").forEach((el)=>{
                        el.classList.remove("animate__fadeInUp")
                        el.classList.add("animate__fadeOutUp")
                    });
                    whatWeDo.current.querySelectorAll("h1").forEach((el)=>{
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
                    topProjects.current.style.opacity = "1"
                }
                break;
            default:
                break;
        }

    }

    useEffect(() => {
        containersArr.forEach((element, index) => {
            if (element.current) {
                observer.observe(element.current)
            }
        })
        setInterval(() => {
            rotateCarousel()
        }, 2000)

    }, [])


    return (
        <div className="HomePage">
            <MainBannerWrapper ref={topBanner} className="main-banner ">
                <MainBannerContentWrapper sx={{ width: "inherit" }}>
                    <MainBannerContent className="main-banner-content">
                        <div className="animate__animated top-banner-text invisible">
                            <p >גלו אופקים חדשים</p>
                            <p >לפיתוח העסק <span >שלכם</span> </p>
                            <p>יחד עם סוכנות הדיגיטל שלנו</p>
                            <MoreInfoButton onClick={() => navigate("/services")} variant="outlined" endIcon={<ArrowBackIosIcon />} >גלו עכשיו</MoreInfoButton>
                        </div>
                    </MainBannerContent>
                </MainBannerContentWrapper>
            </MainBannerWrapper>
            <BrandCarousel ref={carousel}>
                {[...Array(6)].map((el, i) => {
                    return <img className="brand-image" key={i} alt={"an image of brand " + i} width={'78px'} src={require(`../../../Assets/Images/brand/brand-1-${i += 1}.png`)} />
                })}
            </BrandCarousel>
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
            <DataSection ref={aboutUs} className="data-section" >
                <div>
                    <img src={AboutFloater} alt="bouncing image of workers" className="bouncing-img" />
                </div>
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
            </DataSection >
            <DataSection ref={whatWeDoFloater} className="data-section" >
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
                <div>
                    <img src={OfferFloater} alt="bouncing image of workers" className="bouncing-img" />
                </div>
            </DataSection >
            <PortfolioSummary ref={topProjects}>
                <div className="pink-caption">
                    <p>כנסו והתרשמו</p>
                </div>
                <h1 style={{ fontSize: "50px" }}>הפרוייקטים המובילים שלנו</h1>
                <span className="internal-section-spacer"></span>
                <div className="portfolio-summary-parent">
                    <div className="project-summary">
                        <img width={290} height={241} src={foodiesMockup} alt="" />
                    </div>
                    <div className="project-summary">
                        <img width={290} height={241} src={havanaMockup} alt="" />
                    </div>
                    <div className="project-summary">
                        <img width={290} height={241} src={crispyMockup} alt="" />
                    </div>
                </div>
                <PinkButton startIcon={<ArrowBackIosIcon />}>לכל הפרוייקטים</PinkButton>
            </PortfolioSummary>

        </div>
    );
}
export default HomePage;
