import { BiMenu } from "react-icons/bi";
import { GrYoutube } from "react-icons/gr";

import { Content, YouTubeIconAndText, Logo, LogosWhitePart } from "./styles";

const Navbar = () => {
  return (
    <>
      <Content>
        <button type="button">
          <BiMenu />
        </button>
        <YouTubeIconAndText href="https://www.youtube.com/">
          <Logo>
            <GrYoutube />
            <LogosWhitePart />
          </Logo>
          <p>YouTube</p>
          <p>br</p>
        </YouTubeIconAndText>
      </Content>
    </>
  );
};

export default Navbar;
