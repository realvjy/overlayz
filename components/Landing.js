import Image from "next/image";
import styled from "styled-components";
import { Button, ButtonLink, Container, StyledLink } from "./ReusableStyles";
import LogoIcon from "../public/overlayz.png";
import LogoShadow from "../public/logo-shadow.png";
import OverlayzStudio from '../public/overlayz-studio.png'
import Link from "next/link";
import FamilyBox from "./Family";


const Landing = () => {

    return (
        <>
            <LandingHome>
                <LogoFloating>
                    <OShadow>
                        <Image
                            src={LogoShadow}
                            unoptimized={true}
                            layout={"responsive"}
                        />
                    </OShadow>
                    <OLogo>
                        <Image
                            src={LogoIcon}
                            unoptimized={true}
                            layout={"responsive"}
                        />
                    </OLogo>
                </LogoFloating>
                <LandingContainer>
                    <ContentWrap>
                        <ContentLogo className="oicon">
                            <Image
                                src={LogoIcon}
                                unoptimized={true}
                                height={192}
                                width={192}
                            />
                        </ContentLogo>
                        <ContentLogo>
                            <Image
                                src={OverlayzStudio}
                                unoptimized={true}
                                height={192}
                                width={450}
                            />
                        </ContentLogo>
                        <ContentBtn>
                            <Link href="https://twitter.com/realvjy" passHref>
                                <ButtonLink>
                                    Contact Us
                                </ButtonLink>
                            </Link>
                        </ContentBtn>

                        <FamilyBox />

                        <Founder>
                            <h3>Founder</h3>
                            <h3 className="name">
                                <Link href="http://vjy.me" passHref>
                                    <a>
                                        @REALVJY
                                    </a>
                                </Link>
                            </h3>
                        </Founder>

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
    min-height: 100vh;
`

const LandingContainer = styled(Container)`
    
`

const ContentWrap = styled.div`
    padding: 44px;
`

const ContentLogo = styled.div`
    margin-bottom: 24px;
    display: flex;
    max-width: 500px;
    &.oicon{
        visibility: hidden;
        height: 0;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
            visibility: visible;
            height: auto;
        }
    }
`
const ContentBtn = styled.div`
    margin-top: 54px;
`


const LogoFloating = styled.div`
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
        display: none;
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
    position: fixed;
    bottom: 100px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        position: initial;
    }
    h3{
        color: var(--light-black);
        font-weight: 400;
    }
    .name{
        
        margin-left: 8px;
        font-weight: 600;
    }
    a{
        color: var(--light-black);
        &:hover{
            color: var(--white);
        }
    }
`

