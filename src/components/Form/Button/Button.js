import React, {useState, useContext, useEffect} from 'react'
import _ from "lodash"
import Context from "../../../state/StateContext";


export const Button =({formField,buttonField,nameForm, formReset})=> {

    const context = useContext(Context)

    const [modal, setModal] = useState(false)

    useEffect(() => {
        if(context["responseErrorMessageReducer"][nameForm] !== "" && !modal){
            context.displayModalReducer.setDisplayModalAction(context["responseErrorMessageReducer"][nameForm])
            setModal(true)
        
        }
    }, [nameForm, context, modal])

// check which button we will render after that we map our json
    const renderInput = json => json.map((data, index) => {
        switch (data.function) {

            case "send":
                return <button
                    type="submit"
                    className={data.color}
                    key={index}
                    onClick={handleSendClick}
                    >
                    {data.value}
                </button>
            case "reset":
                return <button
                    className={data.color}
                    key={index}
                    onClick={handleResetClick}>
                    {data.value}
                </button>

            default:
                return <button
                    className={data.color}
                    key={index}>
                    {data.value}
                </button>


        }

    })

    // we clcik on send we will send our form
    const handleSendClick = async (event) => {
        event.preventDefault()
        setModal(false)

        let toArray = _.toArray(context["formPropsReducer"][nameForm])
        let err     = false;
        toArray.map(data => {
            if (data.error) {
                err = true
            }
            return null
        })

        
        await context.formErrorReducer.errorStatueAction(err, nameForm)

        if (!err) {
            console.log("Form is valide!")
            console.log(context["formValueReducer"][nameForm])

        } else {
            console.log("Form doesn't valid!")
            // we send our form and if we have an error in the response we dispatch it if 
            // await context.responseErrorMessageReducer.setResponseMessageErrorAction("Error message", nameForm)
        }
        }

    // we clcik on send we will cancel our form
    const handleResetClick = (event) => {
        event.preventDefault()
        formReset(formField, nameForm, context)
        
    }

    return (
        <div className="Button">
            {renderInput(buttonField)}
        </div>
    )
}

export default Button;