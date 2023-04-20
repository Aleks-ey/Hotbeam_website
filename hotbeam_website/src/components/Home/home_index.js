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
// import drip from '../../assets/drip.png'
import after_grid_banner from '../../assets/IMG_1529.jpeg'
import Logo from '../../assets/hb_logo.png';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>

function LaserBeam({ left, top, angle }) {
    return <div className="laser-beam" style={{ left, top, transform: `rotate(${angle}deg)` }}></div>;
}

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

    const [lasers, setLasers] = React.useState([
        { left: '10%', top: '10%', angle: 45 },
        { left: '30%', top: '20%', angle: -30 },
        { left: '50%', top: '30%', angle: 60 },
    ]);
    
    React.useEffect(() => {
        const intervalId = setInterval(() => {
          setLasers(lasers => lasers.map(laser => {
            const newTop = `${Math.floor(Math.random() * 100)}%`;
            const newLeft = `${Math.floor(Math.random() * 100)}%`;
            const newAngle = Math.floor(Math.random() * 360);
            return {
              left: newLeft,
              top: newTop,
              angle: newAngle,
            };
          }));
        }, Math.floor(Math.random() * 5000) + 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    
    return(
    <div className='home'>
    {/* ------------ video and overlay text that should be directly below topbar ------------ */}
    {/* check if user is on safari, if so, display a gif, otherwise display video */}
    {isSafari() ? (
        <div className='home_gif_div'>
            <img src={gif} alt="" className="gif" />
            <div className="consult">
                <div className="consult_h1"><h1>Keep On Dancing</h1></div>
                <div className="consult_h2"><h2>Set the stage with our DJ and lighting solutions</h2></div>
                <Button type="button" id="consult_btn" href='/contact'>Free Consultation</Button>
            </div>
            <div className="video_waves">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    ) : (
        <div align="center" className="embeded-responsive home_video_div">
            <video autoPlay muted loop playsInline width="100%" height="" background-color='white'>
                <source src={movie} type="video/mp4"/>
            </video>
            <div className="consult">
                <div className="consult_h1"><h1>Keep On Dancing</h1></div>
                <div className="consult_h2"><h2>Set the stage with our DJ and lighting solutions</h2></div>
                <Button type="button" id="consult_btn" href='/contact'>Free Consultation</Button>
            </div>
            <div className="video_waves">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )}

    {/* <img src={drip} alt="" className="drip" /> */}

    <div>
      <div className="laser-beam" style={{ left: '30%' }}></div>
      <div className="laser-beam" style={{ left: '40%' }}></div>
      <div className="laser-beam" style={{ left: '70%' }}></div>
    </div>
    <div>
      {lasers.map((laser, index) => <LaserBeam key={index} left={laser.left} top={laser.top} angle={laser.angle} />)}
    </div>

    {/* ------------ Grid that holds cards that consist of images and buttons that should be directly below video ------------ */}
    
    {/* <div className="waves1">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
    </div> */}
    <div className="between_waves_1_2">
        <div className="home_serv_img1_div">
            <div className='home_mobile_txt_div'>
                <span>Let our beats move your feet!</span>
                <span>DJ services for any occasion</span>
                {/* <span>Let our </span>
                <span className='txt_grad'>beats</span>
                <span>move your feet! DJ services for any occasions </span> */}
            </div>
            <img className='home_serv_img_left' src={img6} alt="" />
            <div className='home_serv_text_right'>
                <span>Let our beats move your feet! DJ services for any occasion</span>
            </div>
        </div>
        <div className="home_serv_img2_div">
            <div className='home_mobile_txt_div'>
                <span>Need something a little more flashy?</span>
                <span>We can combine our DJ performance with a stunning laser light show</span>
            </div>
            <div className='home_serv_text_left'>
                <span>Need something a little more flashy? We can combine our DJ performance with a stunning laser light show</span>
            </div>
            <img className='home_serv_img_right' src={img5} alt="" />
        </div>
        <div className="home_serv_img3_div">
            <div className='home_mobile_txt_div'>
                <span>Already have the music covered?</span>
                <span>Take your event to the next level with our lighting solutions </span>
            </div>
            <img className='home_serv_img_left' src={img4} alt="" />
            <div className='home_serv_text_right'>
                <span>Already have the music covered? Take your event to the next level with our lighting solutions </span>
            </div>
        </div>
        <div className='home_serv_btn_div'>
            <Button type="button" className="home_serv_btn" id="home_serv_btn" href="/services">See More</Button>
        </div>
    </div>
    <div className="waves2">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
    </div>

    {/* <div className="container_img_grid_home" id="home_img_grid_override">
        <div className="home_img_grid">
            <div className="card home_img_card">
                <img src={img4} alt="" className="home_card_img" /> */}
                {/* <div className="home_card_txt2">
                    <h2>School Dances</h2>
                    <h2> & Proms</h2>
                    <Button type="button" className="card-btn" href="/services">Learn More</Button>
                </div> */}
            {/* </div>
            <div className="card home_card_txt">
                <h2>School Dances</h2>
                <h2> & Proms</h2>
                <Button type="button" className="card-btn" href="/services">Learn More</Button>
            </div>
            <div className="card home_img_card">
                <img src={img2} alt="" className="home_card_img" />
            </div> */}
            {/* ------------------------------ */}
            {/* <div className="card home_card_txt">
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
    </div> */}
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
        <Button type="button" className="card-btn" id="home_mission_btn" href="/mission">Read More</Button>
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

    <div className="waves3">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
    </div>

    <div className="instagram_header_div">
        <div className='instagram_header'>
            <div className="instagram_profile_pic_wrapper">
                <div className="instagram_profile_pic">
                    <img src={Logo} alt="Profile"/>
                </div>
            </div>
            <div className="instagram_profile_info">
                <h1>hotbeamproductions</h1>
                <div className="counts">
                    <div className="count"><span>5</span> posts</div>
                    <div className="count"><span>60</span> followers</div>
                    <div className="count"><span>21</span> following</div>
                </div>
            </div>
            <Button type="button" id="instagram_follow_btn" href="/services">Follow</Button>
        </div>
    </div>

    <div className="instagram_feed">
        <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
    </div>
    </div>
    )
}

export default Home;