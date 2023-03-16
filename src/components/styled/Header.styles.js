import styled from "styled-components";

export const Image = styled.img`
  :first-child {
  width: 250px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }`

export const BgImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  top: 0;
  left: 0;
  z-index: -1;
  `

export const Cloud = styled.img`
  position: absolute;
  z-index:500;
    
  `