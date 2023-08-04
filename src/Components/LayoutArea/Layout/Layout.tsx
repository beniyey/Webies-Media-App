import { styled } from "@mui/system";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";
import CssBaseline from '@mui/material/CssBaseline';
import { SyntheticEvent } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Copyrights = styled("div")({
    width: "80%",
    height: "50px",
    backgroundColor: "transparent",
    color: "#7e8aa7",
    textAlign: "left",
    lineHeight: "50px",
    margin: "auto",
    borderTop: "2px solid #e2e2e2",
})
function Layout(): JSX.Element {
    return (
        <article id="scrollArea" className="Layout">
            <HelmetProvider>
                <Helmet>
                    {/* SEO Meta Tags */}
                    <meta name="description" content="אנחנו סוכנות לפיתוח אתרים בישראל, המציעה עיצוב אתרים, פיתוח אתרים, קידום אתרים, תחזוקת אתרים ושירותי מדיה חברתית." />
                    <meta name="keywords" content="שירותים" />
                    <meta name="author" content="webies media" />
                    <meta name="robots" content="index, follow" />

                    {/* OpenGraph Meta Tags */}
                    <meta property="og:title" content="webies media - Israel" />
                    <meta property="og:description" content="We are a web development agency based in Tel Aviv, Israel, offering design, development, SEO, maintenance, and social media services." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.webies-media.com/" />
                    <meta property="og:image" content="https://www.webies-media.com/static/media/logo.777136740da70324db6f.webp" /> {/* Replace with your actual image URL */}
                    <meta property="og:image:alt" content="webies media - Tel Aviv, Israel" />
                    <meta property="og:site_name" content="webies media" />

                    {/* Twitter Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Webeis media - Israel" />
                    <meta name="twitter:description" content="We are a web development agency based in Tel Aviv, Israel, offering design, development, SEO, maintenance, and social media services." />
                    <meta name="twitter:image" content="https://www.webies-media.com/static/media/logo.777136740da70324db6f.webp" /> {/* Replace with your actual image URL */}
                    <meta name="twitter:image:alt" content="webies media - Tel Aviv, Israel" />
                    <meta name="twitter:site" content="@webies_media" /> {/* Replace with your Twitter handle */}
                    <meta name="twitter:creator" content="@webies_media" /> {/* Replace with your Twitter handle */}
                </Helmet>
            </HelmetProvider>
            <CssBaseline />
            <Header />
            <main>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
            <Copyrights>
                Designed and developed by <span style={{ color: "#ff57a4" }}>Webies Media</span> © 2023 All rights reserved.
            </Copyrights>
        </article>
    );
}

export default Layout;
