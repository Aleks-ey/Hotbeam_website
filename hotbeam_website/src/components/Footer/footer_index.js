import './footer_index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
    <>
    <div class="footer">
        <ul class="footer-ul">
            <li class="footer-li">
                <a target="_blank" rel='noreferrer' href='_blank' class="footer-a">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a target="_blank" rel='noreferrer' href='_blank' class="footer-a">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a target="_blank" rel='noreferrer' href='_blank' class="footer-a">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
        </ul>
        <div class="footer-span"><FontAwesomeIcon icon={faCopyright} /> 2023 by Hot Beam Productions LLC</div>
    </div>
    </>
)

export default Footer;