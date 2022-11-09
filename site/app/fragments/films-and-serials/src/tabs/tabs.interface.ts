export interface TabsProps {
  selectedTab: string
  setSelectedTab: (selectedTab: string) => void
}

export interface Tab {
  name: string
  id: string
}
