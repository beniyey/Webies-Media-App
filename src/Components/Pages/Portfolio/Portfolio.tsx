import "./Portfolio.css";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { styled } from "@mui/system";
import { useEffect, useRef } from "react";
import projectsJSON from "../../Data/projects";
import ProjectCard from "../../Cards/ProjectCard/ProjectCard";
import Contact from "../Contact/Contact";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ArrowDownIcon = styled(KeyboardDoubleArrowDownIcon)({})

function Portfolio(): JSX.Element {

    const projectsWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <article className="Portfolio">
            <HelmetProvider>
                <Helmet>
                    {/* SEO Meta Tags */}
                    <title>Webies || העבודות שלנו</title>
                    <meta name="description" content="ראה כמה מהעבודות שביצענו בסטודיו לפיתוח אתרים ועיצוב בישראל. אנחנו מציעים שירותים כמו פיתוח אתרים, עיצוב אתרים, קידום אתרים ועוד." />
                    <meta name="keywords" content="פיתוח אתרים, עיצוב אתרים, קידום אתרים, תחזוקת אתרים, ניהול רשתות חברתיות, ניהול אתרים" />
                    <meta name="author" content="Webies Media" />
                    <meta name="robots" content="index, follow" />

                    {/* OpenGraph Meta Tags */}
                    <meta property="og:title" content="Webies Media - העבודות שלנו" />
                    <meta property="og:description" content="ראה כמה מהעבודות שביצענו בסטודיו לפיתוח אתרים ועיצוב בישראל. אנחנו מציעים שירותים כמו פיתוח אתרים, עיצוב אתרים, קידום אתרים ועוד." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.webies-media.com/" />
                    <meta property="og:image" content="https://www.webies-media.com/static/media/logo.777136740da70324db6f.webp" /> {/* Replace with your actual image URL */}
                    <meta property="og:image:alt" content="Webies Media - תל אביב, ישראל" />
                    <meta property="og:site_name" content="Webies Media" />

                    {/* Twitter Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Webies Media - העבודות שלנו" />
                    <meta name="twitter:description" content="ראה כמה מהעבודות שביצענו בסטודיו לפיתוח אתרים ועיצוב בישראל. אנחנו מציעים שירותים כמו פיתוח אתרים, עיצוב אתרים, קידום אתרים ועוד." />
                    <meta name="twitter:image" content="https://www.webies-media.com/static/media/logo.777136740da70324db6f.webp" /> {/* Replace with your actual image URL */}
                    <meta name="twitter:image:alt" content="Webies Media - תל אביב, ישראל" />
                    <meta name="twitter:site" content="@webies_media" /> {/* Replace with your Twitter handle */}
                    <meta name="twitter:creator" content="@webies_media" /> {/* Replace with your Twitter handle */}
                </Helmet>
            </HelmetProvider>


            <section className="top-floater parent">
                <div className="floater-shape top-floater-background-left child"></div>
                <div className="floater-shape top-floater-background-left child"></div>
                <div className="floater-shape top-floater-background-left child"></div>
                <div className="floater-shape top-floater-background-left-offset child"></div>
                <div className="floater-shape top-floater-background-right child"></div>
                <div className="floater-shape top-floater-background-right child"></div>
                <div className="floater-shape top-floater-background-right-offset child"></div>
                <div className="top-floater-bg-image child"></div>
                <div className="top-floater-bg-image-overlay child"></div>

                <div className="top-floater-text">
                    <div className="pink-caption">
                        <p>הפרוייקטם המובילים שלנו</p>
                    </div>
                    <h1 style={{ fontSize: "50px", color: "white" }}>אנחנו מעדיפים לתת לעבודות <br /><span style={{ fontFamily: "fredoka-light" }}>שלנו לדבר בעד</span> עצמן</h1>
                    <span className="internal-section-spacer" />
                    <ArrowDownIcon className="arrow-down-icon" />
                </div>
            </section>

            <section ref={projectsWrapper} className="projects-wrapper">
                {
                    projectsJSON.length > 1 && projectsJSON.map((project: { name: string, category: string, img: string }, index: number) => {
                        return (
                            <ProjectCard key={index} projectObj={project} inverted={index % 2 === 0} />
                        )
                    })
                }
            </section>

            <section className="contact-page">
                <Contact />
            </section>
        </article>
    );
}

export default Portfolio;
