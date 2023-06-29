import styled from "styled-components";
import { Flex } from "~/@components/atoms/Flex";
import Image from "next/dist/client/image";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <Flex direction="row" justify="space-between">
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <Image src={"/logo.png"} alt="logo" width={50} height={20} />
        </Link>
      </Flex>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  margin-left: 45px;
  margin-right: 45px;
  padding: 10px 0px;
`;

export default Header;
