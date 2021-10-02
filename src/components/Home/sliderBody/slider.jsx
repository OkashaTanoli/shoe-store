import React, { Component } from "react";
import './body.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from 'react-icons/gr'
import { MdExplore } from 'react-icons/md'
import Image1 from '../../../images/2.png'
import Image2 from '../../../images/1.png'
import Image3 from '../../../images/3.png'
import Image4 from '../../../images/4.png'
import Image5 from '../../../images/5.png'
import { Link } from "react-router-dom";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <GrNext />,
            prevArrow: <GrPrevious />
        };
        return (
            <div className='slider'>
                <Link to='/products' style={{textDecoration:'none',color:'black'}}>

                    <div className='exploreMore'>
                        EXPLORE MORE
                        <MdExplore className='exploreBtn' />
                    </div>
                </Link>
                <Slider {...settings}>
                    <div className='cauroselImgDiv'>
                        <img src={Image1} alt="" />
                    </div>
                    <div className='cauroselImgDiv'>
                        <img src={Image2} alt="" />
                    </div>
                    <div className='cauroselImgDiv'>
                        <img src={Image3} alt="" />
                    </div>
                    <div className='cauroselImgDiv'>
                        <img src={Image4} alt="" />
                    </div>
                    <div className='cauroselImgDiv'>
                        <img src={Image5} alt="" />
                    </div>

                </Slider>
            </div>
        );
    }
}
