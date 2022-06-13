import style from '../css/Container.module.css'

export default function Container(props){
    return(
        <div className={style.Container}>
            {props.children}
        </div>
    )
}