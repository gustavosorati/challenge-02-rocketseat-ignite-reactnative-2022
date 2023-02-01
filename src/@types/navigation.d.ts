export declare global {

  namespace ReactNavigation {

    interface RootParamList {
      home: undefined
      create: undefined
      statistics: undefined
      feedback: {
        status: boolean
      }
      show: {
        id: string
        date: string
      }
      update: {
        id: string
        date: string
      }
    }
  }
}
