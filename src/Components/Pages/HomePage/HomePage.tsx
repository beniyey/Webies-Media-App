import { Box, Button, Container, Typography } from "@mui/material";
import "./HomePage.css";
import { styled } from "@mui/system";
import mainBannerImg from "../../../Assets/Images/backgrounds/top-banner-home-page.jpeg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MainBannerWrapper = styled('div')({
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${mainBannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    direction: "rtl",
    display: "grid",
    gridTemplateColumns: "40% 60%"
})

const MainBannerContentWrapper = styled('div')({
    position: "relative"
})

const MainBannerContent = styled('div')({
    position: "absolute",
    top: "40%",
    left: "50%",
    width: "100%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: "white",
})

const MoreInfoButton=styled(Button)({
    transition: "300ms",
    fontSize: "20px",
    color:"white",
    border:"2px solid #E95A9C",
    padding:"8px 20px",
    borderRadius:"30px",
    '&:hover': {
        transition: "300ms",
        color: "#E95A9C",
        boder:"white",
    }
})

function HomePage(): JSX.Element {
    return (
        <div className="HomePage">
            <MainBannerWrapper>
                <MainBannerContentWrapper>
                    <MainBannerContent>
                        <div className="top-banner-text">
                            <p >גלו אופקים חדשים</p>
                            <p >לפיתוח העסק <span >שלכם</span> </p>
                            <p>יחד עם סוכנות הדיגיטל שלנו</p>
                            <MoreInfoButton variant="outlined" endIcon={<ArrowBackIosIcon />} >גלו עכשיו</MoreInfoButton>
                        </div>
                    </MainBannerContent>
                </MainBannerContentWrapper>
            </MainBannerWrapper>
        </div>
    );
}

export default HomePage;
