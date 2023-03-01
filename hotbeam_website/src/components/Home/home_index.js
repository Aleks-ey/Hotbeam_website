import './home_index.css';
import React, { useState, useEffect, useRef } from 'react';
import movie from '../../assets/HB_INTRO2.mp4';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import d1 from '../../assets/dance-1'
import d2 from '../../assets/dance-2'
import d3 from '../../assets/dance-3'
import after_grid_banner from '../../assets/IMG_1529.jpeg'
import InstaFeeds from '../InstaFeeds/InstaFeeds';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>

const Home = () => {
    // javascript to make video play on mobile with react
    // const [play, setPlay] = useState(false);
    // useEffect(() => {
    //     setPlay(true);
    // }, []);

    // javascript to make video play on mobile with react syncrounously
    // const [play, setPlay] = useState(false);
    // const videoRef = useRef(null);
    // useEffect(() => {
    //     if (videoRef.current) {
    //         videoRef.current.play();
    //         setPlay(true);
    //     }
    // }, [videoRef]);

    return(
    <>
    <div align="center" className="embeded-responsive">
        <video autoPlay={true} 
            muted={true} 
            loop={true} 
            playsInline={true} 
            className="embeded-responsive-item" width="100%" height="" background-color='white'>
            <source src={movie} type="video/mp4"/>
            <source src={movie} type="video/webm"/>
        </video>
    </div>
    <div className="consult">
        <div className="consult-h1">Keep On Dancing</div>
        <div className="consult-h2">Let's Make it a Night to Remember</div>
        <Button type="button" id="consult-btn" href='/contact'>Free Consultation</Button>
    </div>
    <div className="container_img_grid_home" id="home_img_grid_override">
        <div className="home_img_grid">
            <div className="card home_img_card">
                <img src={d1} alt="" className="home_card_img" />
            </div>
            <div className="card home_card_txt">
                <h2>School Dances</h2>
                <h2> & Proms</h2>
                <Button type="button" className="card-btn" href="/services">Learn More</Button>
            </div>
            <div className="card home_img_card">
                <img src={d2} alt="" className="home_card_img" />
            </div>
            {/* ------------------------------ */}
            <div className="card home_card_txt">
                <h2>Weddings</h2>
                <Button type="button" className="card-btn" href="/services">Learn More</Button>
            </div>
            <div className="card home_img_card">
                <img src={d3} alt="" className="home_card_img" />
            </div>
            <div className="card home_card_txt">
                <h2>Corporate</h2>
                <h2>Events</h2>
                <Button type="button" className="card-btn" href="/services">Learn More</Button>
            </div>
        </div>
    </div>
    <div className="after_grid_img_div">
        <img src={after_grid_banner} alt="" className="after_grid_img" />
    </div>
    <div className="home_mission_div">
        <h1>Keeping You Free While The</h1>
        <h1>Dance Floor is Busy</h1>
        <div className="home_mission_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <Button type="button" className="card-btn" id="home_mission_btn" href="/services">Read More</Button>
    </div>
    <div className="review_div">
        <div className="review_intro">

        </div>
        <div className="container_review_grid" id="review_grid_override">
            <div className="review_grid">
                <div className="card review_card">
                    <img src={d1} alt="" className="review_card_img" />
                    <span className="review_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3>John Doe</h3>
                </div>
                <div className="card review_card">
                    <img src={d2} alt="" className="review_card_img" />
                    <span className="review_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3>Jane Doe</h3>
                </div>
                <div className="card review_card">
                    <img src={d3} alt="" className="review_card_img" />
                    <span className="review_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3>John Doe 2</h3>
                </div>
            </div>
        </div>
    </div>
    <div className="instagram_feed">
        <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
    </div>
    </>
    )
}

export default Home;