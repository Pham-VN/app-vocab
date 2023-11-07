import InputRadio from "./InputRadio.js"
const Answers = ({reponse,children,index}) => {
    return (
        <div className="card-body" key={index}>
        <label htmlFor={reponse}>
         <InputRadio
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