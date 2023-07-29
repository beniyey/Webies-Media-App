
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


    return (
        <div ref={wrapper} className={`ProjectCard parent`}>
            <img src={require("../../../Assets/Images/portfolio/" + props.projectObj.img)} />
            
            <div ref={content} className="content">
                <span>{props.projectObj.name}</span>
                <br />
                <span>{props.projectObj.category}</span>
            </div>
        </div>
    );
}

export default ProjectCard;
