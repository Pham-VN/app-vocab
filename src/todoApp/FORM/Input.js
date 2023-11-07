const Input = ({id,type, ...inputProp}) => {
    return (
    <input 
        id={id}
        type={type}
        {...inputProp}
    ></input>
    )
}
export default Input;