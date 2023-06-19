
import { SyntheticEvent, useEffect, useRef } from "react";
import "./ProjectCard.css";

interface Project {
    name: string;
    category: string;
    img: string;
}

interface ProjectCardProps {
    projectObj: Project;
    inverted: boolean;
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
    const { scrollY } = window;
    const content = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);

    function handleContentFloater(event:SyntheticEvent ,close: boolean = false) {
        if (close) {    
            content.current.classList.remove("animate__fadeInUp")
            content.current.classList.add("animate__fadeOutDown")
            return;
        }else{
            content.current.classList.remove("animate__fadeOutDown")
            content.current.classList.add("animate__fadeInUp")
        }
    }


    return (
        <div ref={wrapper} className={`ProjectCard parent`}>
                <div className="child overlay" onMouseEnter={handleContentFloater} onMouseLeave={(event)=>{handleContentFloater(event, true)}}></div>
                <img src={require("../../../Assets/Images/portfolio/" + props.projectObj.img)} />
                <div  className="child content-parent">
                    <div ref={content} className="content animate__animated  animate__faster">
                        <span>{props.projectObj.name}</span>
                        <br />
                        <span>{props.projectObj.category}</span>
                    </div>
                </div>
        </div>
    );
}

export default ProjectCard;
