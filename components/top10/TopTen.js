import Image from "next/image";
import s from "./TopTen.module.css";
import top1 from "../../public/top-pictures/top1.png";
import top2 from "../../public/top-pictures/top2.png";
import top3 from "../../public/top-pictures/top3.png";
const TopTen = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.span_title1}>ТОП-10</span>
      <span className={s.span_title}>просмотров за неделю</span>
      <div className={s.card_wrapper}>
        <div className={s.card}>
          <span>1</span>
          <Image className={s.img} src={top1} width={399} height={597} />
        </div>
        <div className={s.card}>
          <span>2</span>
          <Image className={s.img} src={top2} width={399} height={597} />
        </div>
        <div className={`${s.card} ${s.card_3}`} id="card_3">
          <span>3</span>
          <Image className={s.img} src={top3} width={231} height={597} />
        </div>
      </div>
    </div>
  );
};
export default TopTen;
