import Styles from "./Footer.module.css";

export const Footer =()=>{
    return (
        <div className={Styles.footer_box}>
            <div className={Styles.footer_container}>
                <div className={Styles.upper_part}>
                    <div className={Styles.footer_categories}>
                        <p className={Styles.category_title}>Support</p>
                        <div className={Styles.category_details}>
                            <p>Help Centre</p>
                            <p>Safety information</p>
                            <p>Cancellation options</p>
                            <p>Our COVID-19 Response</p>
                            <p>Supporting people with disabilities</p>
                            <p>Report a neighbourhood concern</p>
                        </div>
                    </div>
                    <div className={Styles.footer_categories}>
                        <p className={Styles.category_title}>Community</p>
                        <div className={Styles.category_details}>
                            <p>Airbnb.org: disaster relief housing</p>
                            <p>Support Afghan refugees</p>
                            <p>Combating discrimination</p>
                        </div>
                    </div>
                
                    <div className={Styles.footer_categories}>
                        <p className={Styles.category_title}>Hosting</p>
                        <div className={Styles.category_details}>
                            <p>Try hosting</p>
                            <p>AirCover: protection for Hosts</p>
                            <p>Explore hosting resources</p>
                            <p>Visit our community forum</p>
                            <p>How to host responsibly</p>
                        </div>
                    </div>
            
                    <div className={Styles.footer_categories}>
                        <p className={Styles.category_title}>About</p>
                        <div className={Styles.category_details}>
                            <p>Newsroom</p>
                            <p>Learn about new features</p>
                            <p>Letter from our founders</p>
                            <p>Careers</p>
                            <p>Investors</p>
                            <p>Airbnb Luxe</p>
                        </div>
                    </div>
                </div>

                <div className={Styles.down_part}>
                    <div className={Styles.down_footer_left}>
                        <p>© 2022 Airbnb-clone, Made by @Biswajit @Alok @Ketan </p>
                    </div>
                    <div className={Styles.down_footer_right}>
                        <img className={Styles.globe_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGf81kUp7hq09sTFf6iCEl5CZ_oJR8Xw2zA&usqp=CAU" width="16px" height="16px"></img>
                        <p style={{textDecoration:"underline",fontWeight:"500",marginTop:"10px"}}>English (IN)</p>
                        <p style={{textDecoration:"underline",fontWeight:"500",marginTop:"10px"}}>₹ INR</p>
                        <a href="https://www.facebook.com/airbnb/"><img className={Styles.footer_logo} src="https://www.pngitem.com/pimgs/m/11-117236_transparent-facebook-icon-clipart-black-icon-fb-png.png" width="10px" height="20px"></img></a>
                        <a href="https://twitter.com/Airbnb"><img className={Styles.footer_logo} src="data:image/png;base64,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"  width="18px" height="18px"></img></a>
                        <a href="https://www.instagram.com/airbnb/"><img style={{marginRight:"-6%"}} className={Styles.footer_logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVN4VYE43kMv7wZE7o1tA-FvNpMEaMtJGJ6g&usqp=CAU" width="20px" height="20px"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )}
