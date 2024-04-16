import CardTopic from '@core/components/bi-tasik/cards/CardTopic'
import React from 'react'
import BackupIcon from '@mui/icons-material/Backup'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import DescriptionIcon from '@mui/icons-material/Description'
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart'
import PollIcon from '@mui/icons-material/Poll'
import Typography from '@mui/material/Typography'
import { FormattedMessage } from 'react-intl'

const DataTopics: React.FC = () => {
  return (
    <>
      <Typography variant={'h5'} fontWeight={700} marginTop={8}>
        <FormattedMessage id="title.data_topics" defaultMessage="Data Topics" />
      </Typography>

      <div className="my-6 grid grid-cols gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <CardTopic
          href="/dataset"
          title={'Topik Ini adalah yang Pertama'}
          icon={<BackupIcon />}
        />

        <CardTopic
          href="/dataset"
          title={'Topik Ini adalah yang Kedua'}
          icon={<DriveFolderUploadIcon />}
        />

        <CardTopic
          href="/dataset"
          title={'Topik Ini adalah yang Ketiga'}
          icon={<QueryStatsIcon />}
        />

        <CardTopic
          href="/dataset"
          title={'Topik Ini adalah yang Keempat'}
          icon={<DescriptionIcon />}
        />

        <CardTopic
          href="/dataset"
          title={'Topik Ini adalah yang Kelima'}
          icon={<PivotTableChartIcon />}
        />

        <CardTopic
          href="/dataset"
          title={'Topik Ini adalah yang Keenam'}
          icon={<PollIcon />}
        />

        <CardTopic
          href="/dataset"
          title={'Topik Ini adalah yang Ketujuh'}
          icon={<BackupIcon />}
        />

        <CardTopic
          href="/dataset"
          title={'Topik Ini adalah yang Kedelapan'}
          icon={<DriveFolderUploadIcon />}
        />

        <CardTopic
          href="/dataset"
          title={'Topik Ini adalah yang Kesembilan'}
          icon={<QueryStatsIcon />}
        />

        <CardTopic
          href="/dataset"
          title={'Topik Ini adalah yang Kesepuluh'}
          icon={<DescriptionIcon />}
        />
      </div>
    </>
  )
}

export default DataTopics
