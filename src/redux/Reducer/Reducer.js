import { add2year, AddVarValue, addyear, Del2year, Delyear } from "../Action/actionTypes";

const Reducer1 = (state = {x1 : 2000} , Action) =>{
    switch(Action.type){
        case addyear:
            return {...state , x1 : state.x1 + 1}
        
        case Delyear:
            return {...state , x1 : state.x1 - 1}

        case add2year:
            return{...state , x1: state.x1 + 2}
        case Del2year:
            return{...state , x1: state.x1 - 2}

        case AddVarValue:
            return{...state , x1: state.x1 + Action.value}

        default:
            return state
    }
}
export default Reducer1;