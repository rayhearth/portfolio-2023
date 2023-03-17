import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font - size: 1.15em;
    margin: 0;
}`

export default GlobalStyles