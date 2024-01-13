import s from "./Indiana.module.css"
import Image from "next/image"
import IndianaPNG from "../../public/nav-icons/Indiana.png"


const Indiana = () =>{
    return(
        <div className={s.wrapper}>
            <Image src={IndianaPNG} width={1250} height={800} alt="Indiana"/>
            

        </div>
    )
}
export default Indiana;