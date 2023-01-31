import { Text } from '@components/Text';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { Container, Left, Separator, Status } from './styles';

interface Props {
  id: string;
  name: string;
  date: string;
  time: string;
  status: boolean;
}

export function Meal({time, name, status, id, date}: Props) {
  const theme = useTheme();

  const {navigate} = useNavigation();

  function handleShow() {
    navigate('show', { id, date});
  }

  return (
    <Container onPress={handleShow}>
      <Left>
        <Text size={theme.FONT_SIZE.SM} weight={theme.FONT_FAMILY.BOLD}>{time}</Text>
        <Separator />
        <Text color={theme.COLORS['gray-2']}>{name}</Text>
      </Left>

      <Status status={status} />
    </Container>
  );
}
