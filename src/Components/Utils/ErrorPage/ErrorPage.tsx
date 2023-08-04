import react from 'react';
import errorPageImage from "../../../Assets/Images/resources/error-page.webp";
import "./ErrorPage.css"


export default function ErrorPage() {
    return (
        <article className="ErrorPage">
            <section className='pink-content'>
                <h2>אופס, הדף שחיפשת לא נמצא :(</h2>
            </section>
            <img src={errorPageImage} alt="error page image - 404" />
        </article>
    );
}