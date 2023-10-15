import { Fragment } from "react";

const Textarea = ({label,nameOfid,value, onChange}) => {
    return (
        <Fragment>
        <label htmlFor={nameOfid}>{label}</label>
        <textarea 
            id = {nameOfid}
            name = {nameOfid}
            value = {value}
            onChange = {onChange}
        >   
        </textarea>
        </Fragment>
    )
}

export default Textarea;