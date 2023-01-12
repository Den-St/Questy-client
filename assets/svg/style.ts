import styled, {css} from 'styled-components';

export const disabledStyles = css`
  opacity: 0.5;
  pointer-events: none;
`;

export const StyledSvg = styled.svg<{backgroundColor?:string,margin?:string,padding?:string,position?:string}>`
  ${({color}) => color && `color: ${color};`}
  ${({fill}) => fill && `fill: ${fill};`}
  ${({stroke}) => stroke && `stroke: ${stroke};`}
  ${({backgroundColor}) => backgroundColor && `background-color:${backgroundColor};`}
  ${({margin}) => margin && `margin: ${margin};`}
  ${({padding}) => padding && `padding: ${padding};`}
  ${({position}) => position && `position: ${position};`}

`;