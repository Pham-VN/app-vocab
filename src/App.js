// import logo from './logo.svg';
import './components/form/Form.css';
import AddVocabIntoList from './components/AddListVocab.js'
import ImgMediaCard from './components/exempleCard.js'
// import FilterNiveauAndTheme from './components/filter/filter.js';
function App() {
  return (
    <div className="d-flex justify-content-around">
      <AddVocabIntoList/>
      <ImgMediaCard/>
  </div>)
}

export default App;
