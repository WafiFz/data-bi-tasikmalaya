import React from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'

interface FileAmountProps {
  title: string
  amount: number
  color?: string
  mt?: string
}

const FileAmount: React.FC<FileAmountProps> = ({ title, amount, color, mt }) => {
  return (
    <div className="grid place-content-between">
      <div className={`text text-${color} ${mt}`}>
        <FormattedMessage id={title} defaultMessage="Title File Count" />
      </div>

      <div className={`text text-3xl text-${color}`}>
        <FormattedNumber value={amount} />
      </div>
    </div>
  )
}

export default FileAmount
