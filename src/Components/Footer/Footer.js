import React from "react";
import classes from "./Footer.module.css"
import logo1 from "../../Assets/ImageAssets/Footer/logooo-01.png"
import facebook from "../../Assets/ImageAssets/Footer/facebook.png"
import twitter from "../../Assets/ImageAssets/Footer/twitter.png"
import instagram from "../../Assets/ImageAssets/Footer/instagram.png"
import linkedin from "../../Assets/ImageAssets/Footer/linkedin.png"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return (
        <>
            <div className={classes.footerDiv}>
                <div className={classes.logoImageDiv}><HashLink to="/#home"><img className={classes.logoImage} src={logo1} alt="" /></HashLink></div>
                <div className={classes.listOfLinksMobile}>
                    <div className={classes.listOfLinks}>
                        <HashLink to="/#home">Home</HashLink>
                        <div className={classes.spaceBetweenLinks}></div>
                        <Link  to='/about'>About</Link>
                        <div className={classes.spaceBetweenLinks}></div>
                        <HashLink to="/#services">Our Services</HashLink>
                        <div className={classes.spaceBetweenLinks}></div>
                        <HashLink to="/#approach">Our Approach</HashLink>
                        <div className={classes.spaceBetweenLinks}></div>
                        <HashLink to="/#clients">Our Clients</HashLink>
                        <div className={classes.spaceBetweenLinks}></div>
                        <Link to="InfluencerRegistration"> Influencer Registration</Link>
                        <div className={classes.spaceBetweenLinks}></div>
                        <HashLink to="/#contactUs">Contact Us</HashLink>
                        <div className={classes.spaceBetweenLinks}></div>
                        <Link to="teamPrakriya">Team Prakriya</Link>
                    </div>
                    <div className={classes.listOfOtherLinks}>
                        <HashLink to="/#career">Career</HashLink>
                        <div className={classes.spaceBetweenLinks}></div>

                        <p >Send us your resume</p>
                        <p>prakriyadigital@gmail.com</p>
                    </div>
                </div>
                <div className={classes.listOfSocialMedia}>
                    <div className={classes.socialMediaIcons} ><a href="https://www.facebook.com/prakriyadigital" target="_blank" rel="noopener noreferrer"><img src={facebook} alt=""  /></a></div>
                    <div className={classes.socialMediaIcons}><a href="https://twitter.com/DigitalPrakriya?t=Tt2GOZAC1MAWjVKaXaUuLw&s=08" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a></div>
                    <div className={classes.socialMediaIcons}><a href="https://www.instagram.com/prakriyadigital/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt=""/></a></div>
                    <div className={classes.socialMediaIcons}><a href="https://www.linkedin.com/company/prakriya/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a></div>
                </div>
                
            </div>
            <div className={classes.copyRight}>© 2022 Prakriya Digital</div>



            
        </>
    )

}
export default Footer