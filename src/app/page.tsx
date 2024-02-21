import React from "react";
import Image from "next/image";
import Header_a from "../components/header";
import TopAbout from "../components/top_about";
import TopWhy from "../components/top_why";
import LogoWhy from "@/components/logo_why";
import NameWhy from "@/components/name_why";
import Parts from "@/components/parts";
import Sns from "@/components/sns";

const Page = () => {
  return(
    <>
      <Header_a />
      <TopAbout />
      <TopWhy />
      <LogoWhy />
      <NameWhy />
      <Parts />
      <Sns />
    </>
  )
}

export default Page;