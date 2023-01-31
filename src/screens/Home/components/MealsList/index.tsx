import { useTheme } from 'styled-components/native';
import { Meal } from './Meal';
import * as Styled from './styles';
import { FlatList } from 'react-native';
import { useContext } from 'react';
import { MealsContext } from '@context/MealsContext';
import { Text } from '@components/Text';
import { Button } from '@components/Button';
import { Plus } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

export function MealsList() {
  const { getMeals } = useContext(MealsContext);
  const theme = useTheme();

  const meals = getMeals();

  const {navigate} = useNavigation();

  function handleNewMeal() {
    navigate('create');
  }

  return (
    <Styled.Container>
      <Text color={theme.COLORS['gray-1']}>Refeições</Text>

      <Button
        style={{ marginTop: 8, marginBottom: 32 }}
        onPress={handleNewMeal}
      >
        <Plus color={theme.COLORS.white} size={18} style={{ marginRight: 8}} />

        <Text
          color={theme.COLORS.white}
          size={theme.FONT_SIZE.MD}
          weight={theme.FONT_FAMILY.BOLD}
        >Nova Refeição</Text>
      </Button>

      <Styled.MealsContainer>
        <FlatList
          data={meals}
          keyExtractor={(item) => `${item.id}`}
          extraData={meals}
          renderItem={({ item: meals }) => (
            <>
              <Text weight={theme.FONT_FAMILY.BOLD} size={theme.FONT_SIZE.XL}>{meals.date}</Text>
              <FlatList
                data={meals.foods}
                keyExtractor={(item) => `${Math.random()}-${item.name}`}
                style={{ marginTop: 4, marginBottom: 32 }}
                extraData={meals.foods}
                renderItem={({ item: meal }) => (
                  <Meal
                    name={meal.name}
                    time={meal.hour}
                    date={meal.date}
                    id={meal.id}
                    status={meal.status}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Styled.MealsContainer>

    </Styled.Container>
  );
}


// async function getMeals() {
//   try {
//     const response = await AsyncStorage.getItem('@meals');
//     const meals: Meals[] = response != null ? JSON.parse(response) : [];


//     console.log(meals);
//     setMeals(meals);
//   } catch(err) {
//     console.log(err);
//   }
// }

// useEffect(() => {
//   getMeals();
// }, []);
