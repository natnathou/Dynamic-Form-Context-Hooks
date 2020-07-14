import React, {useContext} from 'react'
import Context from "../../../state/StateContext";


export const Button =({formField,buttonField,nameForm, formSend, formReset})=> {

    const context = useContext(Context)
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
    const handleSendClick = (event) => {
        formSend(event, context)
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