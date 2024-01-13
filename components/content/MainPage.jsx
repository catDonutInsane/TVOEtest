import Indiana from "../content-block-head/Indiana";
import NewsBlock from "@/components/news/NewsBlock"
import IndianaDesc from "@/components/content-block-head/Indiana-description"
import TopTen from "../top10/TopTen";
const MainPage = () =>{
    return(
        <div style={{width:"1724px"}}>
            <Indiana/>
            <IndianaDesc/>
            <NewsBlock/>
            <TopTen/>
        </div>
    )
}
export default MainPage;