import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface NavItemProps {
  page: string;
  path: string;
  onClick: () => void;
}

const NavItemComponent: React.FC<NavItemProps> = ({ page, path, onClick }) => (
  <Link href={path} passHref style={{ textDecoration: 'none', color: 'inherit' }}>
    <MenuItem key={page} onClick={onClick}>
      <Typography textAlign="center">{page}</Typography>
    </MenuItem>
  </Link>
);

export default NavItemComponent;
