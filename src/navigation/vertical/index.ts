// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import Login from 'mdi-material-ui/Login'
import StorageIcon from '@mui/icons-material/Storage';

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
      title: 'Kelola Data',
      icon: StorageIcon,
      path: '/admin/data',
      openInNewTab: true
    },
  ]
}

export default navigation
