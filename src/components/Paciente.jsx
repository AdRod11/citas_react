import React from 'react'

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  const {nombre,propietario,email,fecha,sintomas,id} = paciente

  const handleEliminar = () => {
    console.log('Eliminando..',1 )
    const respuesta = confirm('Deseas eliminar paciente?');
    if (respuesta){
      eliminarPaciente(id)
    }
  }
  return (

        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className=' font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
      <span className=' font-normal normal-case'>{nombre}</span>
      </p>    

      <p className=' font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
      <span className=' font-normal normal-case'>{propietario}</span>
      </p>  
      
      <p className=' font-bold mb-3 text-gray-700 uppercase'>Email: {''}
      <span className=' font-normal normal-case'>{email}</span>
      </p>  

      <p className=' font-bold mb-3 text-gray-700 uppercase'>Alta: {''}
      <span className=' font-normal normal-case'>{fecha}</span>
      </p>  

      <p className=' font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
      <span className=' font-normal normal-case'>{sintomas}</span>
      </p>
      <div className='flex justify-between mt-10'>
        <button
        className=' uppercase px-10 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white'
        type='button'
        onClick={ () => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
        className=' uppercase px-10 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white'
        typeof='button'
        onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>  
    </div>
  )
}

export default Paciente