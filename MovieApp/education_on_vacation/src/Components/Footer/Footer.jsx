import '../Footer/Footer.css'
import {RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { SlLocationPin, SlEnvolope, SlPhone, SlSocialSkype, SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import { TbCopyright} from "react-icons/tb";
import {MdKeyboardArrowUp} from "react-icons/md";


const Footer = () => {

    const iconSize = 20
    const iconColor = "purple"

    const handleBackToTop = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
    return (
        <div>
            <div className="containerFooter">
                
                <div>
                <div className='headerAndLogo'>
                <img src='https://cdn.iconscout.com/icon/premium/png-128-thumb/book-film-3102960-2583445.png?f=webp' alt="Logo of eduva" width={50} height={50} />
                <h3>What is Movie Lab</h3>
                </div>
                
                <p>Movie Lab is site made for education, relaxation and fun. Find all movies that you are interested in, just in one place.</p>
                </div>

                <div>
                    <div className='headerAndLogo'>
                    <img src='https://static.thenounproject.com/png/3264351-200.png' alt='About us' width={50} height={50}/>
                    <h3>About</h3>
                    </div>

                    <p>Movie Lab supports all genres of movies, find yours and enjoy. This site provides detailed information about every movie, everything that you want to know about the movie that you are interested in, can be found on our site.</p>
                    <i><RiDoubleQuotesL size={iconSize}/>Movies are a visualization of all sorts of art.<RiDoubleQuotesR size={iconSize}/></i>
                </div>

                <div>
                    <div className='headerAndLogo'>
                        <img src='https://cdn-icons-png.flaticon.com/512/3095/3095583.png' alt='Contact us' width={50} height={50}/>
                        <h3>Contact us</h3>
                    </div>
                    <p><SlLocationPin size={iconSize} /> 945 Illinois 59, Indiana, United States</p>
                    <p><SlEnvolope size={iconSize}/> movie_lab@yahoo.com</p>
                    <p><SlPhone size={iconSize}/> 91-585-656-658</p>
                    <div className='socialIcons'><SlSocialSkype size={iconSize} color={iconColor}/> <SlSocialTwitter size={iconSize} color={iconColor}/> <SlSocialLinkedin size={iconSize} color={iconColor}/> <SlSocialInstagram size={iconSize} color={iconColor}/> <SlSocialFacebook size={iconSize} color={iconColor}/> </div>
                    
                </div>
                <p className='copyRight'><TbCopyright/>2023 All right reserved</p>
                <span className='topBtn' onClick={handleBackToTop}><MdKeyboardArrowUp size={30}/></span>  

            </div>

        </div>
    )
}

export default Footer