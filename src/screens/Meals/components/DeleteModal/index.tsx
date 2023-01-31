import { useTheme } from 'styled-components/native'

import { Text } from '@components/Text'

import * as Styled from './styles'

interface Props {
  visible: boolean
  deleteModal: () => Promise<void>
  closeModal: (status: boolean) => void
}

export function DeleteModal ({ visible, closeModal, deleteModal }: Props) {
  const theme = useTheme()

  async function handleConfirm () {
    await deleteModal()
  }

  return (
    <Styled.Container
      animationType='fade'
      transparent={true}
      visible={visible}
    >
      <Styled.Content>
        <Styled.Modal>
          <Styled.ModalHeader>Deseja realmente excluir o registro da refeição?</Styled.ModalHeader>

          <Styled.ButtonsContainer>
            <Styled.Btn
              variant='secondary'
              style={{ marginRight: 8 }}
              onPress={() => { closeModal(false) }}
            >
              <Text
                size={theme.FONT_SIZE.MD}
                weight={theme.FONT_FAMILY.BOLD}
              >
                Cancelar</Text>
            </Styled.Btn>

            <Styled.Btn
              style={{ marginLeft: 8 }}
              onPress={handleConfirm}
            >
              <Text
                size={theme.FONT_SIZE.MD}
                weight={theme.FONT_FAMILY.BOLD}
                color={theme.COLORS.white}>
                Sim, excluir
              </Text>
            </Styled.Btn>
          </Styled.ButtonsContainer>
        </Styled.Modal>
      </Styled.Content>
    </Styled.Container>
  )
}
