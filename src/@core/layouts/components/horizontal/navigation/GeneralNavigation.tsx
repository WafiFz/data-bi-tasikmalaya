import { FormattedMessage } from 'react-intl'

export const Navigation = [
  {
    page: <FormattedMessage id="nav.home" defaultMessage="Beranda" />,
    path: '/'
  },
  {
    page: <FormattedMessage id="nav.dataset" defaultMessage="Dataset" />,
    path: '/dataset',
    newTab: false
  }

  // {
  //   page: <FormattedMessage id="nav.publications" defaultMessage="Publikasi" />,
  //   path: '/publikasi',
  //   newTab: true
  // },
  // {
  //   page: <FormattedMessage id="nav.about" defaultMessage="Tentang" />,
  //   path: '/tentang'
  // }
]
