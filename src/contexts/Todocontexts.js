import {createContext,useContext} from "react"


export const todoContext=createContext({
    todos:[
        {
            id:  1 ,
            todomsg:{},
            completed: false

        }
    ],
    deleteTodo:[(id)=>{}],
    updateTodo:[(id,todo)=>{}],
    addTodo:[(todo)=>{}],
    completeTodo:[(id)=>{}]
})



export const useTodo=()=>{
    return useContext(todoContext)
}



export const TodoProvider=todoContext.Provider

