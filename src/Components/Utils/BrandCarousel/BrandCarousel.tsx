import { useEffect, useRef } from "react";
import "./BrandCarousel.css";

function BrandCarousel(): JSX.Element {
    const wrapper = useRef<HTMLDivElement>(null);

    return (
        <div ref={wrapper} className="BrandCarousel">
            {[...Array(10)].map((el, i) => {
                return <img className="brand-image" id={"brand"+i} key={i} alt={"an image of brand " + i} width={'78px'} src={require(`../../../Assets/Images/brand/brand-1-${i += 1}.png`)} />
            })}
        </div>
    );
}

export default BrandCarousel;