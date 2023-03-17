import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

body {
    background: ${({ theme }) => theme.colors.body};
    font - size: 1.15em;
    margin: 0;
}`

export default GlobalStyles