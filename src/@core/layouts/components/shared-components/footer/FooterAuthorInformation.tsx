import React from 'react'
import Logo from '@core/components/bi-tasik/logo'
import Typography from '@mui/material/Typography'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'

const FooterAuthorInformation: React.FC = () => {
  return (
    <div className="flex p-2 md:p-8">
      <Logo path="/images/logos/bi-no-text.svg" height="100px" width="100px" />

      <div className="ml-8">
        <Typography variant="h6" fontWeight={800}>
          Bank Indonesia Tasikmalaya
        </Typography>

        <Typography>
          Jl. Sutisna Senjaya No.19, Tawangsari, Kec. Tawang, Kab. Tasikmalaya,
          Jawa Barat 46112
        </Typography>

        <div className="flex mt-2 gap-2">
          <CallIcon />

          <Typography>(0265) 331800</Typography>
        </div>

        <div className="flex mt-2 gap-2">
          <EmailIcon />

          <Typography>tasikmalaya@bi.go.id</Typography>
        </div>
      </div>
    </div>
  )
}

export default FooterAuthorInformation
