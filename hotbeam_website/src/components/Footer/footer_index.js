import './footer_index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
    <>
    <div className="footer">
        <ul className="footer-ul">
            <li className="footer-li">
                <a target="https://www.facebook.com/hotbeamproductions" rel='noreferrer' href='https://www.facebook.com/hotbeamproductions' className="footer-a">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a target="_blank" rel='noreferrer' href='_blank' className="footer-a">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a target="https://www.instagram.com/hotbeamproductions/" rel='noreferrer' href='https://www.instagram.com/hotbeamproductions/' className="footer-a">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
        </ul>
        <div className="footer-span"><FontAwesomeIcon icon={faCopyright} /> 2023 by Hot Beam Productions LLC</div>
    </div>
    </>
)

export default Footer;