import React from "react";
import Image from "next/image";
import Icon from "/public/klef_logo_b.svg"
import Link from "next/link";
import Paper from "@mui/material/Paper";

const Header_a = () => {
  return(
    <header>
      <Paper className="p-0 m-0" style={{display: 'grid', gridTemplateColumns: '1fr 400px'}}>
        <Link href="/">
          <Icon height={80} width={220} className="p-0 m-0"/>
        </Link>
        <p className="text-4xl p-5 border-l-2 border-l-slate-400 text-slate-600">Klef Project 仮設HP</p>
      </Paper>
    </header>
  )
}

export default Header_a;