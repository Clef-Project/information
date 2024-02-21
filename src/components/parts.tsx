import React from "react";
import Link from "next/link";
import { Paper } from "@mui/material";

const Parts = () => {
  return(
    <>
      <Paper className="p-1 m-1 grid grid-cols-4">
        <p className="text-xl p-1 col-span-4 border-b-2 border-slate-400">本プロジェクトの構成</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">合唱事業部</p>
        <p className="col-span-3 m-1">本プロジェクトの派生元となる合唱プロジェクトのから引き継ぐプロジェクトです。この事業のみ学内での展開とします。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">リモート合唱事業部</p>
        <p className="col-span-3 m-1">上記の事業をコロナ禍で生まれた「リモート合唱」の形で、全国の中高生を「歌声」でつなごうという事業です。みなさんから指定楽曲を歌った動画をご応募いただき、それを本事業部でMixして公開しようと思ういます。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">作詞事業部</p>
        <p className="col-span-3 m-1">「言葉」を通じて全国の中高生をつなぎたい、という事業です。フォーマットを指定してみなさんからテーマに沿った詩を募集し、それを本事業部で言葉を補いながらつなぎ合わせ、歌詞にしようというものです。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">作曲第一事業部</p>
        <p className="col-span-3 m-1">「メロディ」を通じて全国の中高生をつなぎたい、という事業です。何らかの方法でみなさんの思いついたメロディーを募集し、それを編集部でコードを付けたりして曲として仕上げようというものです。今のところLilyPond記法によるテキストベースでの入力を考えていますが、難しいので研究開発部では専用Webアプリを開発することも検討しています。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">作曲第二事業部</p>
        <p className="col-span-3 m-1">「作曲事業」に興味はあるけど、「メロディ」を考えるのは難しい。そういった人をターケッドに、ある言葉に対して「イメージ」を募集します。募集方法としては階層別にテキスト打ち込みを考えていますが、研究開発部ではマインドマップを作成するWebアプリを開発することも検討しています。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">研究開発部</p>
        <p className="col-span-3 m-1">本プロジェクトで収集した情報を捌く各事業部の負担を軽減すべく、先端技術を用いた研究開発を行っています。そのため、このプロジェクトによって収集した情報は個人を特定できない形で研究開発用途にも活用します。なお、各事業部の負担を軽減するのを目的としているため、各事業部で必要なツールの開発も兼ねています。ゆえに、このプロジェクトの中では一番<s>ブラックな</s>忙しい部署です。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400 row-span-6">編集部</p>
        <p className="col-span-3 m-1">言わずとしれた運営主体です。本プロジェクトの運営におけるほぼすべてを担当しています。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">総務課</p>
        <p className="col-span-2 m-1">本プロジェクトの事務仕事を担当しています。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">広報課</p>
        <p className="col-span-2 m-1">本プロジェクトのSNS運営・およびパンフレット・チラシの作成を担当しています。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">渉外課</p>
        <p className="col-span-2 m-1">本プロジェクトの問い合わせ対応を担当しています。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">映像制作課</p>
        <p className="col-span-2 m-1">本プロジェクトにおけるオリジナル楽曲のMV作成を担当しています。</p>
        <p className="text-lg m-1 p-1 border-r-2 border-r-slate-400">情報システム課</p>
        <p className="col-span-2 m-1">本プロジェクトのWebページ(本ページ)の運営および改修・情報システムを担当しています。</p>
      </Paper>
    </>
  )
}

export default Parts;