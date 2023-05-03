
import PicLogo from "./images/connect-logo-original.png";
import "./footer.css";

function Footer() {
    return (
        <div className="main">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div>
                                <img src={PicLogo} style={{width: "180px"}} alt="" />
                                <p>IP Address : 118.103.233.78</p>
                                <p>Sat, Apr 29, 2023 @ 16:57PKT</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <p style={{ color: "#FF8800", marginLeft: "20px", fontSize: "20px", fontWeight: "bolder" }}>Company</p>
                                <ul className="lst">
                                    <li>About Us</li>
                                    <li>Support</li>
                                    <li>Frequently Asked Questions</li>
                                    <li>Career</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <p style={{ color: "#FF8800", marginLeft: "20px", fontSize: "20px", fontWeight: "bolder" }}>Services</p>
                                <ul className="lst">
                                    <li>Residential Broadband</li>
                                    <li>Dedicated Internet Access</li>
                                    <li>Data Connectivity</li>
                                    <li>Business Solutions</li>
                                    <li>IPv6 Configuration</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <p style={{ color: "#FF8800", marginLeft: "20px", fontSize: "20px", fontWeight: "bolder" }}>Contact Us</p>
                                <ul className="lst">
                                    <li className="maar">86, Block 7 & 8, J.C.H.S., Shaheed-e-Millat Road Karachi, Pakistan</li>
                                    <li className="maar">+9221-111-000-638</li>
                                    <li className="maar">Email us for more info</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Footer;