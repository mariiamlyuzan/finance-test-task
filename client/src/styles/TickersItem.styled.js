import styled from 'styled-components';
import { variables } from './variables';

export const Li = styled.li`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${variables.descriptionColor};
`;
export const P = styled.p`
  color: ${variables.titleColor};
  font-size: ${({ has }) => (has ? '20px' : '12px')};
  font-weight: 600;
  margin-bottom: ${({ margin10 }) => (margin10 ? '10px' : '0px')};
  padding: ${({ padding6 }) => (padding6 ? '6px' : '0px')};
`;

export const P2 = styled.p`
  color: ${variables.titleColor};
  display: ${({ visible }) => (visible === true ? 'none' : 'flex')};
`;

export const ColorP = styled.p`
  color: ${variables.titleColor};
  font-size: ${({ has }) => (has ? '20px' : '12px')};
  font-weight: 600;
  margin-bottom: ${({ margin10 }) => (margin10 ? '10px' : '0px')};
  padding: ${({ padding6 }) => (padding6 ? '6px' : '0px')};
  background-color: ${({ category }) =>
    category > 0.5 ? '#00FF7F' : '#FF0000'};
`;

export const Span = styled.span`
  font-size: ${({ font }) => (font ? '20px' : '10px')};
  color: ${variables.descriptionColor};
  margin-bottom: 5px;
`;
export const Box = styled.div`
  flex-direction: column;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ has }) => (has ? '5px' : '12px')};
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : '#100c08'};
  width: ${({ has }) => (has ? '60px' : '40px')};
  height: 40px;
  border: ${({ border }) => (border ? '2px solid #A9A9A9' : 'none')};
  margin-right: ${({ margin }) => (margin ? '20px' : '0px')};
  color: ${variables.descriptionColor};
  font-size: ${({ has }) => (has ? '10px' : '12px')};
  border-radius: 50px;
  position: ${({ position }) => (position ? 'absolute' : 'relative')};
  right: ${({ right }) => (right ? '10px' : '0px')};
  top: ${({ top }) => (top ? '0px' : '0px')};
`;

export const Message = styled.div`
  opacity: 0;
  width: 100px;
  height: 50px;
  font-size: 10px;
  position: absolute;
  right: 10px;
  bottom: 5px;
  color: ${variables.descriptionColor};
  :hover {
    opacity: 1;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  display: ${({ visible }) => (visible === true ? 'flex' : 'none')};
`;
