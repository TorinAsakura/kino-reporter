interface LinkProperties {
  title: string
  path: string
}

export interface Link {
  links: {
    nav: LinkProperties[]
    drawer: LinkProperties[]
  }
}
