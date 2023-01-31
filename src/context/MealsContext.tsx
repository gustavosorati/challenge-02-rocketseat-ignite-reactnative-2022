import { createContext, type ReactNode, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

export interface IMealDTO {
  id: string
  name: string
  description: string
  date: string
  hour: string
  status: boolean
}

interface MealsGroupDTO {
  id: string
  date: string
  foods: IMealDTO[]
}

interface MealsContextDTO {
  meals: MealsGroupDTO[]
  registerMeal: ({ name, description, date, hour, status }: Omit<IMealDTO, 'id'>) => Promise<void>
  updateMeal: ({ id, name, description, date, hour, status }: IMealDTO) => Promise<void>
  deleteMeal: (id: string, date: string) => Promise<void>
  getMeals: () => MealsGroupDTO[]
}

export const MealsContext = createContext<MealsContextDTO>({} as MealsContextDTO)

interface ProviderProps {
  children: ReactNode
}

export const MealsContextProvider = ({ children }: ProviderProps) => {
  const [meals, setMeals] = useState<MealsGroupDTO[]>([])

  async function fetchtMeals () {
    try {
      const response = await AsyncStorage.getItem('@meals')
      const meals: MealsGroupDTO[] = response != null ? JSON.parse(response) : []

      setMeals(() => {
        return [...meals]
      })
    } catch (err) {
      console.log(err)
      setMeals([])
    }
  }

  async function registerMeal ({ name, description, date, hour, status }: Omit<IMealDTO, 'id'>) {
    try {
      const newMeal = {
        id: String(uuid.v4()),
        name,
        description,
        date,
        hour,
        status
      }

      const newMeals = [...meals]
      if (!meals.length) {
        newMeals.push({
          id: String(uuid.v4()),
          date: newMeal.date,
          foods: [newMeal]
        })

        setMeals(() => [...newMeals])
        await AsyncStorage.setItem('@meals', JSON.stringify(newMeals))
        return
      }

      const mealIndex = newMeals.findIndex(meal => meal.date === date)
      if (mealIndex === -1) {
        newMeals.push({
          id: String(uuid.v4()),
          date: newMeal.date,
          foods: [newMeal]
        })

        setMeals(() => [...newMeals])
        await AsyncStorage.setItem('@meals', JSON.stringify(newMeals))
        return
      }

      newMeals[mealIndex].foods.push(newMeal)

      setMeals(() => [...newMeals])
      await AsyncStorage.setItem('@meals', JSON.stringify(newMeals))
    } catch (err) {
      console.log(err)
    }
  }

  async function updateMeal ({ id, name, description, date, hour, status }: IMealDTO) {
    try {
      if (!meals.length) throw new Error('Meals array is empty.')

      const updatedMeals = [...meals]
      const mealIndex = updatedMeals.findIndex(m => m.date === date)
      if (mealIndex === -1) throw new Error('Meal don\'t exists.')

      const foodIndex = updatedMeals[mealIndex].foods.findIndex(f => f.id === id)
      if (foodIndex === -1) throw new Error('Food don\'t exists.')

      updatedMeals[mealIndex].foods[foodIndex] = {
        id,
        name,
        description,
        date,
        hour,
        status
      }

      setMeals(() => {
        return [...updatedMeals]
      })
      await AsyncStorage.setItem('@meals', JSON.stringify(updatedMeals))
    } catch (err) {
      console.log(err)
    }
  }

  async function deleteMeal (id: string, date: string) {
    try {
      if (!meals.length) throw new Error('Meals array is empty.')

      const mealIndex = meals.findIndex(m => m.date === date)
      if (mealIndex === -1) throw new Error('Meal don\'t exists.')

      const updatedMeals = [...meals]

      if (updatedMeals[mealIndex].foods.length === 1) {
        updatedMeals.splice(mealIndex, 1)

        setMeals(updatedMeals)
        await AsyncStorage.setItem('@meals', JSON.stringify(updatedMeals))
        return
      }

      updatedMeals[mealIndex].foods = updatedMeals[mealIndex].foods.filter(f => f.id !== id)

      setMeals(updatedMeals)
      await AsyncStorage.setItem('@meals', JSON.stringify(updatedMeals))
      return
    } catch (err) {
      console.log(err)
    }
  }

  function getMeals () {
    const orderedMeals = meals.sort((a, b) => {
      const firstDateArray = a.date.split('/')
      const secondDateArray = b.date.split('/')

      const firstDate = new Date(`${firstDateArray[2]}-${firstDateArray[1]}-${firstDateArray[0]}`)
      const secondDate = new Date(`${secondDateArray[2]}-${secondDateArray[1]}-${secondDateArray[0]}`)

      return firstDate.getTime() - secondDate.getTime()
    })

    orderedMeals.forEach((meal) => {
      meal.foods.sort((a, b) => {
        const firstDateArray = a.date.split('/')
        const secondDateArray = b.date.split('/')

        const aDate = new Date(`${firstDateArray[2]}-${firstDateArray[1]}-${firstDateArray[0]}T${a.hour}`)
        const bDate = new Date(`${secondDateArray[2]}-${secondDateArray[1]}-${secondDateArray[0]}T${b.hour}`)

        return aDate.getTime() - bDate.getTime()
      })
    })

    return orderedMeals
  }

  useEffect(() => {
    void fetchtMeals()
  }, [])

  return (
    <MealsContext.Provider value={{
      meals,
      registerMeal,
      updateMeal,
      deleteMeal,
      getMeals
    }}>
      {children}
    </MealsContext.Provider>
  )
}
