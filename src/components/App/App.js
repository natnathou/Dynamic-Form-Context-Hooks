import React from "react"
import Form from "../Form/FormHooks"
import buttonField from "../Form/json/buttonField"
import formField from "../Form/json/formField"
import "./App.css"

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Form
                        formField={formField[`formName`]}
                        buttonField={buttonField[`formName`]}
                        nameForm={`formName`}
                    />                            
            </div>
        
        )
    }
}


export default App