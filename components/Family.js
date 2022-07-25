import Image from "next/image";
import styled from "styled-components";
import { Container, StyledLink } from "./ReusableStyles";
import Link from "next/link";
import Three3 from "../public/3dicons.png"
import illlu from "../public/illlustrations.png"
import uilogos from "../public/uilogos.png"
import uiHues from "../public/uihues.png"
import uiprint from "../public/uiprint.png"
import bloo from "../public/bloo.png"
import contra from "../public/contra.png"
import NextA from "../public/next.png"

const FamilyBox = () => {

    return (
        <Family>
            <h3>Family</h3>
            <FamWrap>
                <Fam>
                    <Link href="https://3dicons.co?ref=overlayz" passHref>
                        <StyledLink>
                            <Image
                                src={Three3}
                                unoptimized={true}
                                height={60}
                                width={60}
                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="https://uilogos.co?ref=overlayz" passHref>
                        <StyledLink>
                            <Image
                                src={uilogos}
                                unoptimized={true}
                                height={60}
                                width={60}
                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="https://illlustrations.co?ref=overlayz" passHref>
                        <StyledLink>
                            <Image
                                src={illlu}
                                unoptimized={true}
                                height={60}
                                width={60}
                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="https://www.figma.com/community/widget/1128028298799358676/Random-Hues" passHref>
                        <StyledLink>
                            <Image
                                src={uiHues}
                                unoptimized={true}
                                height={60}
                                width={60}
                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="https://contrauikit.com?ref=overlayz" passHref>
                        <StyledLink>
                            <Image
                                src={contra}
                                unoptimized={true}
                                height={60}
                                width={60}
                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="http://bloouikit.com?ref=overlayz" passHref>
                        <StyledLink>
                            <Image
                                src={bloo}
                                unoptimized={true}
                                height={60}
                                width={60}
                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="https://uiprint.co?ref=overlayz" passHref>
                        <StyledLink>
                            <Image
                                src={uiprint}
                                unoptimized={true}
                                height={60}
                                width={60}
                            />
                        </StyledLink>
                    </Link>

                </Fam>
                <Fam>
                    <Link href="http://twitter.com/realvjy" passHref>
                        <StyledLink>
                            <Image
                                src={NextA}
                                unoptimized={true}
                                height={60}
                                width={60}
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
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 4px;
        margin: 12px 0;
        font-weight: 500;
        color: var(--light-black);
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        margin-top: 40px;
    }
`
const FamWrap = styled.div`
    max-width: 450px;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 16px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-flow: row;
        grid-gap: 24px;
        padding-right: 24px;
    }

`
const Fam = styled.div`
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {

    }
    &:hover{
        transform: scale(1.05);
    }
`
