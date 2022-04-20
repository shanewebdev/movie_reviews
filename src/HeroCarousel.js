import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import GOTBanner from './images/GOTBanner.jpg'
import AvengersBanner from './images/AvengersBanner.jpg'
import MoneyHeistBanner from './images/MoneyHeistBanner.jpg'

const HeroCarousel = function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                    className="banner"
                    src={AvengersBanner}
                    alt="Avengers Endgame"
                />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                    className="banner"
                    src={GOTBanner}
                    alt="Game of Thrones"
                />
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                    className="banner"
                    src={MoneyHeistBanner}
                    alt="Money Heist"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroCarousel;