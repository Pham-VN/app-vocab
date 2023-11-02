import './test_list_words.css'
import Input from './components/form/Input'
import { useState } from 'react'
function CreateSpan() {
    const list_sentence = ['Les Français ne mangent pas beaucoup au petit-déjeuner.', 'En général, les adultes boivent un bol ou une grande tasse de café ou de café au lait.', 'Le café est assez fort, quand le café n’est pas fort, on dit que c’est du « jus de chaussette ».', 'Souvent on ajoute un peu de sucre.', 'Depuis quelques années, on remarque qu’il y a de plus en plus de Français qui boivent du thé le matin.', 'C’est souvent du thé en sachet.', 'Mais le thé reste un produit assez élitiste, on n’a pas l’habitude d’en boire comme c’est le cas en Angleterre ou en Asie.', 'Concernant les enfants, ils ne boivent pas de café, ils boivent plutôt du chocolat chaud (c’est du chocolat en poudre avec du lait) ou bien simplement du lait qu’ils accompagnent de céréales.', 'En général, on mange une tranche de pain ou une biscotte avec du beurre, on peut y ajouter de la confiture ou du miel.', 'Vous devez savoir que beaucoup de Français trempent leurs tartines dans leur bol de café ou de lait.', 'On mange aussi des céréales avec du lait.', 'Contrairement à une idée reçue, les Français ne mangent pas de croissants ou de pains au chocolat tous les matins.', 'Les croissants, la brioche et les pains au chocolat sont des produits chers et puis ça fait grossir, alors quand on en achète c’est plutôt le dimanche matin.', 'D’ailleurs, les Français font souvent la queue le dimanche matin pour rapporter des croissants et du pain frais à toute la famille.', 'Bien sûr, plus la queue est longue, plus la boulangerie est bonne.', 'Si vous voulez acheter du bon pain le dimanche matin, choisissez une boulangerie où beaucoup de gens attendent.', 'Vous serez certains d’y trouver du bon pain.', 'On peut aussi accompagner le petit-déjeuner d’un yaourt, de fromage blanc, d’un fruit ou d’un jus de fruit.', 'En général, on ne mange pas de choses salées à part les œufs et le bacon.']   
    const list_each_sentence = []
    const array_sentence = []
    const [text,setText] = useState('')
    const lengthOfListSentence = list_sentence.length;

    for (let i = 0; i < lengthOfListSentence; i++) {
        let sentence = list_sentence.splice(0,1)
        list_each_sentence.push(sentence)
    }


    // console.log("list_each_sentence",list_each_sentence)
    // chaque array est une phrase, chaque mot est un objet dictionnaire qui contient deux key avec deux valeur: id et word
    for (let i = 0; i < list_each_sentence.length; i++) {
        let getSentence = list_each_sentence[i][0]
        let list_each_word = getSentence.split(' ')
        // chaque phrase est un ensemble du dictionnaire d'un mot
        let dic_test_sentence = []
        let  objet_sentences = {}
        for (let j = 0; j < list_each_word.length; j++) {
            // chaque mot est un objet de dictionnaire
            let dic_test_word = {}
            dic_test_word["id"] = j
            dic_test_word["word"] = list_each_word[j]
            // ajouter chaque dictionnaire dans un array pour chaque phrase
            dic_test_sentence.push(dic_test_word)
            objet_sentences["words"] = dic_test_sentence
        }
        // ajouter chaque array de phrase dans une liste qui contient tous les phrases du texte (tous les objets words (qui contient un tableau))
        array_sentence.push(objet_sentences)
        }     
    // console.log("array_sentence : ", array_sentence)


    const handleChange = (e) => {
        setText(e.target.value)        
    }

    // console.log(array_sentence.words.length)
    // style={{whiteSpace: sentence.words.length > 10 ? "pre-wrap" :"normal" }}
    //style={{wordBreak: word.id > 5 ? "break-all" : "normal" }}
    return (
        <div className="span-word">
            <h1>Les Français et le petit déjeuner.</h1>
            <Input 
            type = 'text'
            label ="Veuillez taper le mot que vous voulez marquer"
            value = {text}
            onChange = {(event) => handleChange(event)}
            />
                
            {
             ( 
                array_sentence.map((sentence,index) => 
                <p key={index}>
                <span  id={'s'+index} className='sentence'>
                
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
        


        </div>

    )    
}
export default CreateSpan;