import styled from 'styled-components/native';

interface ContainerProps {
  status?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({theme}) => theme.COLORS['green-light']};
  width: 100%;
  min-height: 102px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  border-radius: 8px;

  background-color: ${({theme, status}) => {
    if(status === true) return theme.COLORS['green-light'];

    if(status === false) return theme.COLORS['red-light'];

    if(status === undefined) return theme.COLORS['gray-5'];
  }};
`;

export const Icon = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 8px;
`;


