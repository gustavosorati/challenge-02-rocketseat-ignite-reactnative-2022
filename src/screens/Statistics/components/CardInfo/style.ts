import styled from 'styled-components/native'

interface ContainerProps {
  status?: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 89px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  margin-bottom: 8px;

  background-color: ${({ theme, status }) => {
    if (status === true) return theme.COLORS['green-light']

    if (status === false) return theme.COLORS['red-light']

    if (status === undefined) return theme.COLORS['gray-5']
  }};
`
