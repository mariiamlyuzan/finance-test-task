import styled from 'styled-components';
import { variables } from './variables';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;
export const Label = styled.label``;
export const Input = styled.input`
  font-weight: 200;
  font-size: 12px;
  text-decoration: none;
  color: ${variables.descriptionColor};
  border: none;
  padding: 8px;
  width: 100%;
  background-color: ${variables.inputColor};
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
  ::placeholder {
    ${variables.descriptionColor};
  }
`;

export const Span = styled.span`
  color: red;
  font-size: 12px;
`;

export const Div = styled.div`
  width: 100%;
`;
