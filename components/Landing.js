import Image from "next/image";
import styled from "styled-components";
import { Button, ButtonLink, Container, StyledLink } from "./ReusableStyles";
import LogoIcon from "../public/overlayz.png";
import LogoIcon2 from "../public/overlayz.png";
import LogoShadow from "../public/logo-shadow.png";
import OverlayzStudio from '../public/overlayz-studio.png'
import Link from "next/link";
import FamilyBox from "./Family";


const Landing = () => {

    return (
        <>
            <LandingHome>
                <LandingContainer>
                    <ContentWrap>
                        <TopWrap>
                            <LogoO>
                                <img src="/overlayz.png" />
                            </LogoO>
                            <LogoText>
                                <ContentLogo>
                                    <img src="/overlayz-studio.png" />
                                </ContentLogo>
                                <ContentBtn>
                                    <Link href="https://twitter.com/realvjy" passHref>
                                        <ButtonLink>
                                            Contact Us
                                        </ButtonLink>
                                    </Link>
                                </ContentBtn>
                            </LogoText>
                        </TopWrap>


                        <BottomWrap>
                            <FamilyBox />

                            <Founder>
                                <h3>founder</h3>
                                <h3 className="name">
                                    <Link href="http://vjy.me?ref=overlayz" passHref>
                                        <a>
                                            <img src="/realvjy.svg" />
                                        </a>
                                    </Link>
                                </h3>
                            </Founder>
                        </BottomWrap>


                    </ContentWrap>
                </LandingContainer>
            </LandingHome>
        </>

    )
};

export default Landing;


const LandingHome = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100vh;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        height: auto;
    }
`

const LandingContainer = styled(Container)`
    height: 90%;
`

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    padding: 32px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        align-items: flex-start;
        padding-left: 40px;
        padding-right: 40px;
    }
`

const ContentLogo = styled.div`
    margin-bottom: 24px;
    display: flex;
    img{
        height: 160px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
            height: 100px;
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        max-width: 85%;
    }
`
const ContentBtn = styled.div`
    margin-top: 54px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        margin-top: 32px;
    }
`


const LogoFloating = styled.div`
   
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        
    }
`

const OLogo = styled.div`
    position: absolute;
    height: 40%;
    width: 40%;
    right: 100px;
    bottom: 40%;
    /* transform-origin: 50% 100%;
    animation: rotation 50s infinite linear; */
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
`

const OShadow = styled.div`
    position: absolute;
    height: 60%;
    width: 60%;
    right: 100px;
    bottom: 20%;
    /* animation: rotation 10s infinite linear; */
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
`

const Founder = styled.div`
    margin-top: 80px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        position: initial;
        justify-content: flex-start;
    }
    h3{
        color: var(--light-black);
        font-weight: 400;
    }
    .name{
        margin-left: 8px;
        font-weight: 600;
        margin-top: 5px;
    }
    a{
        img{
            height: 20px;
        }
        color: var(--light-black);
        &:hover{
            color: var(--white);
        }
    }
`
const BottomWrap = styled.div`
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        
    }
`

const TopWrap = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10%;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        flex-direction: column;
        padding-top: 40px;
        align-items: flex-start;
    }
`
const LogoO = styled.div`
    img{
        height: 320px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
            height: 150px;
        }
    }
`
const LogoText = styled.div`
    margin-left: 60px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        margin-left: 0;
    }
`