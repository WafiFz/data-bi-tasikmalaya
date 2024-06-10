// ** Icon imports
import StorageIcon from '@mui/icons-material/Storage';
import HomeOutline from 'mdi-material-ui/HomeOutline';

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types';

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
