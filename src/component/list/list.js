import styled from "@emotion/styled";

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Item = styled.li`
  padding: 1em;
  margin: .5em;
  width: 22vw;
  border-radius: .5em;
  border: 3px solid var(--main-1);
  background: ${() => {
    let num = Math.floor(Math.random() * 4) + 2;
    return `var(--main-${num})`
  }};

  @media (max-width: 640px) {
    width: 80vw;
  }
  @media (max-width: 960px) {
    width: 45vw;
  }
`;

export { List, Item };
