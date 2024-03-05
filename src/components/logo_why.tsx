import * as React from "react";
import Logoa from "/public/klef_logo_a.svg"
import { Paper } from "@mui/material";

const LogoWhy = () => {
  return(
    <>
      <Paper className="grid m-1 p-1" style={{gridTemplateColumns: "80px 1fr"}}>
        <p className="text-xl col-span-2">ロゴの由来(担当デザイナーより)</p>
        <Logoa />
        <p>まず、ClefということでTreble Clef : ト音記号を簡略化して中央に配置しました。 <br />
        また、解像度の高い音質と言われているレコードをイメージしてト音記号を図式化したときの円に加えて、外側にも円を配置しました。レコードは針で音を鳴らす形なので、ト音記号の上側のしずく型を読み取りヘッドに見立てました。 <br />
        そして、未来への希望を明るく前向きな桜色で、内に秘めた思いをくすみパステル調の水色で表しました。境界線に使われている青葉色は前向きな希望と相反する不安の間に立つ私たちを表します。  
        加えて、水色とピンク色は、典型的な"男の子"と"女の子"のイメージカラーであるため、性別に悩む人を少しでも音楽の力・テクノロジーの力で支えたいという代表者の思いも込められています。</p>
      </Paper>
    </>
  )
}

export default LogoWhy;
