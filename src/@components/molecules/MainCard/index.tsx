import React from "react";
import styled from "styled-components";
import { Flex } from "~/@components/atoms/Flex";
import Image from "next/dist/client/image";
import ResponsiveImage from "~/@components/atoms/ResponsiveImage";
import { Text } from "~/@components/atoms/Text";
import { MainCardProp } from "~/@interfaces/MainCard";
import Link from "next/link";

const MainCard = ({ title, body, date, thumbnail, href, id }: MainCardProp) => {
  return (
    <MainCardContainer>
      <Flex>
        <ResponsiveImage>
          <Image src={thumbnail ? thumbnail : "/logo.png"} alt="logo" fill />
          <Link style={{ textDecoration: "none" }} href={`/post/${id}`}>
            <Text text={title} size={20} cursor="pointer" />
          </Link>
        </ResponsiveImage>
      </Flex>
    </MainCardContainer>
  );
};

const MainCardContainer = styled.div`
  width: 100%;
  margin: 20px 0px;
  max-width: 800px;
`;

export default MainCard;
