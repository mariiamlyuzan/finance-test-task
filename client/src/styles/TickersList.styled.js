import styled from 'styled-components';
import { variables } from './variables';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`;
export const Input = styled.input`
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: ${variables.descriptionColor};
  border: none;
  padding: 8px;
  width: 40%;
  max-height: 50px;
  background-color: ${variables.inputColor};
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
  ::placeholder {
    ${variables.descriptionColor};
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
`;
