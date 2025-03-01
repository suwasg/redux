import { ADD_TASK, REMOVE_TASK } from "./todoTypes"

const initialState = {
    tasks: []
}

const todoReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_TASK:
            return{
                ...state,
                tasks:[...state.tasks, {id:Date.now(), task:action.payload}]
            }
        case REMOVE_TASK:
            return{
                ...state,
                tasks:state.tasks.filter((task)=> task.id !== action.payload)
            }
        default:
            return state
    }
}

export default todoReducer;