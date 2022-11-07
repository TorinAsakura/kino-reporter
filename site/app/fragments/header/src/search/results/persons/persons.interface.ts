import { Person } from '@shared/data'

export interface IPerson extends Person {}

export interface PersonsProps {
  filteredPersons: IPerson[]
}
