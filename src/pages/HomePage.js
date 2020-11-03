import React from 'react';
import Hero from '../components/Hero';

function HomePage(props){
    return(
        <div>
            <Hero title={props.title} emoji={props.emoji} subTitle={props.subTitle} text={props.text}/>
        </div>

    )
}

export default HomePage;