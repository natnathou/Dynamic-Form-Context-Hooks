import {FormErrorReducer} from "./FormErrorReducer"
import {ResponseErrorMessageReducer} from "./ResponseErrorMessageReducer"
import {FormValueReducer} from "./FormValueReducer"
import {FormPropsReducer} from "./FormPropsReducer"


export const Reducers =()=>
{
    return{
        formValueReducer: FormValueReducer(),
        formPropsReducer:FormPropsReducer(),
        formErrorReducer: FormErrorReducer(),
        responseErrorMessageReducer:ResponseErrorMessageReducer()
    }
}