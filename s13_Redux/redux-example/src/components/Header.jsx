import {useSelector, useDispatch} from "react-redux"



export default function Header() {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return(
    <nav>
      <ul className="navItems">
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Contacto</li>
        <li>Proyectos</li>
      </ul>
      
      <div>
        <h2>El Valor actual es {countValue}</h2>
      </div>
        

    </nav>
  )
}