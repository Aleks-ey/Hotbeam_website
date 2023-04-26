import './meet_index.css'
import Daniel from '../../assets/DanielHeadshot.jpg'
import Beau from '../../assets/BeauHeadshot.jpg'

const MeetTheDJs = () => (
    <>
    <div className="meet_intro">
        <h1>Worry Less, Dance More</h1>
        <div className="meet_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
    </div>
    <div className="container_dj_grid" id="dj_grid_override">
            <div className="dj_grid">
                <div className="card">
                    <img src={Daniel} alt="" className="dj_card_img"/>
                    <span className="dj_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3 className='dm'>Daniel Mankin</h3>
                </div>
                <div className="card">
                    <img src={Beau} alt="" className="dj_card_img" />
                    <span className="dj_span">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                    <h3 className='bd'>Beau Davis</h3>
                </div>
            </div>
        </div>
    </>
)

export default MeetTheDJs;