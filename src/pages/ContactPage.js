import React from 'react';
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Sidekick from "../components/Sidekick";


function ContactPage(props){
    return(
        <div>
            <Sidekick title={props.title} subTitle={props.subTitle}></Sidekick>
            {/*<Hero title={props.title} emoji={props.emoji} subTitle={props.subTitle}></Hero>*/}
            <Contact/>
        </div>
    )
}
export default ContactPage;