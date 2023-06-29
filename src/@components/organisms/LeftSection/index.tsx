import React from "react";
import { Flex } from "~/@components/atoms/Flex";
import { Text } from "~/@components/atoms/Text";
import MainCard from "~/@components/molecules/MainCard";
import { PostArray, SectionName } from "~/@interfaces/LeftSection";
import { v4 as uuidv4 } from "uuid";

const LeftSection = ({ _id, data }: { _id: SectionName; data: PostArray }) => {
  return (
    <Flex align="start">
      <Text text={_id} />
      {data.map((el) => (
        <MainCard key={uuidv4()} {...el} />
      ))}
    </Flex>
  );
};

export default LeftSection;
