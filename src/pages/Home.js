import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox'
import Bgphoto from '../components/Bgphoto'
import Cards from '../components/Cards'

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <Bgphoto /> 
                <Cards />
            </div>
        );
    }
}

export default Home;
