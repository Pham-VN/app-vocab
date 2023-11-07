import { Fragment } from "react"
const DataQuestionPhrase = ({question, phrase}) => {

    return (
        <Fragment>
            <div className="card">
                <h5 className="card-title">{question}</h5>
                <p className="card-text">{phrase}</p>
            </div>      
        </Fragment>
    )
}

export default DataQuestionPhrase;