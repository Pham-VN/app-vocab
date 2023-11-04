const listSentenceP1 = ['Les Français ne mangent pas beaucoup au petit-déjeuner.', 'En général, les adultes boivent un bol ou une grande tasse de café ou de café au lait.', 'Le café est assez fort, quand le café n’est pas fort, on dit que c’est du « jus de chaussette ».', 'Souvent on ajoute un peu de sucre.']
const listSentenceP2 = ['Depuis quelques années, on remarque qu’il y a de plus en plus de Français qui boivent du thé le matin.', 'C’est souvent du thé en sachet.', 'Mais le thé reste un produit assez élitiste, on n’a pas l’habitude d’en boire comme c’est le cas en Angleterre ou en Asie.']
const listSentenceP3 = ['Concernant les enfants, ils ne boivent pas de café, ils boivent plutôt du chocolat chaud (c’est du chocolat en poudre avec du lait) ou bien simplement du lait qu’ils accompagnent de céréales.']
const listSentenceP4 = ['En général, on mange une tranche de pain ou une biscotte avec du beurre, on peut y ajouter de la confiture ou du miel.', 'Vous devez savoir que beaucoup de Français trempent leurs tartines dans leur bol de café ou de lait.', 'On mange aussi des céréales avec du lait.']
const listSentenceP5 = ['Contrairement à une idée reçue, les Français ne mangent pas de croissants ou de pains au chocolat tous les matins.', 'Les croissants, la brioche et les pains au chocolat sont des produits chers et puis ça fait grossir, alors quand on en achète c’est plutôt le dimanche matin.', 'D’ailleurs, les Français font souvent la queue le dimanche matin pour rapporter des croissants et du pain frais à toute la famille.', 'Bien sûr, plus la queue est longue, plus la boulangerie est bonne.', 'Si vous voulez acheter du bon pain le dimanche matin, choisissez une boulangerie où beaucoup de gens attendent.', 'Vous serez certains d’y trouver du bon pain.']
const listSentenceP6 = ['On peut aussi accompagner le petit-déjeuner d’un yaourt, de fromage blanc, d’un fruit ou d’un jus de fruit.']
const listSentenceP7 = ['En général, on ne mange pas de choses salées à part les œufs et le bacon.']   

function extractEachSentence(lengthOfListSentence,list_sentence) {
    const array_sentence = []

    for (let i = 0; i < lengthOfListSentence; i++) {
        let dic_sentence = []

        let objet_sentences = {}

        let arraySentence = list_sentence.splice(0,1)
        // convertir array in sentence
        let sentenceString = arraySentence.toString()
        // couper chaque mot et mettre dans un array
        let arrayWord = sentenceString.split(' ')
        // on boucle pour chaque array de mot, pour créer un objet de mot qui contient un id et un mot
        for (let j = 0; j < arrayWord.length; j++) {
            let dic_word = {}
            dic_word["id"] = j
            dic_word["word"] = arrayWord[j]

            dic_sentence.push(dic_word)
            objet_sentences["words"] = dic_sentence


        }
        array_sentence.push(objet_sentences)

    }
    return array_sentence;
}
const lengthOfListSentenceP1 = listSentenceP1.length;
const listParagraphe1 = extractEachSentence(lengthOfListSentenceP1,listSentenceP1)

const lengthOfListSentenceP2 = listSentenceP2.length;
const listParagraphe2 = extractEachSentence(lengthOfListSentenceP2,listSentenceP2)

const lengthOfListSentenceP3 = listSentenceP3.length;
const listParagraphe3 = extractEachSentence(lengthOfListSentenceP3,listSentenceP3)

const lengthOfListSentenceP4 = listSentenceP4.length;
const listParagraphe4 = extractEachSentence(lengthOfListSentenceP4,listSentenceP4)

const lengthOfListSentenceP5 = listSentenceP5.length;
const listParagraphe5 = extractEachSentence(lengthOfListSentenceP5,listSentenceP5)

const lengthOfListSentenceP6 = listSentenceP6.length;
const listParagraphe6 = extractEachSentence(lengthOfListSentenceP6,listSentenceP6)


const lengthOfListSentenceP7 = listSentenceP7.length;
const listParagraphe7 = extractEachSentence(lengthOfListSentenceP7,listSentenceP7)

export {
    listParagraphe1,listParagraphe2,listParagraphe3,listParagraphe4,listParagraphe5,listParagraphe6,listParagraphe7
}