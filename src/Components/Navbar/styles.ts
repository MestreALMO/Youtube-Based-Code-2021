import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.7rem;
  border-bottom: solid var(--clr-primary-300) 0.1rem;

  button {
    color: var(--clr-secundary);
    border: none;
    background: transparent;
    padding: 0.2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    margin: 0 0.5rem 0 0.5rem;
    transition: background 0.3s;

    &.MenuIcon {
      font-size: 1.6rem;
      margin: 0 0.8rem 0 1rem;
    }

    &:active {
      background: var(--clr-primary-100);
    }
  }
`;

export const RightItems = styled.div`
  display: flex;
  align-items: center;
`;

export const YouTubeIconAndText = styled.a`
  display: flex;
  align-content: center;
  justify-content: center;
  text-decoration: none;
  color: var(--clr-secundary-400);

  svg {
    display: flex;
    align-content: center;
    justify-content: center;
    color: var(--clr-red-400);
    font-size: 1.58rem;
  }

  p {
    display: flex;
    align-items: center;

    &.YouTubeIconAndTextFirstP {
      margin-right: 0.1rem;
      font-weight: 700;
    }

    &:last-child {
      text-transform: uppercase;
      font-size: 0.6rem;
      margin-top: -0.4rem;
      color: var(--clr-primary-100);
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
`;

export const LogosWhitePart = styled.div`
  width: 1rem;
  height: 1em;
  background: var(--clr-secundary-400);
  position: relative;
  left: -1.2rem;
  z-index: -1;
  margin-right: -1rem;
`;

export const MiddleItems = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media screen and (min-width: 560px) {
    justify-content: flex-end;
  }

  @media screen and (min-width: 900px) {
    justify-content: center;
  }

  button {
    &.BtnMic {
      display: none;

      @media screen and (min-width: 410px) {
        display: flex;
      }
    }
  }
`;

export const SearchBox = styled.div`
  background: var(--clr-primary-500);
  display: none;
  border: solid var(--clr-primary-300) 0.08rem;
  flex: 1;
  max-width: 640px;
  margin-left: 3.4rem;

  @media screen and (min-width: 590px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  input {
    margin: 0.3rem 0;
    width: 100%;
    font-size: 1rem;
    border: none;
    background: transparent;
    color: var(--clr-secundary-400);
    margin-left: 0.4rem;
  }

  svg {
    min-width: 2rem;
    color: var(--clr-primary-100);
    margin: 0 0.3rem 0 0.4rem;
  }

  button {
    all: unset;
    cursor: pointer;
    background: var(--clr-primary-300);
    color: var(--clr-primary-100);
    width: 100%;
    font-size: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
  }
`;

export const LeftItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogInButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 7.9rem;
  margin-right: 0.3rem;
  height: 2.5rem;
  border: solid var(--clr-blue-400) 0.01rem;
  text-decoration: none;
  color: var(--clr-blue-400);
  border-radius: 3%;

  svg {
    font-size: 1.4rem;
    margin-right: 0.6rem;
  }

  p {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
