//////////////////* IMPORTACIONES *\\\\\\\\\\\\\\\\\\

import "./ItemListContainer.css"

//////////////////* LOGICA *\\\\\\\\\\\\\\\\\\
const ItemListContainer = (props) => {
    return(
        <p>
            Este es el componente contenedor ItemListContainer {props.greeting}
        </p>
    )
}

//////////////////* EXPORTACIONES *\\\\\\\\\\\\\\\\\\

export default ItemListContainer