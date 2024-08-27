import '../css/About.css'

export default function About() {
  return (
    <div className="about-info">
      <div>
        <h1>Descripción del Proyecto</h1>
        <p>
          ¡Hola! Soy un desarrollador en formación y actualmente estoy aprendiendo las bases de
          React a través de proyectos prácticos. Este proyecto es una Pokedex con React y Vite,
          donde mi objetivo principal ha sido explorar cómo combinar React con estilos personalizados
          en CSS para crear una interfaz dinámica y atractiva. Además, este ejercicio me ha ayudado
          a profundizar en la integración con APIs, utilizando la PokeAPI para mostrar la información
          de los Pokémon.
        </p>
      </div>
      <div>
        <h3>Fecha y Hora del Proyecto:</h3>
        <ul>
          <li>Inicio: 22 de agosto de 2024, 11:00h</li>
          <li>Última Actualización: 27 de agosto de 2024, 12:00h</li>
        </ul>
      </div>
      <div>
        <h3>Funcionalidades del proyecto:</h3>
        <ul>
          <li>Listado interactivo de Pokémon obtenidos desde la PokeAPI.</li>
          <li>Estilos CSS personalizados para un diseño moderno y agradable.</li>
        </ul>
      </div>
      <div>
        <h3>Resumen del Orden de Implementación:</h3>
        <ul>
          <li>
            <strong>Configurar el Proyecto y Crear la Estructura de Archivos:</strong> Inicié configurando el proyecto
            con Vite y React, organizando las carpetas para componentes, hooks y estilos.
          </li>
          <li>
            <strong>Desarrollar el Hook Personalizado (usePokemon.js):</strong> Creé un hook personalizado para gestionar la lógica de obtención
            y filtrado de datos desde la PokeAPI.
          </li>
          <li>
            <strong>Crear el Componente de la Barra de Búsqueda (SearchBar.jsx):</strong> Implementé una barra de búsqueda para filtrar
            Pokémon en función de su nombre.
          </li>
          <li>
            <strong>Crear el Componente de la Tarjeta de Pokémon (PokemonCard.jsx):</strong> Diseñé tarjetas individuales para cada Pokémon, mostrando
            su nombre, imagen y algunos detalles relevantes.
          </li>
          <li>
            <strong>Crear el Componente de la Cuadrícula de Pokémon (PokemonGrid.jsx):</strong> Este componente organiza y muestra las
            tarjetas de Pokémon en un formato de cuadrícula.
          </li>
          <li>
            <strong>Crear el Componente que Orquesta la Lógica de la Lista de Pokémon (PokemonList.jsx):</strong> Aquí centralicé la lógica
            para obtener, filtrar y renderizar la lista completa de Pokémon.
          </li>
          <li>
            <strong>Desarrollar el Componente Principal (App.jsx):</strong> El componente principal que orquesta todo el flujo y la
            interacción entre los componentes.
          </li>
          <li>
            <strong>Configurar el Punto de Entrada (main.jsx):</strong> Configuré el punto de entrada de la aplicación en main.jsx,
            asegurándome de que todo esté correctamente enlazado.
          </li>
          <li>
            <strong>Añadir Estilos CSS:</strong> Finalmente, trabajé en la personalización de los estilos para darle al proyecto
            un diseño moderno y visualmente agradable.
          </li>
        </ul>
      </div>

    </div >
  )
}