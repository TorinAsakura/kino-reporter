interface Data {
  title: string
  path: string
}

export interface Link {
  data: {
    nav: Data[]
    drawer: Data[]
  }
}
