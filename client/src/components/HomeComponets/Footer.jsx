import logo from "../../assets/logo.svg";
import social1 from "../../assets/s1.svg";
import social2 from "../../assets/s2.svg";
import social3 from "../../assets/s3.svg";

export const Footer= ()=>{
    return(
        <footer className="footer container">
            <img className="logo-2" src={logo} alt="" />

            <div className="links">
                <h4>lorem</h4>
                <ul>
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">lorem</a></li>
                </ul>
            </div>
            <div className="links">
                <h4>lorem</h4>
                <ul>
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">lorem</a></li>
                </ul>
            </div>
            <div className="links">
                <h4>lorem</h4>
                <ul>
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">lorem</a></li>
                    <li><a href="#">lorem</a></li>
                </ul>
            </div>
            <div className="links">
                <h4>lorem</h4>
                <div className="socials">
                    <a href="#">
                        <div className="social">
                            <img src={social1} alt=""/>
                        </div>
                    </a>
                    <a href="#">
                        <div className="social">
                            <img src={social2} alt=""/>
                        </div>
                    </a>
                    <a href="#">
                        <div className="social">
                            <img src={social3} alt=""/>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}