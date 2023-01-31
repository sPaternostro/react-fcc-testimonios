// El nombre del archivo puede ser .js o .jsx 
import React from 'react'
import '../stylesheets/Testimonio.css'


function Testimonio(props) { //props = properties
	return (
		<div className = 'contenedor-testimonio'> 
			<img 
				className='img-testimonio' src={require(`../img/testimonio-${props.img}.png`)} alt={`Foto de ${props.nombre}`} />
				<div className='contenedor-texto-testimonio'>
					<p className='nombre-testimonio'>
						<strong>{props.nombre}</strong> en {props.pais}
					</p>
					<p className='cargo-testimonio'>
						{props.cargo} en <strong>{props.empresa}</strong>
					</p>
					<p className='texto-testimonio'>
						"{props.testimonio}"
					</p>
				</div>
		</div>
	)
} 

export default Testimonio;