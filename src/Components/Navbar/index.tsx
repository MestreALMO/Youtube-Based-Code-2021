import { BiMenu } from "react-icons/bi";
import { GrYoutube } from "react-icons/gr";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoAppsSharp } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaUserCircle, FaKeyboard } from "react-icons/fa";
import { MdMic } from "react-icons/md";

import {
  Content,
  YouTubeIconAndText,
  Logo,
  LogosWhitePart,
  LogInButton,
  LeftItems,
  RightItems,
  SearchBox,
  MiddleItems,
} from "./styles";

const Navbar = () => {
  return (
    <>
      <Content>
        <RightItems>
          <button className="MenuIcon" type="button">
            <BiMenu />
          </button>
          <YouTubeIconAndText href="https://www.youtube.com/">
            <Logo>
              <GrYoutube />
              <LogosWhitePart />
            </Logo>
            <p className="YouTubeIconAndTextFirstP">YouTube</p>
            <p>br</p>
          </YouTubeIconAndText>
        </RightItems>

        <MiddleItems>
          <SearchBox>
            <input type="text" placeholder="Pesquisar" />
            <FaKeyboard />
            <button type="button">
              <BiSearchAlt2 />
            </button>
          </SearchBox>

          <button className="BtnMic" type="button">
            <MdMic />
          </button>
        </MiddleItems>

        <LeftItems>
          <button type="button">
            <IoAppsSharp />
          </button>
          <button type="button">
            <HiOutlineDotsVertical />
          </button>

          <div>
            <LogInButton className="FazerLogin" href="/">
              <FaUserCircle />
              <p>Fazer Login</p>
            </LogInButton>
          </div>
        </LeftItems>
      </Content>
    </>
  );
};

export default Navbar;
