import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const [array, setArray] = React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault()

        if(!fruta.trim()){
            console.log('Fruta es vacío!')
            return
        }
        
        if(!descripcion.trim()){
            console.log('Descripción es vacío!')
            return
        }

        setArray([
            ...array,
            {nombreFruta: fruta, nombreDescripcion: descripcion}
            
        ])

        console.log('Procesando datos!')

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos }>
                <input 
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange= { (e) => setFruta(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Ingrese Descripción"
                    className="form-control mb-2"
                    onChange= { (e) => setDescripcion(e.target.value) }
                />
                <button type="submit" className="btn btn-primary btn-block">
                    Agregar
                </button>
            </form>
            <ul>
                {
                    array.map( (item, index) => (
                        <li key={index}> { item.nombreFruta } - { item.nombreDescripcion } </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Formulario
