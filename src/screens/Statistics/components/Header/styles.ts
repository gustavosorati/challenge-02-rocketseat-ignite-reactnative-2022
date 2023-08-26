import styled from 'styled-components/native'

interface ContainerProps {
  status?: boolean | null
}

export const Container = styled.View<ContainerProps>`
  padding-left: 24px;
  padding-right: 24px;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS['gray-5']};
  background-color: ${({ theme, status }) => {
    if (status === true) return theme.COLORS['green-light']

    if (status === false) return theme.COLORS['red-light']

    if (status === null) return theme.COLORS['gray-5']
  }};
`

export const Central = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const HiddenBlock = styled.View`
  width: 22px;
  height: 22px;
`
