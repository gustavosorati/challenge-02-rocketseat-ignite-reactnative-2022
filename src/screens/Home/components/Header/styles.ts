import styled from 'styled-components/native';


export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 16px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid ${({theme}) => theme.COLORS['gray-2']};
`;
