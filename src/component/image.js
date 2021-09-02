import styled from "@emotion/styled";

const Image = styled.img`
  display: inline-block;
  width: 100%;
  border: 1px solid var(--main-1);
  margin: ${(props) => {
    return props.margin ? props.margin : 0;
  }};
`;

export default Image;
