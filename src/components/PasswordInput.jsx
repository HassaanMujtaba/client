import style from '../css/PasswordInput.module.css';

export default function PasswordInput(props){
    return(
        <div>
            <div className={style.label}>
                <label htmlFor={props.id}>{props.label}</label>
            </div>
            <div className={style.field}>
                <input type="text" id={props.id} name={props.id} placeholder={props.placeholder} required={props.required}/>
            </div>
        </div>
    )
}