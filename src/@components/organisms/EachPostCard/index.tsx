import React from "react";
import styled from "styled-components";
import { Flex } from "~/@components/atoms/Flex";
import Image from "next/dist/client/image";
import ResponsiveImage from "~/@components/atoms/ResponsiveImage";
import { Text } from "~/@components/atoms/Text";
import { MainCardProp } from "~/@interfaces/MainCard";
import Link from "next/link";
import { Space } from "~/@components/atoms/Space";

const EachPostCard = ({ title, body, date, thumbnail, href, id }: MainCardProp) => {
  return (
    <EachPostContainer>
      <Flex align="center">
        <Text text={title} size={30} />
        <Space height="30px" />
        <Flex align="end">
          <Text text={date} size={15} />
        </Flex>
        <ResponsiveImage>
          <Space height="30px" />
          <Image src={thumbnail ? thumbnail : "/logo.png"} alt="logo" fill />
        </ResponsiveImage>
        <Space height="30px" />
        <Text text={body} size={20} height={140} />
      </Flex>
    </EachPostContainer>
  );
};

const EachPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
`;

export default EachPostCard;
