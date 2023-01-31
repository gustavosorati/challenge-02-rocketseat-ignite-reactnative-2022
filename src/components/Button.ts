import styled, { css } from 'styled-components/native';

interface Props {
  variant?: 'primary' | 'secondary'
}

export const Button = styled.TouchableOpacity<Props>`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS['gray-2']};
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex-direction: row;

  ${({variant}) => variant === 'primary' && css`
    background-color: theme.COLORS['gray-2'];
  `}

  ${({variant, theme}) => variant === 'secondary' && css`
    background-color: ${theme.COLORS['white']};
    border: 2px solid ${theme.COLORS['gray-2']};
  `}
`;
