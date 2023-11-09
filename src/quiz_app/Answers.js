import InputRadio from "./InputRadio.js"
const Answers = ({reponse,children,index}) => {
    return (
        <div className="answers" key={index}>
        <label htmlFor={reponse}>
         <InputRadio
            className='radio'
            type="radio"
            id={index}
            name="partieDuDiscours"
            value={reponse}
         />
         {children}
       </label>
       </div>
    )   
}
export default Answers