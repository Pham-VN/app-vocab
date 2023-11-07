
const Button = ({nameCLass,children, ...buttonProps}) => {
    return (
        <div>
            <button className={nameCLass} {...buttonProps}>{children}</button>
        </div>
    )
}
export default Button;