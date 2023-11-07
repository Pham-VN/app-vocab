// import 'bootstrap/dist/css/bootstrap.css';
import dataPartieDuDiscours from './dataPartiesDeDiscours.js';
import DataQuestionPhrase from './QuestionAndPhrase.js';
import Button from './Button.js';
import ChangeQuestion from './useInCrement.js'
import Answers from './Answers.js';

function DisplayQuiz() {

  const {currentQuestion,increment,decrement} = ChangeQuestion({
    
    initialValue : 0,
    maxValue:dataPartieDuDiscours.length,
    minValue: 0,

})

  return (
        <div className='container'>

        <DataQuestionPhrase 
            question={dataPartieDuDiscours[currentQuestion].question}
            phrase={dataPartieDuDiscours[currentQuestion].phrase}
        />

        {dataPartieDuDiscours[currentQuestion].reponses.map((reponse,index) => (
            <Answers
            reponse={reponse.texte}
            key={index}
            children={reponse.texte}
            ></Answers>
        ))}         
         <Button 
                type="button" 
                className="btn btn-dark"
                onClick={increment}
                >Next Question</Button>

            <Button 
                type="button" 
                className="btn btn-dark"
                onClick={decrement}
                >Précedent Question</Button> 

        </div>
  );
}

export default DisplayQuiz;