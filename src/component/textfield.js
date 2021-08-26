import styled from "@emotion/styled";

const Textfield = styled.input`
  padding: .5em;
  max-width: 100%;
  border: 3px solid var(--main-1);
  outling: none;
  font-size: 1em;
  font-weight: 500;
  background: rgba(255, 255, 255, .6);
  
  &:hover {
    box-shadow: 5px 5px 5px rgba(255, 255, 255, .1),
      5px -5px 5px rgba(255, 255, 255, .1),
      -5px 5px 5px rgba(255, 255, 255, .1),
      -5px -5px 5px rgba(255, 255, 255, .1);
    background: rgba(255, 255, 255, .65);
  }
  &:focus {
    background: rgba(255, 255, 255, .7);
  }
`;

export default Textfield;
