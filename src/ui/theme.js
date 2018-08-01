const css = String.raw;

export const font = {
  formElement: "Roboto"
};

export const globalStyles = css`
  html,
  body {
    font-size: 14px;
    font-family: ${font.formElement};
    -webkit-font-smoothing: antialiased;
    margin: 20px;
    padding: 0;
    background: #ffff;
    width: 1000px;
  }
  * {
    box-sizing: border-box;
  }
`;
