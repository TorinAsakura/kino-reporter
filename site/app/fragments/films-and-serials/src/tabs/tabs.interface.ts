export interface TabsProps {
  selectedTab: string
  toggle: (isOpen: boolean) => void
  setSelectedTab: (selectedTab: string) => void
}

export interface Tab {
  name: string
  id: string
}
