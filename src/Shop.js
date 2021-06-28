import React from "react"
import TuboPVC from "./Images/tubopvc.png"
import TPVC from "./Images/pvct.jpg"
import Torneira from "./Images/torneiraesquadria.jpg"
import Footer from "./Footer"

function Shop(props) {
    return (
        <div id="shopping">
            <div id="space-simul"></div>
            <div id="product-container">
                <div className="product">
                    <img className="posters" src={Torneira} alt="torneira"></img>
                    <h3 className="poster-name">Torneira 5€</h3>
                    <button onClick={() => props.addToCart("Torneira", 5)} className="add-buttons">Add to Cart</button>
                </div>

                <div className="product">
                    <img className="posters" src={TuboPVC} alt="torneira"></img>
                    <h3 className="poster-name">Tubo PVC 2€</h3>
                    <button onClick={() => props.addToCart("Tubo PVC", 2)} className="add-buttons">Add to Cart</button>
                </div>

                <div className="product">
                    <img className="posters" src={TPVC} alt="torneira"></img>
                    <h3 className="poster-name">T PVC 1€</h3>
                    <button onClick={() => props.addToCart("T PVC", 1)} className="add-buttons">Add to Cart</button>
                </div>
            </div>
            <Footer id="good-footer"/>
        </div>
    )
}

export default Shop