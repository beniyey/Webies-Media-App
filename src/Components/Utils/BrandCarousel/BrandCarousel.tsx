import { useEffect, useRef } from "react";
import "./BrandCarousel.css";

function BrandCarousel(): JSX.Element {
    const wrapper = useRef<HTMLDivElement>(null);
    const options = {
        rootMargin: "0px",
        threshold: 0.25,
    }

    useEffect(() => {
        observer.observe(wrapper.current)
    }, [])

    function animate(entry: any, isIntersecting: Boolean = true) {
        if (isIntersecting) {
            entry.target.childNodes.forEach((el: HTMLImageElement, i: number) => {
                el.classList.remove("animate__fadeOutLeft")
                el.classList.add("animate__fadeInLeft")
            })
        } else {
            entry.target.childNodes.forEach((el: any, i: number) => {
                el.classList.remove("animate__fadeInLeft")
                el.classList.add("animate__fadeOutLeft")
            })
        }
    }

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animate(entry)
            } else {
                animate(entry, false)
            }
        })
    }, options)

    return (
        <div ref={wrapper} className="BrandCarousel">
            {[...Array(10)].map((el, i) => {
                return <img className="brand-image animate__animated  invisible" style={{ animationDelay: `0.${i}s` }} id={"brand" + i} key={i} alt={"an image of brand " + i} width={'78px'} src={require(`../../../Assets/Images/brand/brand-1-${i += 1}.png`)} />
            })}
        </div>
    );
}

export default BrandCarousel;