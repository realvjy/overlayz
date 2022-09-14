import Image from "next/image";
import styled from "styled-components";
import { Container, StyledLink } from "./ReusableStyles";
import Link from "next/link";
const Three3 = "/3dicons.png"
const illlu = "/illlustrations.png"
const uilogos = "/uilogos.png"
const uiHues = "/uihues.png"
const uiprint = "/uiprint.png"
const bloo = "/bloo.png"
const contra = "/contra.png"
const NextA = "/next.png"
const Designletter = "/designletter.png"

const FamilyBox = () => {

    return (
        <Family>
            <h3>Our Family</h3>
            <FamWrap>
                <Fam>
                    <Link href="https://3dicons.co?ref=overlayz" passHref>
                        <StyledLink>
                            <img
                                src={Three3}
                                unoptimized={true}

                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="https://uilogos.co?ref=overlayz" passHref>
                        <StyledLink>
                            <img
                                src={uilogos}
                                unoptimized={true}

                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="https://illlustrations.co?ref=overlayz" passHref>
                        <StyledLink>
                            <img
                                src={illlu}
                                unoptimized={true}

                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="http://designletter.co/?ref=overlayz" passHref>
                        <StyledLink>
                            <img
                                src={Designletter}
                                unoptimized={true}

                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="https://www.figma.com/community/widget/1128028298799358676/Random-Hues" passHref>
                        <StyledLink>
                            <img
                                src={uiHues}
                                unoptimized={true}

                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="https://contrauikit.com?ref=overlayz" passHref>
                        <StyledLink>
                            <img
                                src={contra}
                                unoptimized={true}

                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="http://bloouikit.com?ref=overlayz" passHref>
                        <StyledLink>
                            <img
                                src={bloo}
                                unoptimized={true}

                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="https://uiprint.co?ref=overlayz" passHref>
                        <StyledLink>
                            <img
                                src={uiprint}
                                unoptimized={true}

                            />
                        </StyledLink>
                    </Link>

                </Fam>


            </FamWrap>
        </Family>
    )
};

export default FamilyBox;


const Hero = styled.div`

`

const Family = styled.div`
    margin-top: 60px;
    h3{
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 6px;
        margin: 12px 0;
        font-weight: 600;
        color: var(--light-black);
        text-align: center;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
            text-align: left;
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        margin-top: 100px;
        text-align: left;
    }
`
const FamWrap = styled.div`
    max-width: 450px;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 16px;
    
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        grid-template-columns: repeat(5, 1fr);
        grid-auto-flow: row;
        grid-gap: 24px;
        justify-content: center;
    }
`
const Fam = styled.div`
    img{
        height: 50px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
            height: 40px;
        }
    }
   
    &:hover{
        transform: scale(1.05);
    }
`
