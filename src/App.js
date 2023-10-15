// import logo from './logo.svg';
import './components/form/Form.css';
import CreateCards from './components/Card.js';
import ListVocab from './data.js';
import AddVocabIntoList from './components/AddListVocab.js'
function App() {
  return (
    <div className="d-flex justify-content-around">
    {ListVocab.map((list,index) =>    
    <CreateCards 
    key = {index}
    word= {list.word}
    cateGrammaticale= {list.cateGrammaticale}
    definition= {list.definition}
    exemple= {list.exemple}
    antonyme= {list.antonyme}
    synonyme= {list.synonyme}
    niveau=  {list.niveau}
    theme= {list.theme}
    />
  )}
  <div><AddVocabIntoList/>
  </div>
  </div>)
}

export default App;
