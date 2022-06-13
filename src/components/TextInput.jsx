import style from '../css/TextInput.module.css';

export default function TextInput(props){
    return(
        <div>
            <div className={style.label}>
                <label htmlFor={props.id}>{props.label}</label>
            </div>
            <div className={style.field}>
                <input type={props.type} id={props.id} name={props.id} placeholder={props.placeholder} required={props.required}/>
            </div>
        </div>
    )
}