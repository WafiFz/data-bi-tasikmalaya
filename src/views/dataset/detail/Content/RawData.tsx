import React from 'react'

const RawData: React.FC = () => {
  const excelUrl =
    'https://docs.google.com/spreadsheets/d/1ENRiTB3ZMjJqd7bdCzrWSnkRrMbL0Cld/edit?usp=drive_link&ouid=113933701686718035393&rtpof=true&sd=true'

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
