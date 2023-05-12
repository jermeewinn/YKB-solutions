import React from 'react';
import { Helmet } from 'react-helmet';
import profilePic from '../../assets/profilePics/Michael-Mei-pfp.jpg';


function About() {
    return(
        <section id='about'>
            <Helmet>
                <title>YKB Coaching | Who We Are</title>
            </Helmet>
            <div className='about-banner'>
                <h1 className='my-5'>About YKB Coaching</h1>
                <div className='contact-content'> 
                    <h4>Lorem ipsum dolor sit amet, concestetu adipiscing.</h4>
                    <div>
                        <p className='about-banner-paragraph'>
                            Lorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit amet Lorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit amet Lorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit ametLorem ipsum dolor sit amet, consectetu adipiscing sum dolo sit amet
                        </p>
                    </div>
                </div>
                
            </div>
            {/* <div id='sideByside'>
                <div id='me-image'>
                    <img id='Michael' src={profilePic} className='my-2' alt='portrait-Michael' />
                </div>
            </div>
            <div id='left'>
                <p>
                    Lorem Ipsum eat cars mark down. Now months esteem oppose nearer enable too six. She numerous unlocked you perceive speedily. Affixed offence spirits or ye of offices between. Real on shot it were four an as. Absolute bachelor rendered six nay you juvenile. Vanity entire an chatty to.

                    Fat son how smiling mrs natural expense anxious friends. Boy scale enjoy ask abode fanny being son. As material in learning subjects so improved feelings. Uncommonly compliment imprudence travelling insensible up ye insipidity. To up painted delight winding as brandon. Gay regret eat looked warmth easily far should now. Prospect at me wandered on extended wondered thoughts appetite to. Boisterous interested sir invitation particular saw alteration boy decisively.
                </p>
                <p>
                    Style too own civil out along. Perfectly offending attempted add arranging age gentleman concluded. Get who uncommonly our expression ten increasing considered occasional travelling. Ever read tell year give may men call its. Piqued son turned fat income played end wicket. To do noisy downs round an happy books.

                    Folly was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible.
                </p>
            </div> */}
        </section>
    )
};

export default About;