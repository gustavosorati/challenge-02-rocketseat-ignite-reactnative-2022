import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { MealsList } from './components/MealsList';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Banner />

      <MealsList />
    </Container>
  );
}
