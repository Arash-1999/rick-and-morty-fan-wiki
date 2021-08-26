import styled from "@emotion/styled";

const Button = styled.button`
  --bg: #ddd;
  --fg: #323232;
  --shadow: var(--main-1);
  padding: .5em;
  margin: 1.5em;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  border: 1px solid var(--fg);
  background: var(--bg);
  color: var(--fg);
  transition: all .1s, box-shadow .2s;
  box-shadow: .3em .3em 0 var(--shadow),
    -.3em .3em 0 var(--shadow),
    .3em -.3em 0 var(--shadow),
    -.3em -.3em 0 var(--shadow);

  &:hover {
    box-shadow: 0 0 3px 3px rgba(255, 255, 255, .3),
      1em .3em 0 var(--shadow),
      -1em -.3em 0 var(--shadow);
  }
  &:active {
    --bg: #fff;
    --fg: #000;
  }
`;

export default Button;
