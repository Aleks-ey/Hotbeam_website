import './home_index.css';
import movie from '../../assets/web_layout.mov';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import d1 from '../../assets/dance-1'
import d2 from '../../assets/dance-2'
import d3 from '../../assets/dance-3'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>

const Home = () => (
    <>
    <div align="center" class="embeded-responsive">
        <video controls autoPlay muted loop class="embeded-responsive-item" width="100%" height="">
            <source src={movie} type="video/mp4"/>
        </video>
    </div>
    <div className="consult">
        <div className="consult-h1">Keep On Dancing</div>
        <div className="consult-h2">Let's Make it a Night to Remember</div>
        <Button type="button" className="consult-btn">Free Consultation</Button>
    </div>
    <div class="container_img_grid_home" id="home_img_grid_override">
        <div class="home_img_grid">
            <div class="card">
                <img src={d1} alt="" class="card_img" />
            </div>
            <div class="card">
                <h2>School Dances</h2>
                <h2> & Proms</h2>
                <Button type="button" className="card-btn" href="/services">Learn More</Button>
            </div>
            <div class="card">
                <img src={d2} alt="" class="card_img" />
            </div>
            {/* ------------------------------ */}
            <div class="card">
                <h2>Weddings</h2>
                <Button type="button" className="card-btn" href="/services">Learn More</Button>
            </div>
            <div class="card">
                <img src={d3} alt="" class="card_img" />
            </div>
            <div class="card">
                <h2>Corporate</h2>
                <h2>Events</h2>
                <Button type="button" className="card-btn" href="/services">Learn More</Button>
            </div>
        </div>
    </div>
    <div class="after_grid_img_div">
        <img src={d1} alt="" class="after_grid_img" />
    </div>
    <div class="mission_div">
        <h1>Keeping You Free While The</h1>
        <h1>Dance Floor is Busy</h1>
        <div class="mission_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <Button type="button" className="card-btn" href="/services">Read More</Button>
    </div>
    <div class="review_div">
        <div class="review_intro">

        </div>
        <div class="container_review_grid" id="review_grid_override">
            <div class="review_grid">
                <div class="card">
                    <img src="" alt="" class="card_img" />
                    <span class="review_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3>Bobby McBobster</h3>
                </div>
                <div class="card">
                    <img src="" alt="" class="card_img" />
                    <span class="review_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3>Spongebob</h3><h3>Squarepants</h3>
                </div>
                <div class="card">
                    <img src="" alt="" class="card_img" />
                    <span class="review_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3>John</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="instagram_feed">
        instagram feed will go here
    </div>
    </>
)

export default Home;