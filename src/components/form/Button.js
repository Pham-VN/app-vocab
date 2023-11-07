
const ButtonSubmit = ({index,onClick,children}) => {
    return (
    <button id={index} onClick={onClick}>{children}</button>)
}
export default ButtonSubmit;
