import styled from 'styled-components';
import { variables } from './variables';

export const Form = styled.form`
  display: flex;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 12px;
  color: ${variables.descriptionColor};
  margin-bottom: 2px;
`;
export const Select = styled.select`
  font-weight: 200;
  font-size: 12px;
  text-decoration: none;
  color: ${variables.descriptionColor};
  border: none;
  padding: 6px;
  width: 80%;
  background-color: ${variables.backgroundColor};
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
  ::placeholder {
    ${variables.descriptionColor};
  }
`;
