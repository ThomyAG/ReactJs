//////////////////* IMPORTACIONES *\\\\\\\\\\\\\\\\\\

import "./CardWidget.css"

//////////////////* LOGICA *\\\\\\\\\\\\\\\\\\
const CardWidget = (props) => {
    return(
        <p>
            🛒 {props.cantidad}
        </p>
    )
}

//////////////////* EXPORTACIONES *\\\\\\\\\\\\\\\\\\

export default CardWidget