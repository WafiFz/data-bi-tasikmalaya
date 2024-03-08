import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

interface NavItemProps {
  page: string;
  onClick: () => void;
}

const NavItemComponent: React.FC<NavItemProps> = ({ page, onClick }) => (
  <MenuItem key={page} onClick={onClick}>
    <Typography textAlign="center">{page}</Typography>
  </MenuItem>
);

export default NavItemComponent;
