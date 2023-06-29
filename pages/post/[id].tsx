import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useGetPostById } from "~/@hooks/api/useGetPostById";
import EachPostCard from "~/@components/organisms/EachPostCard";

const EachPost = () => {
  const { id } = useRouter().query;

  const { data, isLoading } = useGetPostById(id);

  const postData = data?.data.data.posts[0];

  return <div>{isLoading ? "" : <EachPostCard {...postData} />}</div>;
};

export default EachPost;
