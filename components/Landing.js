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
                  <img src="/overlayz-text.png" />
                </ContentLogo>
                <p>design, code and art studio </p>
                <Founder>
                  <h3>by wizard</h3>
                  <h3 className="name">
                    <Link href="http://vjy.me?ref=overlayz" passHref>
                      <a>
                        <img src="/realvjy.svg" />
                      </a>
                    </Link>
                  </h3>
                </Founder>

              </LogoText>
            </TopWrap>

            <ContentBtn>
              <Link href="https://twitter.com/overlayzstudio" passHref>
                <ButtonLink>
                  Follow along
                </ButtonLink>
              </Link>
            </ContentBtn>
            <BottomWrap>
              <FamilyBox />


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
    overflow: hidden;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        height: auto;
        overflow: auto;
    }
`

const LandingContainer = styled(Container)`
`

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    padding: 32px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        padding-left: 40px;
        padding-right: 40px;
    }
`

const ContentLogo = styled.div`
    display: flex;
    margin-top: 24px;
    margin-bottom: 16px;
    
    img{
        height: 48px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
            height: 36px;
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
    }
`
const ContentBtn = styled.div`
    margin-top: 24px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        margin-top: 20px;
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
    display: flex;
    margin-top: 24px;
    text-align: center;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        position: initial;
    }
    h3{
        color: var(--light-black);
        font-weight: 400;
        font-size: 20px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
           font-size: 16px;
        }
    }
    .name{
        margin-left: 8px;
        font-weight: 600;
        margin-top: 5px;
    }
    a{
        img{
            height: 54px;
            @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
                height: 40px;
            }
        }
        color: var(--light-black);
        &:hover{
            opacity: 0.8;
            color: var(--white);
        }
    }
`
const BottomWrap = styled.div`
    margin-top: 120px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
      margin-top: 20px;
    }
`

const TopWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20%;
    position: relative;
    &::before{
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      inset: -2px;
      opacity: .8;
      background: var(--black);
      filter: blur(12px);
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        flex-direction: column;
        padding-top: 40px;
    }
`
const LogoO = styled.div`
    img{
        height: 120px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
            height: 100px;
        }
    }
`
const LogoText = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    p{
      font-size: 18px;
      opacity: .7;
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        margin-left: 0;
    }
`