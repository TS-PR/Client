import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import MainCard from "~/@components/molecules/MainCard";
import { v4 as uuidv4 } from "uuid";
import { useGetSection } from "~/@hooks/api/useGetSection";
import LeftSection from "~/@components/organisms/LeftSection";
import Header from "~/@components/organisms/Header";

export default function Home() {
  const [id, setId] = useState();
  const { data, isLoading } = useGetSection(id);

  const postsByCategory = data?.data.data;

  useEffect(() => {
    if (data) {
      console.log(data);
      console.log(isLoading);
    }
  });
  return (
    <>
      <NextSeo
        title="home"
        description="home description"
        canonical="https://example.com"
        openGraph={{
          url: "https://example.com",
        }}
      />
      <HomeContainer>
        <LeftAsideContainer>
          <Flex direction="column" align="start">
            <Text text={"카테고리별 기사"} size={14} />
            {isLoading ? "" : postsByCategory?.map((el: any) => <LeftSection key={uuidv4()} {...el} />)}
          </Flex>
        </LeftAsideContainer>

        <MainContainer>
          <Flex direction="column" align="start">
            <Text text={"인기 있는 기사"} size={14} />
          </Flex>
        </MainContainer>

        <RightAsideContainer>
          <Flex direction="column" align="start">
            <Text text={"최근 댓글"} size={14} />
          </Flex>
        </RightAsideContainer>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 66fr 34fr;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 3fr 4fr 3fr;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftAsideContainer = styled.aside`
  padding: 20px;
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: scroll;
  }

  @media screen and (max-width: 767px) {
    order: 3;
  }
`;

const RightAsideContainer = styled.aside`
  padding: 20px;
  @media screen and (max-width: 767px) {
    order: 2;
  }
`;

const MainContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: 768px) {
    min-width: 630px;
  }

  @media screen and (max-width: 767px) {
    order: 1;
  }
  height: 5000px;
`;
