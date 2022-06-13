import style from '../css/CheckBox.module.css';

export default function CheckBox(props){
    return(
        <div>
            <div className={style.field}>
                <input type="checkbox" id={props.id} name={props.id}/> <label htmlFor={props.id}>{props.label}</label>
            </div>
        </div>
    )
}