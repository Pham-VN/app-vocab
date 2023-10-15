import Input from "./form/Input.js";
import Select from "./form/Select.js";
import { Fragment, useState } from "react";
import OptionsCategorie from "./data/OptionsCategorie.js";
import OptionsNiveau from './data/OptionsNiveau.js'
import Textarea from "./form/Textarea.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const AddVocabIntoList = () => {

    const [valueWord, setValueWord] = useState('');
    const [valueCategorie, setValueCategorie] = useState('');
    const [valueDefinition,setValueDefinition] = useState('')
    const [valueExemple,setValueExemple] = useState('')
    const [valueNiveau,setValueNiveau] = useState('')
    const [valueThem,setValueThem] = useState('')
    const [valueSynonyme,setValueSynonyme] = useState('')
    const [valueAntonyme,setValueAntonyme] = useState('')


    const handleChangeValueWord = (event) => {
        setValueWord(event.target.value)
    }
    
    const onOptionChangeHandler = (event) => {
        setValueCategorie(event.target.value);
    };


    const handleChangeValueDefinition = (event) => {
        setValueDefinition(event.target.value)
    }

    const handleChangeValueExemple = (event) => {
        setValueExemple(event.target.value)
    }

    const handleChangeValueNiveau = (event) => {
        setValueNiveau(event.target.value)
    }

    const handleChangeValueThem = (event) => {
        setValueThem(event.target.value)
    }

    const handleValueSynonyme = (event) => {
        setValueSynonyme(event.target.value)
    }

    const handleValueAntonyme = (event) => {
        setValueAntonyme(event.target.value)
    }

    return (
    <Fragment>
         <Table striped bordered hover style={{margin: "0% 5%", width: '100%', textAlign: "center",  padding: "15px",  border: "1px solid"}}>
            <thead>
                <tr>
                <th>Mot</th>
                <th>Catégorie grammaticale</th>
                <th>Définition</th>
                <th>Exemple</th>
                <th>Synonyme</th>
                <th>Antonyme</th>
                <th>Niveau</th>
                <th>Thème</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                <td>{valueWord}</td>
                <td>{valueCategorie}</td>
                <td>{valueDefinition}</td> 
                <td>{valueExemple}</td>
                <td>{valueSynonyme}</td>
                <td>{valueAntonyme}</td>
                <td>{valueNiveau}</td>
                <td>{valueThem}</td>
                </tr> */}

                <tr>
                <td>
                    <Input
                        type="text"
                        name = "word"
                        placeholder = "Ajouter de nouveau mot"
                        value={valueWord}
                        onChange={handleChangeValueWord}
                    />
                </td>
                <td>
                    <Select 
                    id = "categorie-grammaticale-select"
                    name= "categorie-grammaticale"
                    onChange={onOptionChangeHandler}
                    value = {valueCategorie}
                    options={OptionsCategorie}
                    >
                        {OptionsCategorie.map((option,index) => {
                            
                                <option key = {index} value={option.value}>{option.label}</option>
                            
                        })}
                    </Select>    
                </td> 
                <td>
                    <Textarea
                    htmlFor="definition" 
                    id="definition"
                    name="definition"
                    placeholder="Veuillez tapper la définition de ce mot ici!"
                    value={valueDefinition}
                    onChange={handleChangeValueDefinition}
                    >
                    </Textarea>
                </td>
                <td>
                    <Textarea
                    htmlFor="synonyme" 
                    id="synonyme"
                    name="synonyme"
                    placeholder="Veuillez tapper Synonyme de ce mot ici!"
                    value={valueSynonyme}
                    onChange={handleValueSynonyme}
                    >
                </Textarea>
                </td>
                <td>
                    <Textarea
                    htmlFor="antonyme" 
                    id="antonyme"
                    name="antonyme"
                    placeholder="Veuillez tapper Antonyme de ce mot ici!"
                    value={valueAntonyme}
                    onChange={handleValueAntonyme}
                    >
                    </Textarea>
                </td>
                <td>
                    <Textarea
                    htmlFor="Exemple" 
                    id="exemple"
                    name="exemple"
                    placeholder="Veuillez tapper votre (vos) exemple (exemples) de ce mot ici!"
                    value={valueExemple}
                    onChange={handleChangeValueExemple}
                    >
                    </Textarea>
                </td>
                <td>
                    <Select
                    label="Niveau"
                    id="niveau"
                    name="niveau"
                    value={valueNiveau}
                    onChange={handleChangeValueNiveau}
                    options={OptionsNiveau}
                    >
                        {OptionsNiveau.map((option,index) => {
                            <option key={index} value={option.value}>{option.label}</option>
                        })}
                    </Select>
                </td>
                <td>
                    <Input
                    type="text"
                    id="theme"
                    name="theme"
                    value={valueThem}
                    onChange={handleChangeValueThem}
                    />
                </td>
                </tr>
            </tbody>
    </Table>
    {/* <Container  style={{marginLeft: "5rem"}}>
        <Row>
            <Col xs={6} md={4}>
                <Input
                    label = "Mots"
                    type="text"
                    name = "word"
                    placeholder = "Ajouter de nouveau mot"
                    value={valueWord}
                    onChange={handleChangeValueWord}
                />
            </Col>
            
            <Col xs={6} md={4}>
                <Select 
                label = "Catégorie grammaticale"
                id = "categorie-grammaticale-select"
                name= "categorie-grammaticale"
                onChange={onOptionChangeHandler}
                value = {valueCategorie}
                options={OptionsCategorie}
                >
                    {OptionsCategorie.map((option,index) => {
                        
                            <option key = {index} value={option.value}>{option.label}</option>
                        
                    })}
                </Select>
                <h3>Catégorie grammaticale: {valueCategorie} </h3>
            </Col>

            <Col >
                <Textarea
                htmlFor="definition" 
                label="Définition"
                id="definition"
                name="definition"
                placeholder="Veuillez tapper la définition de ce mot ici!"
                value={valueDefinition}
                onChange={handleChangeValueDefinition}
                >
                </Textarea>
                <h3>Définition: {valueDefinition} </h3>
            </Col> */}

            {/* <Col >
                <Textarea
                htmlFor="synonyme" 
                label="Synonyme"
                id="synonyme"
                name="synonyme"
                placeholder="Veuillez tapper Synonyme de ce mot ici!"
                value={valueSynonyme}
                onChange={handleValueSynonyme}
                >
                </Textarea>
                <h3>Synonyme: {valueSynonyme} </h3>
            </Col> */}

            {/* <Col >
                <Textarea
                htmlFor="antonyme" 
                label="Antonyme"
                id="antonyme"
                name="antonyme"
                placeholder="Veuillez tapper Antonyme de ce mot ici!"
                value={valueAntonyme}
                onChange={handleValueAntonyme}
                >
                </Textarea>
                <h3>Antonyme: {valueAntonyme} </h3>
            </Col> */}


            {/* <Col >
                <Textarea
                htmlFor="Exemple" 
                label="Exemple"
                id="exemple"
                name="exemple"
                placeholder="Veuillez tapper votre (vos) exemple (exemples) de ce mot ici!"
                value={valueExemple}
                onChange={handleChangeValueExemple}
                >
                </Textarea>
                <h3>Exemple: {valueExemple} </h3>
            </Col>

            <Col >
                <Select
                label="Niveau"
                id="niveau"
                name="niveau"
                value={valueNiveau}
                onChange={handleChangeValueNiveau}
                options={OptionsNiveau}
                >
                    {OptionsNiveau.map((option,index) => {
                        <option key={index} value={option.value}>{option.label}</option>
                    })}
                </Select>
                <h3>Niveau: {valueNiveau} </h3>
            </Col>

            <Col >
                <Input
                label="Thème"
                type="text"
                id="theme"
                name="theme"
                value={valueThem}
                onChange={handleChangeValueThem}
                />
                <h3>Thème: {valueThem} </h3>
            </Col>

        </Row>

       
    </Container> */}

   
    </Fragment>
    )
}
export default AddVocabIntoList;