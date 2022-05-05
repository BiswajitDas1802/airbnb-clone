import styles from "./Superhost.module.css"
import superhost from "./superhost.png"
import womenhost from"./womenhost.jpg"
import imman from "./imman.jpg"
import khun from "./khun.jpg"

export const Superhost = () =>{
    let price=20;
    return (
        <div>
            <div>
                <div id={styles.smaindiv}>
                    <div id={styles.simage}><img src={superhost} alt="Logo" /></div>
                    <div><button id={styles.sbutton}><b>Become a Host</b></button></div>
                </div>

                <div id={styles.sask}>
                    <h1>Questions about hosting?</h1>
                    <button>Ask a Superhost</button>
                </div>
                <div id={styles.stwodiv}>
                    <div id={styles.sfirstdiv}>
                        <div>
                        <h4 id={styles.sheading4}>Ask a Superhost</h4>
                        <h1 id={styles.sheading1}>Get free one-on-one help from Airbnb’s best Hosts</h1>
                        </div>
                        
                    </div>
                    <div id={styles.sseconddiv}><img src={womenhost} alt="Logo" /></div>
                </div>

                <div id={styles.sthreeflex}>
                    <div id={styles.soneone}>
                        <p id={styles.sheadtip}>Personal tips and guidance</p>
                        <p id ={styles.spara}>We’ve matched you with an experienced Superhost to answer all of your questions, whenever works best for you</p>
                    </div>
                    <div  id={styles.stwotwo}>
                    <p id={styles.sheadtip}>Hands-on help listing your place</p>
                        <p id ={styles.spara}>Your Superhost will help you create your listing and share advice for taking photos, describing your space, and more.</p>
                    </div>
                    <div  id={styles.sthreethree}>
                    <p id={styles.sheadtip}>Prep for yourfirst guest</p>
                        <p id ={styles.spara}>You’ll get the support and direction you need to start welcoming guests and earn your first great review.</p>
                    </div>
                </div>
                <h1 id ={styles.syour}>Your Superhost will be there every step of the way</h1>
                <div id={styles.sokati}>
                {/* <img src={womenhost} alt="Logo" /> */}
                    <div id={styles.soneokati}>
                        <div id={styles.smeet}>
                        <p id={styles.ssstep}>Step 1</p>
                        <p id={styles.ssmeets}>Meet your Superhost</p>
                        <hr></hr>

                        <div id={styles.ssimaan}>
                            <div id ={styles.simaman_image}><img src={imman} alt="Logo" /></div>
                            <div><p><b>Imaan</b></p>
                            <p>Hi there! I love being a Host and am so excited to learn more about you and your place</p></div>
                        </div>
                        </div>
                    </div>
                </div>




                <div id={styles.srendu}>
                {/* <img src={womenhost} alt="Logo" /> */}
                    <div id={styles.soneokati}>
                        <div id={styles.smeet}>
                        <p id={styles.ssstep}>Step 2</p>
                        <p id={styles.ssmeets}>Get answers to any question</p>
                        <hr></hr>

                        <div id={styles.ssimaan}>
                            <div id ={styles.simaman_image}><img src={khun} alt="Logo" /></div>
                            <div><p><b>khun</b></p>
                            <p> What happens if something breaks or gets damaged in my home? I’m a little nervous</p></div>
                        </div>
                        </div>
                    </div>
                </div>


        
                <div id={styles.smoodu}>
                {/* <img src={womenhost} alt="Logo" /> */}
                    <div id={styles.soneokati}>
                        <div id={styles.smeet}>
                        <p id={styles.ssstep}>Step 3</p>
                        <p id={styles.ssmeets}>welcome your first guest</p>
                        <hr></hr>

                        <div id={styles.ssimaan}>
                            <div id ={styles.simaman_image}><img src={imman} alt="Logo" /></div>
                            <div><p><b>Imaan</b></p>
                            <p>Here’s a friendly reminder to leave a welcome note and local treat. Then you’re all set!</p></div>
                        </div>
                        </div>
                    </div>
                </div>

            <div id={styles.sblack}>
                <div id={styles.sblackbox}>
                <h1 id ={styles.sblackheading}>More ways to start hosting</h1>
                <p id ={styles.sblackpara}>No matter where you start, we have tips, videos, and guides for each step.</p>
               <div>
                   <button id={styles.sblackbutton}><b>Learn about hosting</b></button>
                   <button id={styles.sblackbutton2}><b>start to listing to your place</b> </button>
               </div>
               <div id={styles.sflexfour}>
                <div id={styles.sflexfour1}>
                    <p id={styles.sflexx1}>how to describe your place</p>
                </div>
                <div id={styles.sflexfour2}>
                <p id={styles.sflexx1} > how to take great photos</p>
                   </div>
                <div id={styles.sflexfour3}>
                <p id={styles.sflexx1} > how to name your place</p>
                </div>
                <div id={styles.sflexfour4}>
                <p id={styles.sflexx1} > how to set your price</p>
                </div>
               </div>
           

                </div>
            </div>
  
            </div>
            
        </div>
    )
}