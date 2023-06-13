import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { useForm } from "react-hook-form";
import ArrowBackwardIosIcon from '@mui/icons-material/ArrowBackIosNew';
import "./Contact.css";
import Confetti from 'react-confetti'
import { useState } from "react";

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

function Contact(): JSX.Element {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showConfetti, setShowConfetti] = useState(false);
    const [pieces, setPieces] = useState(200);

    function send(data: any) {
        console.log(data);
        setShowConfetti(true);

        // Reset the confetti effect after a certain duration (e.g., 2 seconds)
        setTimeout(() => {
            setPieces(0);
        }, 3000);
        setTimeout(() => {
            setShowConfetti(false);
            setPieces(200);
        }, 7000);
    }

    return (
        <div className="Contact parent">
            <div className="child overlay"></div>
            <div className="child formData">
                <h1>בואו ניהיה בקשר!</h1>
                <span>השאירו לנו פרטים והצוות המסור שלנו יחזור אליכם בהקדם</span>
                <form onSubmit={handleSubmit(send)}>
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
                        })} type="name" placeholder="שם מלא" />
                        {errors.fullName && <span className="error-span">{errors.fullName.message.toString()}</span>}

                    </div>

                    <div className="input-div">
                        <input {...register("phoneNumber", {
                            required: "שדה חובה, יש למלא אותו לפני שליחה",
                            pattern: {
                                value: /\+*\d{10,13}/,
                                message: "מספר טלפון לא תקין"
                            }
                        })} type="phone" placeholder="טלפון" />
                        {errors.phoneNumber && <span className="error-span">{errors.phoneNumber.message.toString()}</span>}
                    </div>

                    <div className="input-div">
                        <textarea {...register("message", { maxLength: 300 })} placeholder="הודעה" />
                        {errors.message && <span className="error-span">{errors.message.message.toString()}</span>}
                    </div>

                    <SendButton type="submit" startIcon={<ArrowBackwardIosIcon />}>שליחה</SendButton>
                </form>
            </div>
            <div className="successfulForm">
                {showConfetti && <Confetti numberOfPieces={pieces} />}
                {/* <Confetti gravity={0.2} numberOfPieces={pieces}/> */}
            </div>
        </div>
    );
}

export default Contact;
