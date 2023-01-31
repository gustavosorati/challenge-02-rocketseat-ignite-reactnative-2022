import styled from 'styled-components/native';

type StatusProps = {
  status: boolean;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 6px 0;
  padding: 14px 16px;
  border: 1px solid ${({theme}) => theme.COLORS['gray-5']};
  border-radius: 6px;
`;

export const Left = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({theme}) => theme.COLORS['gray-4']};
  margin: 0 8px;
`;

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({status, theme}) => status === true ? theme.COLORS['green-mid'] : theme.COLORS['red-mid']};
`;
