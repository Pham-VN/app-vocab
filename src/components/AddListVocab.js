import Table from 'react-bootstrap/Table';
import { Fragment, useState } from "react";
import OptionsCategorie from "./data/OptionsCategorie.js";
import OptionsNiveau from './data/OptionsNiveau.js'
import OptionsTheme from './data/OptionsTheme.js'
import Textarea from "./form/Textarea.js";
import ButtonSubmit from "./form/Button.js";
import Input from "./form/Input.js";
import Select from "./form/Select.js";
import ListVocab from "./data/data.js";
import CreateCards from "./Card.js";
import FilterNiveau from './filter/filterNiveau.js';
import FilterByTheme from './filter/filterByTheme.js';
import FilterNiveauAndTheme from './filter/filter.js';
import { FiEdit } from 'react-icons/fi';


import "./addEditFilter.css"
const AddVocabIntoList = () => {

    const [valueWord, setValueWord] = useState('');
    const [valueCategorie, setValueCategorie] = useState('');
    const [valueDefinition,setValueDefinition] = useState('')
    const [valueExemple,setValueExemple] = useState('')
    const [valueNiveau,setValueNiveau] = useState('')
    const [valueThem,setValueThem] = useState('')
    const [valueSynonyme,setValueSynonyme] = useState('')
    const [valueAntonyme,setValueAntonyme] = useState('')
    const [addVocabIntoCard, setAddVocabIntoCard] = useState([...ListVocab])

    const [currentEditingTodo, setCurrentEditingTodo] = useState(0);

    console.log(addVocabIntoCard)


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

    
    const addNewList = () => {

        if (valueWord,valueCategorie,valueDefinition,valueExemple,valueNiveau,valueThem !== "") {
            const newList = {
           
                word:  valueWord,
                cateGrammaticale: valueCategorie,
                definition: valueDefinition,
                exemple: valueExemple,
                synonyme:valueSynonyme,
                antonyme:valueAntonyme,
                niveau:valueNiveau,
                theme:valueThem
                }

                setAddVocabIntoCard([...addVocabIntoCard, newList])
                setValueWord('')
                setValueCategorie('')
                setValueDefinition('')
                setValueExemple('')
                setValueNiveau('')
                setValueThem('')
                setValueSynonyme('')
                setValueAntonyme('')

        } else {
            alert(" text please!");
        }  
    }

    const handleClick = (event) => {
        const id = event.currentTarget.id;
        console.log(id);
    }


    return (
    <Fragment>
         <Table id= "tableAddVocab">
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
                    htmlFor="exemple" 
                    id="exemple"
                    name="exemple"
                    placeholder="Veuillez tapper l'exemple de ce mot ici!"
                    value={valueExemple}
                    onChange={handleChangeValueExemple}
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
                    {/* <button onClick={filterNiveau}>test niveau</button> */}

                </td>
                <td>
                <Select
                    label="Theme"
                    id="theme"
                    name="theme"
                    value={valueThem}
                    onChange={handleChangeValueThem}
                    options={OptionsTheme}
                    >
                        {OptionsTheme.map((option,index) => {
                            <option key={index} value={option.value}>{option.label}</option>
                        })}

                    </Select>
                </td>
                </tr>
            </tbody>
    </Table>
    <ButtonSubmit index="buttonAddVocab" onClick={addNewList}>Ajouter vocabulaire</ButtonSubmit>

    {addVocabIntoCard.map((list,index) =>  
   <div key = {index} >
    <CreateCards 
    word= {list.word}
    cateGrammaticale= {list.cateGrammaticale}
    definition= {list.definition}
    exemple= {list.exemple}
    antonyme= {list.antonyme}
    synonyme= {list.synonyme}
    niveau=  {list.niveau}
    theme= {list.theme}
    onClick={handleClick}
    />

    <ButtonSubmit
    index= {index}
    onClick={handleClick}
    ><FiEdit/>Edit Card</ButtonSubmit>
    </div>
  )}

   {/* <div id="zoneFilter">  
                <h1>Zone Filter</h1>
                <FilterNiveauAndTheme 
                addVocabIntoCard={addVocabIntoCard}/>
        
   </div> */}

   </Fragment>
    )
}
export default AddVocabIntoList;
