import circle1 from "../assets/circle1.svg";
import circle2 from "../assets/circle2.svg";
import sarten from "../assets/sarten.png";

export const Information = ()=>{
    return(
        <>
            <section className="info">
                <div className="info-content container">
                    
                    <div className="info-txt">
                        <h2>Informacion</h2>
                        <p>Los mejores platillos</p>
                        <div className="info-sec">
                            
                            
                            <div className="info-1">
                                <img src={circle1} alt=""/>
                                <div className="info-2">
                                    <h3>lorem</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div className="info-1">
                                <img src={circle2} alt=""/>
                                <div className="info-2">
                                    <h3>lorem</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="info-img">
                        <img src={sarten} alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}