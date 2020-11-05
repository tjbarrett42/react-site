import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import epidemicsim from '../assets/images/epidemicsim.png';
import spotifystats from '../assets/images/spotifystats.png';
import personalsite from '../assets/images/personalsite.png';
import reactsite from '../assets/images/reactsite.png';

import Card from '../components/Card';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Personal Site',
                    subTitle: 'React implementation of this site',
                    imgSrc: reactsite,
                    link: 'https://github.com/tjbarrett42/react-site',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Epidemic Simulator',
                    subTitle: 'Simulation West Africa Ebola outbreak (pre-2020 project!)',
                    imgSrc: epidemicsim,
                    link: 'https://github.com/ebweinberger/epidemic-sim',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Spotify Stats',
                    subTitle: 'Webview recreation of spotify using Spotify API',
                    imgSrc: spotifystats,
                    link: 'https://github.com/tjbarrett42/spotify-stats',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Classic Personal Website',
                    subTitle: 'Original HTML/CSS/jQuery version of this site',
                    imgSrc: personalsite,
                    link: 'https://github.com/tjbarrett42/tjbarrett42.github.io.original',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item = {item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-around" lg="12">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;