import "./Portfolio.css";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { styled } from "@mui/system";
import { useEffect } from "react";
import projectsJSON from "../../Data/projects";
import ProjectCard from "../../Cards/ProjectCard/ProjectCard";

const ArrowDownIcon = styled(KeyboardDoubleArrowDownIcon)({})

function Portfolio(): JSX.Element {

    useEffect(() => {
    }, [])

    return (
        <div className="Portfolio">
            <div className="top-floater parent">
                <div className="floater-shape top-floater-background-left child"></div>
                <div className="floater-shape top-floater-background-left child"></div>
                <div className="floater-shape top-floater-background-left child"></div>
                <div className="floater-shape top-floater-background-left-offset child"></div>
                <div className="floater-shape top-floater-background-right child"></div>
                <div className="floater-shape top-floater-background-right child"></div>
                <div className="floater-shape top-floater-background-right-offset child"></div>
                <div className="top-floater-bg-image child"></div>
                <div className="top-floater-bg-image-overlay child"></div>

                <div className="top-floater-text">
                    <div className="pink-caption">
                        <p>הפרוייקטם המובילים שלנו</p>
                    </div>
                    <h1 style={{ fontSize: "50px", color: "white" }}>אנחנו מעדיפים לתת לעבודות <br /><span style={{ fontFamily: "fredoka-light" }}>שלנו לדבר בעד</span> עצמן</h1>
                    <span className="internal-section-spacer" />
                    <ArrowDownIcon className="arrow-down-icon" />
                </div>
            </div>

            <div className="projects-wrapper">
                {
                    projectsJSON.length > 1 && projectsJSON.map((project: { name: string, category: string, img: string }, index: number) => {
                        return (
                            <ProjectCard key={index} projectObj={project} inverted={index % 2 === 0} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Portfolio;
