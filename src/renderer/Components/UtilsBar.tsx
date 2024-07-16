/* eslint-disable react/no-array-index-key */
import { Button, Menu, MenuItem } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Settings } from '@mui/icons-material';
import { useState } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import BreadcrumbsNav from './BreadcrumbsNav';

function UtilsBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isUtilsBar = useSelector((state: any) => state.Ui.isUtilsBar);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container flexDirection="column" sx={{ borderBottom: '1px solid #f0f0f0' }}>
      <Grid>
        <BreadcrumbsNav />
      </Grid>
      {isUtilsBar && (
        <Grid container justifyContent="space-between">
          {isUtilsBar.btns &&
            isUtilsBar.btnsFns.map((btn: any, btnIndex: number) => (
              <Grid key={`btnIndex${btnIndex}`}>
                <Button
                  color="success"
                  sx={{ margin: '10px' }}
                  variant="contained"
                  onClick={() => {
                    btn.fn();
                  }}
                >
                  {btn.name}
                </Button>
              </Grid>
            ))}
          {isUtilsBar.actions && (
            <Grid>
              <Button color="primary" sx={{ margin: '10px' }} variant="outlined" onClick={handleMenu} endIcon={<Settings />}>
                Accion
              </Button>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {isUtilsBar.actionsFns.map((fn: any, fnIndex: number) => (
                  <MenuItem
                    key={`fnIndex${fn.name}${fnIndex}`}
                    onClick={() => {
                      fn.fn();
                    }}
                  >
                    {fn.name}
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          )}
          <Grid />
        </Grid>
      )}
    </Grid>
  );
}

export default UtilsBar;
