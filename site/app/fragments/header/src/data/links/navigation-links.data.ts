import { Link } from './navigation-links.interface'

const navigationLinks: Link = {
  links: {
    nav: [
      {
        title: 'Новости',
        path: '/news',
      },
      {
        title: 'Статьи',
        path: '/articles',
      },
      {
        title: 'Интервью',
        path: '/interview',
      },
      {
        title: 'Рецензии',
        path: '/reviews',
      },
      {
        title: 'Подборки',
        path: '/selections',
      },
    ],
    drawer: [
      {
        title: 'Все материалы',
        path: '/all-materials',
      },
      {
        title: 'Кино',
        path: '/movies',
      },
      {
        title: 'Театр',
        path: '/theater',
      },
      {
        title: 'ТВ/Онлайн',
        path: '/tv-online',
      },
      {
        title: 'Главный редактор',
        path: '/chief-editor',
      },
    ],
  },
}

export { navigationLinks }
