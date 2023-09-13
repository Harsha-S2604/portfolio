import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactsList = ({ contacts }) => {
    const { socials } = contacts
    return (
        <div className="socials">
            <ul>
                {
                    socials.map((social, index) => {
                        const { link, image } = social
                        return (
                            <li>
                                <a href={link}>
                                    <span class="ico-circle">
                                        <i class="ion-social-linkedin"></i>
                                    </span>
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
            
        </div>
    )
}

export default ContactsList