import './test_list_words.css'
import Input from './components/form/Input'
import { useState } from 'react'
import {listParagraphe1,listParagraphe2,listParagraphe3,listParagraphe4,listParagraphe5,listParagraphe6,listParagraphe7 } from './list_sentence2.js'

function CreateSpan() {


    const [text,setText] = useState('');
    
    
    const handleChange = (e) => {
        setText(e.target.value)        
    }

    const DisplayParagraphe = ({paragraphe}) => {
        return (
            <div className='displayParagraphe'>
                {
            paragraphe.map((sentence,index) => 
            // <p>
                <span   key={index} id={'s'+index} className='sentence'>
            
                    {sentence.words.map((word,index) => 
                    
                    <span key={index} id={"w" + word.id} className='sentence-item'>
                        {word.word.toLowerCase() === text.toLowerCase() ? (
                            <b style={{ backgroundColor: "#e8bb49" }}>{word.word}</b>
                        )
                            : (
                                word.word
                            )
                    
                    }
                    </span>
                    )}
                </span>
            // </p>
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