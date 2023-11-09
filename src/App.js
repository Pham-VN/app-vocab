// import logo from './logo.svg';
import './components/form/Form.css';
// import FilterNiveauAndTheme from './components/filter/filter.js';
// import TestAudio from './components/audio.js';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddVocabIntoList from "./AjouterNouveauMot/AddListVocab.js"
import CreateSpan from './Text/test_list_word-react.js';
import DisplayQuiz from './quiz_app/displayQuestionPhraseAndAnswers.js'
import AddNewMoodle from './todoApp/AddNewModal.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
                <Link to="/dictionnaire">Dictionnaire</Link>
             </li>
             <li> 
                <Link to="/text">Texte</Link>
              </li>
              <li>
                <Link to="/quizApp">Quiz</Link>
              </li>
              <li>
                <Link to="/todoApp">To do App</Link>
              </li>
          </ul>
        </nav>
            <Routes>
              <Route path='/dictionnaire' exact element={<AddVocabIntoList/>}/>
              <Route path='/Text' element={<CreateSpan/>}></Route>
              <Route path='/quizApp' element={<DisplayQuiz/>}></Route>
              <Route path='/todoApp' element={<AddNewMoodle/>}></Route>
            </Routes>

     </div>
     </BrowserRouter>

  )
}

export default App;