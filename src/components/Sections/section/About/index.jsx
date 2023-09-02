import Info from './Info'
import ProfileImage from './ProfileImage'
import './about.css'

const About = ({ data }) => {
    const { info } = data.sectionValue
    return (
        <div id="about" className='container'>
            <div className='about-flex'>
                <Info data={info} />
                <ProfileImage />
            </div>
        </div>
    )
}

export default About