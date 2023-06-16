import { useEffect, useRef } from "react";
import "./BrandCarousel.css";

function BrandCarousel(): JSX.Element {
    const wrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lastElement = wrapper.current.lastChild;

        const interval = setInterval(() => {
            const firstElement = wrapper.current.firstChild;
            wrapper.current.removeChild(firstElement);
            wrapper.current.appendChild(firstElement);
        }, 3000);

        return () => {
            clearInterval(interval);
            wrapper.current.appendChild(lastElement);
        }
    })

    return (
        <div ref={wrapper} className="BrandCarousel">
            {[...Array(10)].map((el, i) => {
                return <img className="brand-image" id={"brand"+i} key={i} alt={"an image of brand " + i} width={'78px'} src={require(`../../../Assets/Images/brand/brand-1-${i += 1}.png`)} />
            })}
        </div>
    );
}

export default BrandCarousel;