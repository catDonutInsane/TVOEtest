import Image from "next/image";

const NewsCard = ({src,width,height, title}) =>{

    return(
        <div >
            <Image src={src} width={width} height={height}/>
            <p style={{fontFamily:'TT Norms Pro',fontSize: "28px"}}>{title}</p>

        </div>
    )
}
export default NewsCard;