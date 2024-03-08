import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface NavItemProps {
  page: string;
  onClick: () => void;
}

const NavItemComponent: React.FC<NavItemProps> = ({ page, onClick }) => (
  <Link href="/admin" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
    <MenuItem key={page} onClick={onClick}>
      <Typography textAlign="center">{page}</Typography>
    </MenuItem>
  </Link>
);

export default NavItemComponent;
