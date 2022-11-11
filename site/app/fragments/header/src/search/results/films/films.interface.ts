import { Film } from '@shared/data'

export interface IFilm extends Film {}

export interface FilmsProps {
  filteredFilms: IFilm[]
}
