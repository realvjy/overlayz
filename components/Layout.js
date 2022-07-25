import styled from 'styled-components'
import ReactDOM from 'react-dom';
import OverlayzStudio from '../public/react-logo.png'



export default function Layout({ children }) {
    return (
        <Main >
            {children}
        </Main>
    )
}

const Main = styled.main`
  min-height: 100vh;
`;
