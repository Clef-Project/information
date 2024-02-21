import React from "react";
import { Paper, Card } from "@mui/material";

const TopAbout = () => {
  return(
    <>
      <Paper className="m-1 p-1 grid grid-cols-3">
        <p className="text-xl border-r-2 border-r-slate-400">KOSENで音楽を、<br />KOSENだからこそ音楽を。</p>
        <p className="col-span-2 m-1 p-1">エンジニアを養成する学校、「高専」。英語でも「KOSEN」と表記される。認知度は低いが、今でも日本の産業を支えている。そんな日本が誇る学校、「KOSEN」は5年制。この5年間、テクノロジーについて学ぶとともに、好きなことに打ち込むこともできる。この時間を使って1つのことに打ち込むもいいが、せっかく時間があるのならば、いろいろなものに挑戦してもよいのではないか?その1つの候補として、音楽を考えてほしい。音楽を通して、エンジニアに必須の想像力・思考力・語彙力を養うことも出来るのだから。</p>
      </Paper>
      <Paper className="m-1 p-1 grid grid-cols-3">
        <p className="text-xl border-r-2 border-r-slate-400">こんな時代でも音楽を、<br />こんな時代だからこそ音楽を。</p>
        <p className="col-span-2 m-1 p-1">新型コロナウイルス感染症の世界的大流行：パンデミックの影響で中学生時代に思うように活動できなかった。みんなで一つのものを創る機会が全然なかった。ならば、新型コロナウイルスの影響がほぼなくなった今、今度こそやろうではないか。なぜなら、私たちには離れていてもつながることが出来るツールを持っているから。</p>
      </Paper>
    </>
  )
}
export default TopAbout;