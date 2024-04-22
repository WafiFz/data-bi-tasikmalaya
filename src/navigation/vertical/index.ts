// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import Login from 'mdi-material-ui/Login'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Data'
    },
    {
      title: 'Unggah Data',
      icon: Login,
      path: '/admin/data/upload',
      openInNewTab: true
    },
  ]
}

export default navigation
