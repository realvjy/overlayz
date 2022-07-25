import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
  --bg-light-yellow: #F2F2EE;
  --bg-light-blue: #EDF2FF;
  --bg-light-red: #F2EEEE;
  
  --light-yellow: #FFF6C5;
  --yellow: #F8C231;
    
  --light-red: #FFC5EC;
  --red: #FF6969;
  --pink: #ED81FF;
  --light-pink: #FFE9FA;
  
  --blue: #00A3FF;
  --light-blue: #B7F2FF;
  
  --white: #F1F2F0;
  --black: #20252F;
  --light-black: #7A7A7B;

  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  line-height: normal;
  transition: all .1s ease;
}

html{
    scroll-behavior: smooth;
}
body {
  font-family: 'Space Grotesk', sans-serif;
  background: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};
  text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-image: url('/dots.png');

}

a{
  color: ${({ theme }) => theme.text.primary};
}

.main{
    min-height: 100vh;
    
}
.toast-container {
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
}
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  /* @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    width: 100%;
  } */
}
`;

export default GlobalStyle;