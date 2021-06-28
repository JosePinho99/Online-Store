import React from "react"

function Footer(props) {
    return (
        <div id={props.id}>
            <div id="contact">
                <h2 className="contact-text">CONTACTO:</h2>
                <p className="contact-text">Email: example@gmail.com</p>
                <p className="contact-text">Phone: 919191323123</p>
            </div>
            <p id="github-mention">Simple GitHub Shop project <a href="https://github.com/JosePinho99" target="_blank" rel="noreferrer">My github</a></p>
        </div>
    )
}
export default Footer