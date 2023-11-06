import './test_list_words.css'
import Input from './components/form/Input'
import { useState } from 'react'
import {listParagraphe1,listParagraphe2,listParagraphe3,listParagraphe4,listParagraphe5,listParagraphe6,listParagraphe7 } from './list_sentence2.js'

function CreateSpan() {

    const arrayVerbe =  ['mangent', 'boivent', 'dit', 'ajoute', 'remarque', 'a', 'boivent', 'reste', 'a', 'boire', 'boivent', 'boivent', 'accompagnent', 'mange', 'peut', 'ajouter', 'devez', 'savoir', 'trempent', 'mange', 'reçue', 'mangent', 'grossir', 'achète', 'font', 'rapporter', 'voulez', 'acheter', 'choisissez', 'attendent', 'trouver', 'peut', 'accompagner', 'mange'] 
    const arrayNom =  ['Français', 'petit-déjeuner', 'général', 'adultes', 'bol', 'tasse', 'café', 'café', 'lait', 'café', 'café', 'jus', 'chaussette', 'peu', 'sucre', 'années', 'Français', 'thé', 'matin', 'thé', 'sachet', 'thé', 'produit', 'habitude', 'cas', 'enfants', 'café', 'chocolat', 'chocolat', 'poudre', 'lait', 'lait', 'céréales', 'général', 'tranche', 'pain', 'biscotte', 'beurre', 'confiture', 'miel', 'Français', 'tartines', 'bol', 'café', 'lait', 'céréales', 'lait', 'idée', 'Français', 'croissants', 'pains', 'chocolat', 'matins', 'croissants', 'brioche', 'pains', 'chocolat', 'produits', 'dimanche', 'matin', 'Français', 'queue', 'dimanche', 'matin', 'croissants', 'pain', 'famille', 'queue', 'boulangerie', 'pain', 'dimanche', 'matin', 'boulangerie', 'gens', 'pain', 'petit-déjeuner', 'yaourt', 'fromage', 'fruit', 'jus', 'fruit', 'général', 'choses', 'part', 'œufs', 'bacon'] 
    const arrayAdj = ['grande', 'fort', 'fort', 'élitiste', 'chaud', 'tous', 'chers', 'frais', 'toute', 'sûr', 'longue', 'bonne', 'bon', 'bon', 'blanc', 'salées']

    const [text,setText] = useState('');
    
    for (let verbe of arrayVerbe) {
        console.log(verbe)
    }
    
    const handleChange = (e) => {
        setText(e.target.value)        
    }

    // const DisplayParagraphe = ({paragraphe}) => {
    //     return (
    //         <div className='displayParagraphe'>
    //             {
    //         paragraphe.map((sentence,index) => 
    //             <span   key={index} id={'s'+index} className='sentence'>
            
    //                 {sentence.words.map((word,index) => 
                    
    //                 <span key={index} id={"w" + word.id} className='sentence-item'>
    //                             {word.word.toLowerCase() === text.toLowerCase() ? (
    //                         <b style={{ backgroundColor: "#e8bb49" }}>{word.word}</b>
    //                     )
    //                         : (
    //                             word.word
    //                         )
                    
    //                 }
    //                 </span>
    //                 )}
    //             </span>
    //     )
    //     }
    //     </div>
                
    //     )
    // }

    const DisplayParagraphe = ({paragraphe}) => {
        return (
            <div className='displayParagraphe'>
                {

            paragraphe.map((sentence,index) => 

                <span key={index} id={'s'+index} className='sentence'>
                
                    {sentence.words.map((word,index) => 
                    
                    <span key={index} id={"w" + word.id} className='sentence-item'>
                        {
                                 arrayVerbe.includes(word.word.toLowerCase()) ? (
                                    <b style={{ backgroundColor: "#e8bb49" }}>{word.word}</b>
                                )
                                    : (
                                        word.word
                                    )
                        }
                    </span>
                    )}
                </span>
        )
        }
        </div>
                
        )
    }

console.log(listParagraphe1)
    return (
        <div className="span-word">
            <h1 className='titleArticle'>Les Français et le petit déjeuner.</h1>
            <Input 
            type = 'text'
            label ="Veuillez taper le mot que vous voulez marquer"
            value = {text}
            onChange = {(event) => handleChange(event)}
            />


            <DisplayParagraphe 
            
            paragraphe={listParagraphe1}>

            </DisplayParagraphe>


            <DisplayParagraphe 

            paragraphe={listParagraphe2}>

            </DisplayParagraphe>


            <DisplayParagraphe 

            paragraphe={listParagraphe3}>

            </DisplayParagraphe>

            <DisplayParagraphe 

            paragraphe={listParagraphe4}>

            </DisplayParagraphe>

            <DisplayParagraphe 

            paragraphe={listParagraphe5}>

            </DisplayParagraphe>

            <DisplayParagraphe 

            paragraphe={listParagraphe6}>

            </DisplayParagraphe>

            <DisplayParagraphe 

            paragraphe={listParagraphe7}>

            </DisplayParagraphe>
                   </div>

    )    
}

export default CreateSpan;