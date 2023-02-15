import './services_index.css';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import d1 from '../../assets/dance-1'
import d2 from '../../assets/dance-2'
import d3 from '../../assets/dance-3'

const Services = () => (
    <>
    <div className="intro">
        <span className="intro_txt">We Specialize in Love, Sorry That Was Cringe</span>
    </div>
    <div className="container_img_grid_serv" id="serv_img_grid_override">
        <div className="serv_img_grid">

            <div className="card">
                <img src={d1} alt="" className="card__img" />
            </div>
            <div className="card">
                <h2>School Dances</h2>
                <h2> & Proms</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div className="card">
                <img src={d2} alt="" className="card__img" />
            </div>

            <div className="card">
                <h2>Weddings</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div className="card">
                <img src={d3} alt="" className="card__img" />
            </div>
            <div className="card">
                <h2>Corporate</h2>
                <h2>Events</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>

            <div className="card">
                <img src={d1} alt="" className="card__img" />
            </div>
            <div className="card">
                <h2>Private</h2>
                <h2>Celebrations</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div className="card">
                <img src={d2} alt="" className="card__img" />
            </div>

            <div className="card">
                <h2>Lighting</h2>
                <h2>Solutions</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <div className="card">
                <img src={d3} alt="" className="card__img" />
            </div>
            <div className="card">
                <h2>Bar/Bat Mitzvahs</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>

        </div>
    </div>
    <div className="text-center last-div" id="last-btn-override">
        <Button type="button" className="last-btn">Free Consultation</Button>
    </div>
    </>
)

export default Services;