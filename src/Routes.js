import React, {useState} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import Shop from "./Shop"
import Nav from "./Nav"
import Cart from "./Cart"

function Routes() {
    const [openCart, setOpenCart] = useState(false)
    const [currentCart, setCurrentCart] = useState([])

    function toggleCart() {
        setOpenCart(prev => {
            if (prev) { return false }
            else { return true }
        })
    }

    function removeFromCart(item) {
        setCurrentCart(prevCart => {
            let updatedCart = []
            let once = 0
            for (let i = 0; i < currentCart.length; i++) {
                if (once === 1 || currentCart[i][0] !== item) { 
                    updatedCart.push(currentCart[i])
                } else { once = 1 }       
            }
            return (updatedCart)
        })
    }

    function addToCart(item, price) {
        const updatedCart = [...currentCart]
        updatedCart.push([item, price])
        setCurrentCart(updatedCart)
    }

    const cart = openCart ? <Cart currentCart={currentCart} remove={removeFromCart} add={addToCart} /> : <div></div>
    return (
        <BrowserRouter>
            <Nav toggleCart={toggleCart}/>
            {cart}
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route exact path="/Shop" component={Shop} >
                    <Shop addToCart={addToCart}/>
                </Route>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes
