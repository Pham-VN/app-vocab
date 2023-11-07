const Button = ({id, type, children,...buttonProp}) => {
    return (
        <button 
        id={id}
        type={type}
        {...buttonProp}
        >{children}</button>
    )
}
export default Button;