const listSentenceP1 = ['Les Français ne mangent pas beaucoup au petit-déjeuner.', 'En général, les adultes boivent un bol ou une grande tasse de café ou de café au lait.', 'Le café est assez fort, quand le café n’est pas fort, on dit que c’est du « jus de chaussette ».', 'Souvent on ajoute un peu de sucre.']
const listSentenceP2 = ['Depuis quelques années, on remarque qu’il y a de plus en plus de Français qui boivent du thé le matin.', 'C’est souvent du thé en sachet.', 'Mais le thé reste un produit assez élitiste, on n’a pas l’habitude d’en boire comme c’est le cas en Angleterre ou en Asie.']
const listSentenceP3 = ['Concernant les enfants, ils ne boivent pas de café, ils boivent plutôt du chocolat chaud (c’est du chocolat en poudre avec du lait) ou bien simplement du lait qu’ils accompagnent de céréales.']
const listSentenceP4 = ['En général, on mange une tranche de pain ou une biscotte avec du beurre, on peut y ajouter de la confiture ou du miel.', 'Vous devez savoir que beaucoup de Français trempent leurs tartines dans leur bol de café ou de lait.', 'On mange aussi des céréales avec du lait.']
const listSentenceP5 = ['Contrairement à une idée reçue, les Français ne mangent pas de croissants ou de pains au chocolat tous les matins.', 'Les croissants, la brioche et les pains au chocolat sont des produits chers et puis ça fait grossir, alors quand on en achète c’est plutôt le dimanche matin.', 'D’ailleurs, les Français font souvent la queue le dimanche matin pour rapporter des croissants et du pain frais à toute la famille.', 'Bien sûr, plus la queue est longue, plus la boulangerie est bonne.', 'Si vous voulez acheter du bon pain le dimanche matin, choisissez une boulangerie où beaucoup de gens attendent.', 'Vous serez certains d’y trouver du bon pain.']
const listSentenceP6 = ['On peut aussi accompagner le petit-déjeuner d’un yaourt, de fromage blanc, d’un fruit ou d’un jus de fruit.']
const listSentenceP7 = ['En général, on ne mange pas de choses salées à part les œufs et le bacon.']   

function extractEachSentence(lengthOfListSentence,list_sentence) {
    let list_each_sentence = []
    for (let i = 0; i < lengthOfListSentence; i++) {
        let objet_sentences = {}
        let sentence = list_sentence.splice(0,1)
        
        list_each_sentence.push(sentence)
    }
}

function extractWordsFromSentences(list_each_sentence,array_sentence) {
    for (let i = 0; i < list_each_sentence.length; i++) {
        let getSentence = list_each_sentence[i][0]
        let list_each_word = getSentence.split(' ')
        let dic_sentence = []
        let objet_sentences = {}
        for (let j = 0; j < list_each_word.length; i++) {
            let dic_word = {}
            dic_word["id"] = j
            dic_word["word"] = list_each_word[j]
            dic_sentence.push(dic_word)
            objet_sentences["words"] = dic_sentence
        }
        array_sentence.push(objet_sentences)
    }
}

// const arraySentenceParagraphe1 = []
console.log(listSentenceP1.length)
const extractEachSentenceParagraphe1 = extractEachSentence(listSentenceP1.length,listSentenceP1)
// const extractWordsFromSentencesParagraphe1 = extractWordsFromSentences
console.log(extractEachSentenceParagraphe1)