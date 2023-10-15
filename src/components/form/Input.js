const Input = ({type,name,label,...props}) => {
return (
    <label>
          {label} 
    <input 
      type={type}
      name={name}
      {...props}
    />
  </label>
)
}
export default Input;