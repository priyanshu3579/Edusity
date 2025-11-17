import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>

        <div id="about-left">
            <img src={about_img} alt="" id='about-img' />
            <img onClick={()=>{setPlayState(true)}} src={play_icon} alt="" id='about-icon' />
        </div>

        <div id="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>

    </div>
  )
}

export default About