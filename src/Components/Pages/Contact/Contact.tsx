import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { useForm } from "react-hook-form";
import ArrowBackwardIosIcon from '@mui/icons-material/ArrowBackIosNew';
import "./Contact.css";
import Confetti from 'react-confetti'
import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import emailjs from '@emailjs/browser';
import IntersectionService from "../../../Services/IntersectionService";

const SendButton = styled(Button)({
    margin: "20px auto",
    backgroundColor: "#E95A9C",
    color: "white",
    width: "200px",
    height: "40px",
    borderRadius: "30px",
    '&:hover': {
        backgroundColor: "white",
        color: "#E95A9C",
        boxShadow: "0px 0px 1px 3px white",
        transition: "all 0.3s",
    }
})

function Contact(props: { embeded?: boolean }): JSX.Element {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showConfetti, setShowConfetti] = useState(false);
    const [pieces, setPieces] = useState(200);
    const form = useRef(null);
    let intersectionService: IntersectionService;

    const [
        heroSection,
        services,
    ] = [
            useRef<HTMLDivElement>(null),
            useRef<HTMLDivElement>(null),
        ]

    let containersArr = [
        heroSection,
        services,
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
        intersectionService = new IntersectionService(animate, containersArr) 
    }, [])

    function animate() {
        if (heroSection.current) {
            heroSection.current.classList.add("animate");
        }
        if (services.current) {
            services.current.classList.add("animate");
        }
    }

    function send(data: any) {

        emailjs.sendForm('service_5thynmv', 'template_6dcc8z6', form.current, 'y4eHmNEhDHtQTu8jz')
            .then((result) => {
                setShowConfetti(true);
                setTimeout(() => {
                    setPieces(0);
                }, 3000);
                setTimeout(() => {
                    setShowConfetti(false);
                    setPieces(200);
                }, 7000);
            }).catch((error) => {
                console.log(error.text);
            });

    }

    return (
        <div className="Contact parent">
            {!props.embeded &&
                <HelmetProvider>
                    <Helmet>
                        {/* SEO Meta Tags */}
                        <title>Webies || צור קשר</title>
                        <meta name="description" content="רוצים ליצור קשר? השאירו פרטים ונחזור אליכם בהקדם. אנחנו סטודיו לפיתוח אתרים ועיצוב בישראל, נשמח לעזור ולשמוע מכם." />
                        <meta name="keywords" content="פיתוח אתרים, עיצוב אתרים, קידום אתרים, תחזוקת אתרים, ניהול רשתות חברתיות, ניהול אתרים" />
                        <meta name="author" content="Webies Media" />
                        <meta name="robots" content="index, follow" />

                        {/* OpenGraph Meta Tags */}
                        <meta property="og:title" content="Webies Media - צור קשר" />
                        <meta property="og:description" content="רוצים ליצור קשר? השאירו פרטים ונחזור אליכם בהקדם. אנחנו סטודיו לפיתוח אתרים ועיצוב בישראל, נשמח לעזור ולשמוע מכם." />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://www.webies-media.com/" />
                        <meta property="og:image" content="https://www.webies-media.com/static/media/logo.777136740da70324db6f.webp" /> {/* Replace with your actual image URL */}
                        <meta property="og:image:alt" content="Webies Media - תל אביב, ישראל" />
                        <meta property="og:site_name" content="Webies Media" />

                        {/* Twitter Meta Tags */}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content="Webies Media - צור קשר" />
                        <meta name="twitter:description" content="רוצים ליצור קשר? השאירו פרטים ונחזור אליכם בהקדם. אנחנו סטודיו לפיתוח אתרים ועיצוב בישראל, נשמח לעזור ולשמוע מכם." />
                        <meta name="twitter:image" content="https://www.webies-media.com/static/media/logo.777136740da70324db6f.webp" /> {/* Replace with your actual image URL */}
                        <meta name="twitter:image:alt" content="Webies Media - תל אביב, ישראל" />
                        <meta name="twitter:site" content="@webies_media" /> {/* Replace with your Twitter handle */}
                        <meta name="twitter:creator" content="@webies_media" /> {/* Replace with your Twitter handle */}
                    </Helmet>
                </HelmetProvider>
            }


            <div className="child overlay"></div>
            <section className="child formData">
                <h1>בואו ניהיה בקשר!</h1>
                <span>השאירו לנו פרטים והצוות המסור שלנו יחזור אליכם בהקדם</span>
                <form ref={form} onSubmit={handleSubmit(send)}>
                    <div className="input-div">
                        <input {...register('email', {
                            required: "שדה חובה, יש למלא אותו לפני שליחה",
                            pattern: {
                                value: /[A-za-z1-9]*@[A-za-z]*\.[A-za-z]*/,
                                message: "כתובת מייל לא תקינה"
                            }
                        })} type="email" placeholder="מייל" />
                        {errors.email && <span className="error-span">{errors.email.message.toString()}</span>}
                    </div>

                    <div className="input-div">
                        <input {...register("fullName", {
                            required: "שדה חובה, יש למלא אותו לפני שליחה",
                            minLength: {
                                value: 4,
                                message: "שם מלא חייב להכיל לפחות 4 תווים"
                            },
                            maxLength: {
                                value: 70,
                                message: "שם מלא חייב להכיל לכל היותר 70 תווים"
                            }
                        })} type="fullName" placeholder="שם מלא" />
                        {errors.fullName && <span className="error-span">{errors.fullName.message.toString()}</span>}

                    </div>

                    <div className="input-div">
                        <input {...register("phone", {
                            required: "שדה חובה, יש למלא אותו לפני שליחה",
                            pattern: {
                                value: /\+*\d{10,13}/,
                                message: "מספר טלפון לא תקין"
                            }
                        })} type="phone" placeholder="טלפון" />
                        {errors.phoneNumber && <span className="error-span">{errors.phoneNumber.message.toString()}</span>}
                    </div>

                    <div className="input-div">
                        <textarea {...register("msg", { maxLength: 300 })} placeholder="הודעה" />
                        {errors.message && <span className="error-span">{errors.message.message.toString()}</span>}
                    </div>

                    <SendButton type="submit" startIcon={<ArrowBackwardIosIcon />}>שליחה</SendButton>
                </form>
            </section>
            <section className="successfulForm">
                {showConfetti && <Confetti numberOfPieces={pieces} />}
            </section>
        </div>
    );
}

export default Contact;
