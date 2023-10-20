import Card from 'react-bootstrap/Card';
import { FiEdit } from 'react-icons/fi';
import ButtonSubmit from './form/Button.js';

const CreateCards = ({index, word,cateGrammaticale,definition,exemple, antonyme, synonyme,niveau,theme,onClick}) => {
    return (
    <Card  style={{ width: '43rem', margin:"3rem 25rem", backgroundColor:"ButtonHighlight", padding:"2rem",textAlign:"justify"}}>
    <Card.Body>
      {/* <button id={index} style={{marginLeft:"42rem"}} onClick={onClick}><FiEdit/></button> */}
      <h3>{word}</h3>
      <Card.Text className="mb-2 text-muted">({cateGrammaticale})
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