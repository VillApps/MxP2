/* eslint-disable react/no-array-index-key */
import { Box, Breadcrumbs, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { teal } from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../States/Store';
import aS from '../Utils/AppService';

function BreadcrumbsNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const breadCrumbs = useSelector((state: any) => state.Ui.breadCrumbs);
  const dispatch = useDispatch<AppDispatch>();

  const goTo = (link: string) => {
    aS.breadCrumbsGoTo(dispatch, navigate, breadCrumbs, link);
  };

  return (
    <Box sx={{ padding: '10px' }}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadCrumbs.map((link: any) => (
          <Button
            key={`link_${link}`}
            variant="text"
            sx={{ textTransform: 'none', color: teal[700] }}
            onClick={() => {
              goTo(link);
            }}
          >
            {link}
          </Button>
        ))}
        <Typography>{location.pathname.split('/')[location.pathname.split('/').length - 1]}</Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default BreadcrumbsNav;
