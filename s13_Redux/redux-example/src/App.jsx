import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement, reset} from "./app/slices/counterSlice"
import Header from './components/Header';
import Tasks from "./components/Tasks";

function App() {

  const counter = useSelector(function(state){
    return state.counter.value;
  })

  const name1 = useSelector(function(state){
    return state.user1.value;
  })

  const admin = useSelector(function(state){
    return state.userAdmin.userName;
  })

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1> */}

      <h2>Bienvenido {name1}</h2>

      <Header/>

      <div className="card">
        
        <button onClick={() => dispatch(decrement())} >
          Decrement 1 {"<<"} 
        </button>
 
        <button onClick={() => dispatch(reset())}>
          Reset 0{"?"}
        </button>

        <button onClick={() => dispatch(increment())}>
          {">>"} Increment 1
        </button>

      </div>

      <Tasks />

      <footer className="footer">
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <h4>Used by: {admin}</h4>

      </footer>

    </>
  )
}

export default App
