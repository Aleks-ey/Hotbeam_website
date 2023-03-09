import './home_index.css';
import React from 'react';

import InstaFeeds from '../InstaFeeds/InstaFeeds';

import movie from '../../assets/HB_INTRO.mp4';
import gif from '../../assets/HB_INTRO.gif';
import Button from 'react-bootstrap/Button';
import img1 from '../../assets/serv_img_1.png'
import img2 from '../../assets/serv_img_2.png'
import img3 from '../../assets/serv_img_3v2.jpeg'
import img4 from '../../assets/serv_img_4.jpeg'
import img5 from '../../assets/serv_img_5.jpeg'
import img6 from '../../assets/serv_img_6.jpeg'
import after_grid_banner from '../../assets/IMG_1529.jpeg'

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>

const Home = () => {
    // javascript that checks if the user is on safari
    const isSafari = () => {
        const ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') !== -1) {
            if (ua.indexOf('chrome') > -1) {
                return false;
            } else {
                return true;
            }
        }
    }

    return(
    <>
    {/* ------------ video and overlay text that should be directly below topbar ------------ */}
    {/* check if user is on safari, if so, display a gif, otherwise display video */}
    {isSafari() ? (
        <div className='home_gif_div'>
            <img src={gif} alt="" className="gif" />
            <div className="consult">
                <div className="consult_h1">Keep On Dancing</div>
                <div className="consult_h2">Let's Make it a Night to Remember</div>
                <Button type="button" id="consult_btn" href='/contact'>Free Consultation</Button>
            </div>
        </div>
    ) : (
        <div align="center" className="embeded-responsive home_video_div">
            <video autoPlay muted loop playsInline width="100%" height="" background-color='white'>
                <source src={movie} type="video/mp4"/>
            </video>
            <div className="consult">
                <div className="consult_h1">Keep On Dancing</div>
                <div className="consult_h2">Let's Make it a Night to Remember</div>
                <Button type="button" id="consult_btn" href='/contact'>Free Consultation</Button>
            </div>
        </div>
    )}
    {/* ----------------------------------------------------------------------------------------------- */}

    <div className='home_serv_intro'>
        <h1>Services</h1>
    </div>

    {/* ------------ Grid that holds cards that consist of images and buttons that should be directly below video ------------ */}
    <div className="slider">
        <div className="slides">
            <h1></h1>
            <div className="slide">
                <img src={img2} alt="" className="slider_img" />
                <div className="home_card_txt2" />
            </div>
            <div className="slide">
                <img src={img3} alt="" className="slider_img" />
                <div className="home_card_txt2" />
            </div>
            <div className="slide">
                <img src={img4} alt="" className="slider_img" />
                <div className="home_card_txt2" />
            </div>
            <div className="slide">
                <img src={img5} alt="" className="slider_img" />
                <div className="home_card_txt2" />
            </div>
            <div className="slide">
                <img src={img6} alt="" className="slider_img" />
                <div className="home_card_txt2" />
            </div>
        </div>
    </div>


    <div className="container_img_grid_home" id="home_img_grid_override">
        <div className="home_img_grid">
            <div className="card home_img_card">
                <img src={img4} alt="" className="home_card_img" />
                {/* <div className="home_card_txt2">
                    <h2>School Dances</h2>
                    <h2> & Proms</h2>
                    <Button type="button" className="card-btn" href="/services">Learn More</Button>
                </div> */}
            </div>
            <div className="card home_card_txt">
                <h2>School Dances</h2>
                <h2> & Proms</h2>
                <Button type="button" className="card-btn" href="/services">Learn More</Button>
            </div>
            <div className="card home_img_card">
                <img src={img2} alt="" className="home_card_img" />
            </div>
            {/* ------------------------------ */}
            <div className="card home_card_txt">
                <h2>Weddings</h2>
                <Button type="button" className="card-btn" href="/services">Learn More</Button>
            </div>
            <div className="card home_img_card">
                <img src={img3} alt="" className="home_card_img" />
            </div>
            <div className="card home_card_txt">
                <h2>Corporate</h2>
                <h2>Events</h2>
                <Button type="button" className="card-btn" href="/services">Learn More</Button>
            </div>
        </div>
    </div>
    {/* ----------------------------------------------------------------------------------------------- */}

    <div className="after_grid_img_div">
        <img src={after_grid_banner} alt="" className="after_grid_img" />
    </div>

    {/* ------------ mission statement and button that should be below the standalone image after the image grid ------------ */}
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
    {/* ----------------------------------------------------------------------------------------------- */}

    {/* ------ Grid that holds cards that contain profile images and reviews pulled from google that is below mission statement ------ */}
    <div className="review_div">
        <div className="review_intro">

        </div>
        <div className="container_review_grid" id="review_grid_override">
            <div className="review_grid">
                <div className="card review_card">
                    <img src={img1} alt="" className="review_card_img" />
                    <span className="review_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3>John Doe</h3>
                </div>
                <div className="card review_card">
                    <img src={img2} alt="" className="review_card_img" />
                    <span className="review_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3>Jane Doe</h3>
                </div>
                <div className="card review_card">
                    <img src={img3} alt="" className="review_card_img" />
                    <span className="review_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3>John Doe 2</h3>
                </div>
            </div>
        </div>
    </div>
    {/* ----------------------------------------------------------------------------------------------- */}

    <div className="instagram_feed">
        <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
    </div>
    </>
    )
}

export default Home;