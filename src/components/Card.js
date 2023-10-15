import Card from 'react-bootstrap/Card';
const CreateCards = ({index, word,cateGrammaticale,definition,exemple, antonyme, synonyme,niveau,theme}) => {
    return (
    <Card  key = {index} style={{ width: '38rem', margin:"3rem 25rem", backgroundColor:"ButtonHighlight", padding:"2rem",textAlign:"justify"}}>
    <Card.Body>
      <h3>{word}</h3>
      <Card.Subtitle className="mb-2 text-muted">({cateGrammaticale})</Card.Subtitle>
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