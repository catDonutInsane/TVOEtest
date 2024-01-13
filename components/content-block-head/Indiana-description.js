import s from "./Indiana.module.css"
import IJ from '../../public/nav-icons/IJ.png'
import Image from "next/image"



const IndianaDesc = () =>{
    return(
        <div className={s.desc}>
            <Image src={IJ} width={576} height={228}/>
            <div className={s.span_wrap}>
                <span >Неувядающий авантюрист и пытливый</span>
                <span> археолог-исследователь по‑прежнему в седле.</span>
            </div>
            
            <div className={s.buttons}>
                <button className={s.btn1}>Смотреть</button>
                <button className={s.btn2}> О Фильме</button>
            </div>
            

        </div>
    )
}
export default IndianaDesc;