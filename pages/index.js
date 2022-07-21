import Head from 'next/head'
import Image from 'next/image'
import styled from "styled-components";
import Landing from '../components/Landing';
import { NextSeo } from 'next-seo';


export default function Home() {
  return (
    <>
      <Landing />
    </>
  )
}

const StickBottom = styled.div`
  
`

const TopSection = styled.div`
  
`
