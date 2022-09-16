import type { NextPage } from 'next'
import Myjs from './../Myjs'
import Header from './../header';
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styled from "styled-components"

import { useRouter } from "next/router"
import ga from "../lib/ga";


const Container = styled.div`
  text-align: center;
`;

const Home: NextPage = () => {
  return (
    <div className="container">
       <div id="back">
          <div id="back-img1"><Image src="/gotop.png" alt="arraw" width={50} height={50} /></div>
       </div>
       <Myjs />
       <Head>
        <meta charSet="utf-8" />
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="" />
        <meta name="description" content=""/>     
      </Head>

      <header>
        <Header />
      </header>

    </div>
  )
}

export default Home
