import { useState } from "react"
import Select from "/home/clement/Desktop/App-generer-tache/mon-app/src/components/form/Select.js"
import OptionsNiveau from "../data/OptionsNiveau.js"
import OptionsTheme from "../data/OptionsTheme.js"
import CreateCards from "../Card.js"

const FilterNiveauAndTheme = ({addVocabIntoCard}) => {
    
    const [selectNewValueNiveau, setSelectNewValueNiveau] = useState('') 
    const [valueSelectTheme, setValueSelectTheme] = useState('')
    

    const handleChangeValueNiveau = (event) => {
        setSelectNewValueNiveau(event.target.value)
    }

    const handleSelectByTheme = (event) => {
        setValueSelectTheme(event.target.value)
    }

    return (
        <div>
        <Select
                    label="Niveau"
                    id="niveau"
                    name="niveau"
                    value={selectNewValueNiveau}
                    onChange={handleChangeValueNiveau}
                    options={OptionsNiveau}
                    >
                        {OptionsNiveau.map((option,index) => {
                            <option key={index} value={option.value}>{option.label}</option>
                        })}
        </Select>

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

            {addVocabIntoCard.filter((addVocabIntoCard) => addVocabIntoCard.niveau === selectNewValueNiveau && addVocabIntoCard.theme === valueSelectTheme).map((list,index) =>    
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
            />)}
        </div>
    )
}

export default FilterNiveauAndTheme;