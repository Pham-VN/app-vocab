// import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  
  const listVocab = [
    {
     word: "père",
     cateGrammaticale: "n.m",
     definition: "Homme qui a engendré ou qui a adopté un ou plusieurs enfants",
     exemple : " Père qui donne le biberon à son bébé.",
     antonyme: "mère",
     niveau : "A1",
     theme: "famille"
    },
    {
      word: "co-voiturage",
      cateGrammaticale: "n.m",
      definition: " Utilisation en commun d’une voiture particulière.",
      exemple : "Le co-voiturage est une solution pour faire des économies d’énergie en réduisant le nombre de véhicules en circulation sur les routes.",
      synonyme: "carpooling",
      antonyme: "autosolisme",
      niveau : "B1",
      theme: "transport"
     },
     {
      word: "consultation",
      cateGrammaticale: "n.f",
      definition: "Action de donner avis.",
      exemple : "Les consultations données par un expert.",
      niveau : "A1",
      theme: "santé"
     },
     {
      word: "manger",
      cateGrammaticale: "v.",
      definition: "Avaler pour se nourrir (un aliment solide ou consistant) après avoir mâché.",
      exemple : "Manger du pain.",
      synonyme: "consomer",
      niveau : "A1",
      theme: "nourriture"
     }
  ]

  return (
    // <div className="App">
    <div className="d-flex justify-content-around">
            <Row>
            {listVocab.map((list,index) =>
      <div key = {index} className="col-sm-4">
      <Card  style={{ width: '18rem', margin:"3rem 25rem", backgroundColor:"ButtonHighlight", padding:"2rem",textAlign:"justify"}}>
      <Card.Body>
        <h3>{list.word}</h3>
        <Card.Subtitle className="mb-2 text-muted">({list.cateGrammaticale})</Card.Subtitle>
        <Card.Text>
          <b>Définition</b> : {list.definition}
        </Card.Text>
        <Card.Text>
        <b>Exemple :</b>{list.exemple}
        </Card.Text>
        <Card.Text>
        <b>Antonyme :</b> {list.antonyme}
        </Card.Text>
        <Card.Text>
        <b>Synonyme :</b> {list.synonyme}
        </Card.Text>
        <Card.Text>
        <b>Thème :</b> {list.theme}
        </Card.Text>
        <Card.Text>
        <b>Niveau :</b> {list.niveau}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
      )}
          </Row>
      </div>
  );
}

export default App;
