import Image from "next/image";
import styled from "styled-components";
import { Container } from "./ReusableStyles";



const FamilyBox = () => {

    return (
        <Family>
            <h3>Family</h3>
            <FamWrap>
                <Fam>
                    <Link href="/" passHref>
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
                    <Link href="/" passHref>
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
                    <Link href="/" passHref>
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
                    <Link href="/" passHref>
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
                    <Link href="/" passHref>
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
                    <Link href="/" passHref>
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
                    <Link href="/" passHref>
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
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin: 12px 0;
        font-weight: 400;
        color: var(--light-black);
    }
`
const FamWrap = styled.div`
    max-width: 450px;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 12px;

`
const Fam = styled.div`

`
