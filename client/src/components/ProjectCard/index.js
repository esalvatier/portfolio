import React from "react";
import placeholder from "../../assets/images/300x200.png";

function ProjectCard(props) {
    console.log(props);
    const imgSrc = props.img.split(".").length < 2 ? placeholder : props.img
    const alt = props.alt.length > 0 ? props.alt : props.title

    return (
        <a className="img-container mx-auto border rounded" href={props.link}>
            <img src={imgSrc} className="img-fluid" alt={alt} height="200" width="300"/>
            <div className="label border rounded text-light bg-secondary text-center">{props.title}</div>
        </a>
    )
}

export default ProjectCard;