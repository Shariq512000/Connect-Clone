import FirstImg from "./images/img-slider-hardwork-mini.webp"
import SecondImg from "./images/img-slider-infrastructure-mini.webp"
import ThirdImg from "./images/img-slider-speed-mini.webp"
import ForthImg from "./images/img-slider-techonology-mini.webp"
import "./scroller.css"

function Scroller() {
    return (
        <div className="container-fuild">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={FirstImg} class="d-block w-100" style={{ height: "500px" }} alt="..." />
                        <div class="carousel-caption start-5 imageText">
                            <h1 style={{ color: "#FF8800", fontWeight: "bold", fontSize: "60px", left: "20px" }}>Hard Working <br /> Team</h1>
                            <p style={{ fontSize: "20px", wordSpacing: "1px" }}>We are passionate people with precise domain knowledge, but most of all we are one unit, one team and one family who works together to listen, support and provide solutions to your problems.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={SecondImg} class="d-block w-100" style={{ height: "500px" }} alt="..." />
                        <div class="carousel-caption start-5 imageText">
                            <h1 style={{ color: "#FF8800", fontWeight: "bold", fontSize: "60px", left: "20px" }}>MOST RELIABLE <br /> INFRASTRUCTURE</h1>
                            <p style={{ fontSize: "20px", wordSpacing: "1px" }}>We have develop our infrastructure with state of the art hardware and equipments that results in highly efficient and reliable flow of our services.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={ThirdImg} class="d-block w-100" style={{ height: "500px" }} alt="..." />
                        <div class="carousel-caption start-5 imageText">
                            <h1 style={{ color: "#FF8800", fontWeight: "bold", fontSize: "60px", left: "20px" }}>HIGH SPEED <br /> CONNECTIVITY</h1>
                            <p style={{ fontSize: "20px", wordSpacing: "1px" }}>Connect Communications delivers the best, fastest and most reliable internet service at all time and you can choose from wide range of available speeds.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={ForthImg} class="d-block w-100" style={{ height: "500px" }} alt="..." />
                        <div class="carousel-caption start-5 imageText">
                            <h1 style={{ color: "#FF8800", fontWeight: "bold", fontSize: "60px", left: "20px" }}>NEXT <br /> GENERATION <br /> TECHNOLOGY</h1>
                            <p style={{ fontSize: "20px", wordSpacing: "1px" }}>We utilize the latest technology and tools to gain more superiority and effectiveness. Our approach to technology allows us to provide you with complete and reliable solutions.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Scroller;