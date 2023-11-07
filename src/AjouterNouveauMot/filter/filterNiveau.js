import { useState } from "react"
import Select from ".../components/form/Select.js"
import OptionsNiveau from "../data/OptionsNiveau.js"
import CreateCards from "../Card.js"

const FilterNiveau = ({addVocabIntoCard}) => {
    
    const [selectNewValueNiveau, setSelectNewValueNiveau] = useState('') 

    const handleChangeValueNiveau = (event) => {
        setSelectNewValueNiveau(event.target.value)
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

            {addVocabIntoCard.filter((addVocabIntoCard) => addVocabIntoCard.niveau === selectNewValueNiveau).map((list,index) =>    
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

export default FilterNiveau;