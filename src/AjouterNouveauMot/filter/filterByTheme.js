import { useState } from "react"
import Select from ".../components/form/Select.js"
import OptionsTheme from "../data/OptionsTheme.js"
import CreateCards from "../Card.js"

const FilterByTheme = ({addVocabIntoCard}) => {

    const [valueSelectTheme, setValueSelectTheme] = useState('')
    
    const handleSelectByTheme = (event) => {
        setValueSelectTheme(event.target.value)
    }

    return (
        <div>
            <Select
             label="Thème"
             id = "theme"
             name = "theme"
             value= {valueSelectTheme}
             options={OptionsTheme}
             onChange={handleSelectByTheme}
            >
                {OptionsTheme.map((option,index) => {
                    <option key={index} value={option.value}>{option.label}</option>
                })
                }
            </Select>
            {addVocabIntoCard.filter((addVocabIntoCard)=>addVocabIntoCard.theme === valueSelectTheme).map((list,index) => 
                <CreateCards
                key = {index}
                word= {list.word}
                cateGrammaticale= {list.cateGrammaticale}
                definition= {list.definition}
                exemple= {list.exemple}
                antonyme= {list.antonyme}
                synonyme= {list.synonyme}
                niveau=  {list.niveau}
                theme= {list.theme}
                />
            )
            }
        </div>
    )
} 

export default FilterByTheme;