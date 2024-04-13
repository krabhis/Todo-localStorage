
import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/Todocontexts'

function App() {
  const[todos , setTodos]=useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const completeTodo=(id)=>{

    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }
// local Storage
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length > 0) {
    setTodos(todos)
  }
}, [])

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])




  return (
   < TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,completeTodo}}>

<div className="bg-[#0a1b35] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-3xl font-bold text-center mb-8 mt-2 ">Manage Your Todos</h1>
                    {/* <div className="mb-4">
                        
                    </div> */}
                   
                </div>
            </div>


   </TodoProvider>

    
    
  )
}

export default App
