/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import COLOR from 'constants/color';

const defaultProps = {
  width: 'auto',
  height: 'auto',
  margin: '0',
  padding: '0',
  fontSize: '1rem',
  lineHeight: '120%',
  color: COLOR.font.main,
  fontWeight: '800',
  background: 'transparent',
};

const FlexTextBox = (props) => {
  const {
    children,
    width,
    height,
    padding,
    margin,
    fontSize,
    color,
    fontWeight,
    lineHeight,
    background,
  } = props;

  return (
    <div
      css={css`
        width: ${width};
        height: ${height};
        margin: ${margin};
        padding: ${padding};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        line-height: ${lineHeight};
        text-align: left;
        color: ${color};
        background: ${background};
      `}
    >
      {children}
    </div>
  );
};
FlexTextBox.defaultProps = defaultProps;

export default FlexTextBox;
