import styled from 'styled-components/native'

interface HeaderProps {
  status?: boolean
}

export const Header = styled.View<HeaderProps>`
  padding-left: 24px;
  padding-right: 24px;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS['gray-5']};
  background-color: ${({ theme, status }) => {
    if (status === true) return theme.COLORS['green-light']

    if (status === false) return theme.COLORS['red-light']
  }};
`

export const HiddenBlock = styled.View`
  width: 22px;
  height: 22px;
`
