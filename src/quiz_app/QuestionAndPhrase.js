import { Fragment } from "react"
const DataQuestionPhrase = ({question, phrase}) => {

    return (
        <Fragment>
            <div>
                <h5 className="question">{question}</h5>
                <p className="phrase">{phrase}</p>
            </div>      
        </Fragment>
    )
}

export default DataQuestionPhrase;