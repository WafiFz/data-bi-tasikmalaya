import React from 'react'

const RawData: React.FC = () => {
  const excelUrl =
    'https://docs.google.com/spreadsheets/d/1p0exMShJvGKkW8h2zpU9nEfCo5gbz4dHEeG3oWDIDuo/edit?usp=drive_link'
  
  // const excelUrl =
  //   'https://cloud.wafi.web.id/inflasi-bulanan-tahun-2018.xlsx'

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '500px',
        overflow: 'hidden'
      }}
    >
      <iframe
        src={excelUrl}
        title="Berkas Excel"
        width="100%"
        height="500px"
        style={{ position: 'absolute', top: '-60px', border: 'none' }}
      />
    </div>
  )
}

export default RawData
