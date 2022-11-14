export interface TabsProps {
  selectedTab: string
  setIsOpen: (isOpen: boolean) => void
  setSelectedTab: (selectedTab: string) => void
}

export interface Tab {
  name: string
  id: string
}
