import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
  margin: 0 -15px -15px -15px;
`;

