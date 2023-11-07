import Card from 'react-bootstrap/Card';
import { FiEdit } from 'react-icons/fi';
// import Input from '../components/form/Input.js';
// import ButtonSubmit from '../components/form/Input.js';

const CreateCards = ({ word,cateGrammaticale,definition,exemple, antonyme, synonyme,niveau,theme,onClick}) => {
    return (
    <Card>
    <Card.Body>
      <h3>{word}</h3>
      <Card.Text className="mb-2 text-muted">
     ({cateGrammaticale})
      </Card.Text>
      <Card.Text>
        <b>Définition</b> : {definition} 
      </Card.Text>
      <Card.Text>
      <b>Exemple :</b>{exemple}
      </Card.Text>
      <Card.Text>
      <b>Antonyme :</b> {antonyme}
      </Card.Text>
      <Card.Text>
      <b>Synonyme :</b> {synonyme}
      </Card.Text>
      <Card.Text>
      <b>Thème :</b> {theme}
      </Card.Text>
      <Card.Text>
      <b>Niveau :</b> {niveau}    
      </Card.Text>
    </Card.Body>
  </Card>
    )
}
export default CreateCards;

// {options.map(option => {
//   <option value={option.value}>{option.label}</option>
// })
// }