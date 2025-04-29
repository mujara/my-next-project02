import style from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className={style.top}>
      <div>
        <h1 className={style.title}>テクノロジーの力で世界を変える</h1>
        <p className={style.description}>あああああああ</p>
      </div>
      <Image
        className={style.bgimg}
        src="/img-mv.jpg"
        alt=""
        fill
      />
    </section>
  );
}
