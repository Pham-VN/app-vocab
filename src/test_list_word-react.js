import './test_list_words.css'
import Input from './components/form/Input'
import { useState } from 'react'
function CreateSpan() {

    // const max = 1000;
    // // height of the element including the vertical padding and border as an integer
    // //  offsetHeight d'un élément est une mesure qui comprend les bordures de l'élément, ses marges internes verticales (padding), la barre de défilement horizontale si présente et affichée, et la hauteur CSS de l'élément.
    // const heightText = document.getElementById("text").offsetHeight;
    // console.log(heightText)



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
    
    
    const handleChange = (e) => {
        setText(e.target.value)        
    }

    // Couper le texte

    const lengthArraySentence = (array_sentence.length/2+0.5);
    const cutArray1 = array_sentence.splice(0,5)
    const cutArray2 = array_sentence.splice(5,10)
    console.log("cutArray1 : ", cutArray1)
    console.log("cutArray2 : ", cutArray2)
    console.log(array_sentence)


    return (
        <div className="span-word">
            <h1>Les Français et le petit déjeuner.</h1>
            <Input 
            type = 'text'
            label ="Veuillez taper le mot que vous voulez marquer"
            value = {text}
            onChange = {(event) => handleChange(event)}
            />

            {/* Test */} <h2>Première partie du text</h2>
            <div id="text2">    
            {
             ( 
                cutArray1.map((sentence,index) => 
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

            {/* Test */} <h2>Deuxième partie du text</h2>
            <div id="text">    
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

    {/* Test */} <h2>Troisième partie du text</h2>
    <div id="text3">    
            {
             ( 
                cutArray2.map((sentence,index) => 
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


        </div>

    )    
}
export default CreateSpan;