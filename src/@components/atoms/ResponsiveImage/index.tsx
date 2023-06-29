import React from "react";
import styled from "styled-components";

const ResponsiveImage = ({ children }: { children: React.ReactNode }) => {
  return <ResponsiveImageContainer>{children}</ResponsiveImageContainer>;
};

const ResponsiveImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  & > img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }
`;

export default ResponsiveImage;
