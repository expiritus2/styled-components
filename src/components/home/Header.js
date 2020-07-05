import React from 'react';
import Hero from '../globals/Hero';
import Banner from '../globals/Banner';
import homeImg from '../../images/homeBcg.jpeg';
import { PrimaryBtn } from '../globals/Buttons';

const Header = () => {
    return (
        <Hero img={homeImg}>
            <Banner greeting="Welcome to" title="Beachwalk resort" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur dicta illum minus! Aperiam cumque, dolorum eos eveniet ex incidunt ipsa officiis omnis, pariatur quam quas quasi tenetur voluptate. Harum?">
                <PrimaryBtn t="1rem">View details</PrimaryBtn>
            </Banner>
        </Hero>
    );
};

export default Header;