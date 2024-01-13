import s from "./NewsBlock.module.css"
import NewsCard from "./NewsCard/NewsCard"
import Card1 from "../../public/news-pictures/Card1.png"
import Card2 from "../../public/news-pictures/Card2.png"
import Card3 from "../../public/news-pictures/Card3.png"
import Card4 from "../../public/news-pictures/Card4.png"


const NewsBlock = () =>{

    return(
        <div className={s.wrapper}>
            <span style={{fontFamily:'TT Norms Pro',fontSize: "40px"}}>Новинки</span>
            <div className={s.card_wrapper}>
                <NewsCard src={Card1} width={399} height={597} title={"Синий жук"}/>
                <NewsCard src={Card2} width={399} height={597} title={"Домашняя игра"}/>
                <NewsCard src={Card3} width={399} height={597} title={"Салют 7"}/>
                <NewsCard src={Card4} width={399} height={597} title={"Поймай меня, если сможешь"}/>
            </div>

        </div>
    )
}
export default NewsBlock;