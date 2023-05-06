import './services_index.css';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import d1 from '../../assets/dance-1'
// import d2 from '../../assets/dance-2'
// import d3 from '../../assets/dance-3'
// import img1 from '../../assets/serv_img_1.png'
import img2 from '../../assets/serv_img_2.png'
import img3 from '../../assets/serv_img_3v2.jpeg'
import img4 from '../../assets/serv_img_4.jpeg'
import img5 from '../../assets/serv_img_5.jpeg'
import img6 from '../../assets/serv_img_6.jpeg'

const Services = () => (
    <>
    <div className="intro">
        <span className="intro_txt">
            Learn more about what Hot Beam Productions can do for your event
        </span>
    </div>
    <div className="container_img_grid_serv" id="serv_img_grid_override">
        <div className="serv_img_grid">

            <div className="card">
                <img src={d1} alt="" className="serv_card_img" />
                <div className="innerc">
                    <h2 className='serv_card_h'>Weddings</h2>
                    <span className='serv_card_span'>
                        Make your special day unforgettable with our professional wedding DJ services. 
                        Our experienced DJs will keep the energy high and the dance floor packed, 
                        ensuring that your guests have a night to remember.
                    </span>
                </div>
            </div>

            <div className="card hide-on-mobile">
                <div className="innerc">
                    <h2 className='serv_card_h'>
                        Corporate
                        <br/> 
                        Events
                    </h2>
                    <span className='serv_card_span'>
                        Impress your clients and colleagues at your next corporate event with our professional DJ services. 
                        Our experienced DJs will create the perfect ambiance for your event, 
                        whether you're looking for background music or a high-energy dance party. 
                        We'll work with you to tailor our services to your specific needs and ensure that your event is a success.
                    </span>
                </div>
                <img src={img2} alt="" className="serv_card_img" />
            </div>

            {/* this is the html for the mobile version of the middle cards 
            that normally have the text on top and image on bottom. 
            the mobile version has the text on the bottom so it looks 
            normal when all the cards are stacked up.*/}
            <div className="card mobile-card">
                <img src={img2} alt="" className="serv_card_img" />
                <div className="innerc mobile_txt">
                    <h2 className='serv_card_h'>
                        Corporate
                        <br/> 
                        Events
                    </h2>
                    <span className='serv_card_span'>
                        Impress your clients and colleagues at your next corporate event with our professional DJ services. 
                        Our experienced DJs will create the perfect ambiance for your event, 
                        whether you're looking for background music or a high-energy dance party. 
                        We'll work with you to tailor our services to your specific needs and ensure that your event is a success.
                    </span>
                </div>
            </div>

            <div className="card">
                <img src={img3} alt="" className="serv_card_img" />
                <div className="innerc">
                    <h2 className='serv_card_h'>
                        School Dances
                        <br/> 
                        & Proms
                    </h2>
                    <span className='serv_card_span'>
                        Get ready to dance the night away at your school dance or prom with our professional DJ services. 
                        Whether you're looking for a night of high-energy fun or a more elegant affair, 
                        we'll work with you to create the perfect atmosphere for your special event. 
                        Trust us to make your school dance or prom unforgettable.
                    </span>
                </div>
            </div>

            <div className="card">
                <img src={img4} alt="" className="serv_card_img" />
                <div className="innerc">
                    <h2 className='serv_card_h'>
                        Lighting
                        <br/> 
                        Solutions
                    </h2>
                    <span className='serv_card_span'>
                        Elevate your event to the next level with our state-of-the-art lighting and laser solutions. 
                        Our team of experienced professionals will work with you to create a customized lighting and laser package 
                        that will transform your event into a truly unforgettable experience. 
                        Whether you're looking for subtle mood lighting or a high-energy light show, 
                        we have the expertise and equipment to bring your vision to life.
                    </span>
                </div>
            </div>

            <div className="card hide-on-mobile">
                <div className="innerc">
                    <h2 className='serv_card_h'>
                        Private
                        <br/> 
                        Celebrations
                    </h2>
                    <span className='serv_card_span'>
                        Celebrate your special occasion in style with our professional DJ services. 
                        Whether you're hosting a birthday party, anniversary celebration, or any other private event, 
                        our experienced DJs will keep the energy high and the music flowing all night long. 
                        We'll work with you to create a personalized playlist that reflects your taste and preferences, 
                        and ensure that your event is a memorable one.
                    </span>
                </div>
                <img src={img5} alt="" className="serv_card_img" />
            </div>

            {/* this is the html for the mobile version of the middle cards 
            that normally have the text on top and image on bottom. 
            the mobile version has the text on the bottom so it looks 
            normal when all the cards are stacked up.*/}
            <div className="card mobile-card"> 
                <img src={img5} alt="" className="serv_card_img" />
                <div className="innerc mobile_txt">
                    <h2 className='serv_card_h'>
                        Private
                        <br/> 
                        Celebrations
                    </h2>
                    <span className='serv_card_span'>
                        Celebrate your special occasion in style with our professional DJ services. 
                        Whether you're hosting a birthday party, anniversary celebration, or any other private event, 
                        our experienced DJs will keep the energy high and the music flowing all night long. 
                        We'll work with you to create a personalized playlist that reflects your taste and preferences, 
                        and ensure that your event is a memorable one.
                    </span>
                </div>
            </div>

            <div className="card">
                <img src={img6} alt="" className="serv_card_img" />
                <div className=" innerc">
                    <h2 className='serv_card_h'>Bar/Bat Mitzvahs</h2>
                    <span className='serv_card_span'>
                        Make your child's bar/bat mitzvah celebration an unforgettable event with our professional DJ services. 
                        Our experienced DJs know how to keep the party going with the latest hits and classic dance tunes 
                        that will have your guests on their feet all night long. 
                        We understand the importance of this special milestone and will work closely 
                        with you to create a personalized playlist that reflects your child's unique personality and tastes.
                    </span>
                </div>
            </div>

        </div>
    </div>
    <div className="text-center last-div" id="last-btn-override">
        <Button type="button" className="last-btn" href='/contact'>Free Consultation</Button>
    </div>
    </>
)

export default Services;