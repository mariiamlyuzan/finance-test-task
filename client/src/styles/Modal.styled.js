import styled from 'styled-components';
import { variables } from './variables';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 160px;
  max-width: 300px;
  width: 100%;
  padding: 30px 12px 12px 12px;
  background-color: ${variables.backgroundColor};
  border: 2px solid ${variables.descriptionColor};
  border-radius: 8px;

  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
