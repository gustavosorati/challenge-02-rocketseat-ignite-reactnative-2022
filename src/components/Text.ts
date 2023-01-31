import styled from 'styled-components/native';

interface Props {
  color?: string;
  weight?: string;
  size?: number;
}

export const Text = styled.Text<Props>`
  color: ${({color, theme}) => color ? color : theme.COLORS['gray-1']};
  font-size: ${({size, theme}) => `${size ? size : theme.FONT_SIZE.LG}px`};
  font-family: ${({weight, theme}) => weight ? weight : theme.FONT_FAMILY.REGULAR};
`;
