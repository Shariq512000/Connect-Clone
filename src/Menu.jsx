import { Link } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import "./Menu.css"

function Menu() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" > <Link to={'/'} className="liss"> Home </Link> </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"> <Link to={'/'} className="liss"> Company </Link> </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle liss" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Residential</a></li>
                                    <li><a class="dropdown-item" href="#">Dedicated</a></li>
                                    {/* <li><hr class="dropdown-divider"></li> */}
                                    <li><a class="dropdown-item" href="#">Business</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"> <Link to={'/'} className="liss" > Support </Link> </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"> <Link to={'/contact'} className="liss" > Contact Us </Link> </a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <form class="d-flex">
                        <div >
                            <a href="#" className="liss"><LockIcon /><span>Login</span></a>
                        </div>
                        </form>
                       

                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Menu;