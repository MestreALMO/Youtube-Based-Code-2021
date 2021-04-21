import styled from "styled-components";

export const Content = styled.div`
  display: flex;

  button {
    color: var(--clr-secundary);
    border: none;
    background: transparent;
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export const YouTubeIconAndText = styled.a`
  display: flex;
  align-content: center;
  justify-content: center;
  text-decoration: none;
  color: var(--clr-secundary);

  svg {
    display: flex;
    align-content: center;
    justify-content: center;
    color: var(--clr-red);
    font-size: 1.58rem;
  }

  p {
  }
`;

export const Logo = styled.div`
  display: flex;
`;

export const LogosWhitePart = styled.div`
  width: 1rem;
  height: 1em;
  background: var(--clr-secundary);
  position: relative;
  top: +0.3rem;
  left: -1.2rem;
  z-index: -1;
  margin-right: -1rem;
`;
