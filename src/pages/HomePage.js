import React from 'react';
import Hero from '../components/Hero';
import Sidekick from "../components/Sidekick";
import Intro from "../components/Intro";

function HomePage(props){
    return(
        <div>
            <Sidekick title={props.title} subTitle={props.subTitle}></Sidekick>
            <Intro></Intro>
        </div>

    )
}

export default HomePage;