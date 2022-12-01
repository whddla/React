import React, { useState } from "react";
import Slider from "react-slick";
import './Main.css'
import banner1 from '../img/Banner/banner1.png'
import banner2 from '../img/Banner/banner2.png'
import banner3 from '../img/Banner/banner3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "../Data/Data";
import Board from "../components/Main/Board";

const Main = () => {
    const [icons] = useState(Icon);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <React.Fragment>
        <div className='Container'>
            <div className="banner">
                <Slider {...settings}>
                    <div className='banner-img'>
                        <img src={banner1} alt="광고1"/>
                    </div>
                    <div className='banner-img'>
                        <img src={banner2} alt="광고2"/>
                    </div>
                    <div className='banner-img'>
                        <img src={banner3} alt="광고3"/>
                    </div>
                </Slider>
            </div>
            <div className="Icon-wrap">
                {
                    icons.map(function( icon, i ){
                        return (
                            <div className="Icon" key={i}>
                                <a href={icon.href}>{ icon.cate }</a>
                            </div>
                        )
                    })
                }
            </div>
            <Board/>
        </div>
    </React.Fragment>
  )
}

export default Main



