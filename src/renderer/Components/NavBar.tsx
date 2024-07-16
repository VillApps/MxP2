/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { AccountCircle, Apps } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Divider, MenuList, Paper } from '@mui/material';
import { AppDispatch } from '../States/Store';
import { setBreadCrumbs, setViAUserEx } from '../States/UiSlice';
import aS from '../Utils/AppService';

function NavBar() {
  const ViAUserExId = useSelector((state: any) => state.Ui.ViAUserEx.id);
  const navParams = useSelector((state: any) => state.Ui.navParams);
  const [anchorElAccount, setAnchorElAccount] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl]: any = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleMenuAccount = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAccount(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElAccount(null);
    setAnchorEl({});
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, menuId: string) => {
    const anchorElT = { ...anchorEl };
    anchorElT[menuId] = event.currentTarget;
    setAnchorEl(anchorElT);
  };

  useEffect(() => {}, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
          <Grid>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                handleClose();
                dispatch(setBreadCrumbs([]));
                navigate(`/`);
              }}
            >
              <Apps />
            </IconButton>
          </Grid>
          <Grid flex={1} container justifyContent="flex-start">
            {Object.keys(navParams).map((menuId: any) => (
              <Grid key={`menu${menuId}`}>
                <Button
                  sx={{ fontSize: '11px', marginX: '5px' }}
                  variant="text"
                  color="secondary"
                  onClick={(event) => {
                    handleClick(event, menuId);
                  }}
                >
                  {navParams[menuId].name}
                </Button>
                <Menu anchorEl={anchorEl[menuId]} open={Boolean(anchorEl[menuId])} onClose={handleClose}>
                  <MenuList sx={{ width: 220, maxWidth: '100%' }}>
                    {Object.keys(navParams[menuId].menusItems)
                      .sort((a, b) => {
                        return navParams[menuId].menusItems[a].orden - navParams[menuId].menusItems[b].orden;
                      })
                      .map((menuItemId) => (
                        <MenuItem
                          key={`menuItem${menuItemId}`}
                          onClick={() => {
                            handleClose();
                            dispatch(setBreadCrumbs([]));
                            navigate(`${navParams[menuId].menusItems[menuItemId].url}`);
                          }}
                        >
                          {navParams[menuId].menusItems[menuItemId].name}
                        </MenuItem>
                      ))}
                  </MenuList>
                </Menu>
              </Grid>
            ))}
          </Grid>
          <Grid>
            <Box>
              <Typography variant="caption" component="span" sx={{ flexGrow: 1, textAlign: 'center' }}>
                VillApps®
              </Typography>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenuAccount} color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorElAccount}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElAccount)}
                onClose={handleClose}
              >
                <MenuList sx={{ width: 320, maxWidth: '100%' }}>
                  <MenuItem>
                    <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                      {ViAUserExId.split('@')[0]}
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      dispatch(setViAUserEx({}));
                      dispatch(setBreadCrumbs([]));
                      navigate(`/`);
                      signOut();
                    }}
                  >
                    Salir
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
