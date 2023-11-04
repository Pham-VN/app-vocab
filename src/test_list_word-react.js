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
            paragraphe.map((sentence,index) => 
            <p>
                <span key={index}  id={'s'+index} className='sentence'>
            
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
            </p>
        ))
    }


    return (
        <div className="span-word">
            <h1>Les Français et le petit déjeuner.</h1>
            <Input 
            type = 'text'
            label ="Veuillez taper le mot que vous voulez marquer"
            value = {text}
            onChange = {(event) => handleChange(event)}
            />

            <h1>P1</h1>

            <DisplayParagraphe 
            
            paragraphe={listParagraphe1}>

            </DisplayParagraphe>

            <h1>P2</h1>

            <DisplayParagraphe 

            paragraphe={listParagraphe2}>

            </DisplayParagraphe>

            <h1>P3</h1>

            <DisplayParagraphe 

            paragraphe={listParagraphe3}>

            </DisplayParagraphe>
            <h1>P4</h1>

            <DisplayParagraphe 

            paragraphe={listParagraphe4}>

            </DisplayParagraphe>
            <h1>P5</h1>

            <DisplayParagraphe 

            paragraphe={listParagraphe5}>

            </DisplayParagraphe>
            <h1>P6</h1>

            <DisplayParagraphe 

            paragraphe={listParagraphe6}>

            </DisplayParagraphe>
             <h1>P7</h1>

            <DisplayParagraphe 

            paragraphe={listParagraphe7}>

            </DisplayParagraphe>
                   </div>

    )    
}

export default CreateSpan;