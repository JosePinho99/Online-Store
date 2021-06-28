import React from "react"

function Cart(props) {
    let dict = {}
    let price = 0
    let list_display = [<p key="header" className="cart-header">Qt | Preço | Produto</p>]
    for (let i = 0; i < props.currentCart.length; i++) {
        price += props.currentCart[i][1]
        if (dict[props.currentCart[i][0]]) {dict[props.currentCart[i][0]][0] += 1}
        else {dict[props.currentCart[i][0]] = [1 ,props.currentCart[i][1]] }
    }

    for (const [key, value] of Object.entries(dict)) {    
        list_display.push(  
            <div className="cart-list" key={key}>
                <button onClick={() => props.remove(key)} className="interact-cart">-</button>
                <p>{value[0] + " Units | " + value[1] + "€ | " +  key}</p>
                <button onClick={() => props.add(key, value[1])} className="interact-cart">+</button>
            </div>
        )
    }

    return (
        <div id="cart">
            {list_display}
            <h1 id="preco">Preço Total: {price}€</h1>
        </div>
    )
}

export default Cart