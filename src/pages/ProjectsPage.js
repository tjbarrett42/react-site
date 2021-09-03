import React from 'react';
import Sidekick from "../components/Sidekick";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";

function ProjectsPage(props){
    return(
        <div>
            {/*<Hero title={props.title} emoji={props.emoji} subTitle={props.subTitle} text={props.text}/>*/}
            <Sidekick title={props.title} subTitle={props.subTitle}></Sidekick>
            <Carousel/>
        </div>
    )
}

export default ProjectsPage;