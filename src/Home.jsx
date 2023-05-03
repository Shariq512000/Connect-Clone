import FirstPic from "./images/images2/thumbnail-connectivity.webp"
import SecondPic from "./images/images2/thumbnail-dedicated.webp"
import ThirdPic from "./images/images2/thumbnail-residential.webp"
import ForthPic from "./images/images2/thumbnail-solutions.webp"
import ProfilePic from "./images/images3/img-about.webp"
import Scroller from "./scroller";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SettingsIcon from '@mui/icons-material/Settings';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PicLogo from "./images/connect-logo-original.png"
import "./Home.css";
import Footer from "./footer"
function Home() {
    return (
        <div>
            <Scroller />
            <div className="baar">
                <p>All of us at Connect Communications understand that we will have to work harder and smarter every day to keep you as our customer.</p>
            </div>
            <div className="gall">
                <div className="ppic">
                    <img src={ThirdPic} alt="" />
                    <p style={{ marginLeft: "20px" }}>Residential Broadband Internet</p>
                    <p style={{ marginLeft: "20px" }}>High Speed Internet up to 100 Mbps..</p>
                </div>
                <div className="ppic">
                    <img src={SecondPic} alt="" />
                    <p style={{ marginLeft: "20px" }}>Dedicated Internet Access</p>
                    <p style={{ marginLeft: "20px" }}>Fast and Affordable for Business.</p>
                </div>
                <div className="ppic">
                    <img src={FirstPic} alt="" />
                    <p style={{ marginLeft: "20px" }}>Data Connectivity</p>
                    <p style={{ marginLeft: "20px" }}>Build your own Private Connection.</p>
                </div>
                <div className="ppic">
                    <img src={ForthPic} alt="" />
                    <p style={{ marginLeft: "20px" }}>Business Solutions</p>
                    <p style={{ marginLeft: "20px" }}>Virtual LAN, Optical Fibre Dark Core etc...</p>
                </div>
            </div>
            <div className="abt">
                <div className="aText">
                    <h1 style={{color:"black"}}>About <span style={{color:"#FF8800"}}> Connect </span></h1>
                    <p>Connect Communications was established in 2005 and we are the largest Internet & Data Service Provider in Karachi. We offer various services to the corporate and consumer sectors.</p>
                    <p>Connect Communications is not only a name or a company. It is a passion, a desire to grow, serve and excel. It's success story is carved by untiring hard work, dedication and adherence of its team members to its cause. For our clients Connect Communications is a name which stands for its commitment, customer care, integrity, product knowledge, trouble free services and competitive prices.</p>
                </div>
                <div className="picc">
                    <img src={ProfilePic} alt="" />
                </div>
            </div>
            <div className="why">
                <div>
                    <h1 style={{color:"black" , fontWeight:"bold"}}>Why <span style={{color:"white"}}>Connect</span></h1>
                </div>
                <div className="why2">
                    <div>
                        <div className="why3">
                            <div className="logoo2"><ElectricBoltIcon/></div>
                            <div style={{maxWidth:"300px"}}>
                                <h3>High Speed Internet</h3>
                                <p>We offer high-speed internet plans to fulfill all your online needs for Household, Corporate and Enterprise customers.</p>
                            </div>
                        </div>
                        <div className="why3">
                            <div className="logoo2"><SettingsIcon/></div>
                            <div style={{maxWidth:"300px"}}>
                                <h3>Customized Solutions</h3>
                                <p>We provide customized solutions that are just according to your requirements and needs.</p>
                            </div>
                        </div>
                        <div className="why3">
                            <div className="logoo2"><WifiCalling3Icon/></div>
                            <div style={{maxWidth:"300px"}}>
                                <h3>24x7 Customer Support</h3>
                                <p>Our technical experts and professionals provide support via email and telephonic calls 24 hours a day, 7 days a week, 365 days a year.</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="why3">
                            <div className="logoo2"><FolderSpecialIcon/></div>
                            <div style={{maxWidth:"300px"}}>
                                <h3>Simple Handoff</h3>
                                <p>No special wiring. No disruptions. No delays. Just a simple Ethernet / Fiber-Optic handoff and nothing more.</p>
                            </div>
                        </div>
                        <div className="why3">
                            <div className="logoo2"><ThumbUpIcon/></div>
                            <div style={{maxWidth:"300px"}}>
                                <h3>Reliable Connectivity</h3>
                                <p>We provide the most reliable and redundant network infrastructure to assure service level.</p>
                            </div>
                        </div>
                        <div className="why3">
                            <div className="logoo2"><InsertDriveFileIcon/></div>
                            <div style={{maxWidth:"300px"}}>
                                <h3>Comprehensive Reporting</h3>
                                <p>We make comprehensive reports after every diagnosis and resolving of complain, and it is presented to customer on their request.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className="footer">
                <div>
                    <img src={PicLogo} alt="" />
                    <p>IP Address : 118.103.233.78</p>
                    <p>Sat, Apr 29, 2023 @ 16:57PKT</p>
                </div>
                <div>
                    <p style={{color:"#FF8800" , marginLeft:"15px" , fontSize:"20px" , fontWeight:"bolder" }}>Company</p>
                    <ul>
                        <li>About Us</li>
                        <li>Support</li>
                        <li>Frequently Asked Questions</li>
                        <li>Career</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p style={{color:"#FF8800" , marginLeft:"15px" , fontSize:"20px" , fontWeight:"bolder" }}>Services</p>
                    <ul>
                        <li>Residential Broadband</li>
                        <li>Dedicated Internet Access</li>
                        <li>Data Connectivity</li>
                        <li>Business Solutions</li>
                        <li>IPv6 Configuration</li>
                    </ul>
                </div>
                <div>
                    <p style={{color:"#FF8800" , marginLeft:"15px" , fontSize:"20px" , fontWeight:"bolder" }}>Contact Us</p>
                    <li>86, Block 7 & 8, J.C.H.S., Shaheed-e-Millat Road Karachi, Pakistan</li>
                    <li>+9221-111-000-638</li>
                    <li>Email us for more info</li>
                </div>
            </div> */}
            <Footer/>
        </div>
    )
}

export default Home;