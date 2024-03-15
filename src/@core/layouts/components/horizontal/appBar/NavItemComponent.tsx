import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

interface NavItemProps {
  page: JSX.Element
  path: string
  onClick: () => void
  newTab?: boolean
}

const NavItemComponent: React.FC<NavItemProps> = ({
  page,
  path,
  onClick,
  newTab = false
}) => (
  <Link
    href={path}
    passHref
    target={newTab ? '_blank' : '_self'}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <MenuItem key={path} onClick={onClick}>
      <Typography textAlign="center">{page}</Typography>
    </MenuItem>
  </Link>
)

export default NavItemComponent
