import { ADD, DIV, MUL, SUB } from "./calculatorTypes"

const initialNum = {
    num:1
}

const calculatorReducer = (state= initialNum, action)=>{
    switch (action.type){
        case ADD:
            return {num: state.num+1}
        case SUB:
            return {num: state.num-1}
        case MUL:
            return {num: state.num*2}
        case DIV:
            return {num: state.num/2}
        default:
            return state
    }
}

export default calculatorReducer;