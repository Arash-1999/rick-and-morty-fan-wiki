import styled from "@emotion/styled";

const Heading = ({
  children,
  component,
  variant
}) => {
  // calculating size of heading
  let size = parseInt(component.match(/\d+/g)[0]);
  size = typeof(size) === "number" ? 6 - size : 1;

  // creating styled heading
  let Result = styled[component]`
    color: #323232;
    padding: .5em 1em;
    margin: .1em 0;
    border-radius: .5em;
    font-size: ${.5 + (size / 6) * 2}em;
    ${variant=== "glass" ? `
      background: rgba(255, 255, 255, .4);

      &:hover {
        background: rgba(255, 255, 255, .6);
      }
    ` : null}
  `;

  return (
    <Result>{children}</Result>
  );
};

export default Heading;
