import { styled } from "@mui/system";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";
import CssBaseline from '@mui/material/CssBaseline';
import { SyntheticEvent } from "react";

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
        <div id="scrollArea" className="Layout">
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
        </div>
    );
}

export default Layout;
