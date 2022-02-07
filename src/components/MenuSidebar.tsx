import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { makeStyles } from '@mui/styles';
import { Navigate,useNavigate } from 'react-router'
import { Box } from '@mui/material';

const useStyles = makeStyles({
  rootitem: {
    padding: '12px 20px 12px 40px !important',
    borderRight: '4px solid transparent !important'
  },
  selectedItem: {
    backgroundColor: 'rgba(0, 171, 85, 0.08) !important',
    borderRight: '4px solid #00ab55 !important',
    fontWeight: 'bold !important'
  },
  menuList: {
    margin: '20px 0px ',
    width: '100% !important'
  }
});

export const MenuSidebar = () => {

  const navigate = useNavigate();

  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const classes = useStyles();

  const arrayMenuItems = [
    { id: 1, name: 'estadisticas', icon: 'AssessmentOutlined', url:'/dashboard/estadisticas' },
    { id: 2, name: 'usuarios', icon: 'PersonOutlineOutlined', url:'/dashboard/users' },
    { id: 3,name: 'Blog', icon: 'FeedOutlined', url:'/dashboard/blog'},
  ];

  const handleNavigateRoute = (routePath: string, idx: number) => {
    setActiveItemIndex(idx);
    navigate(routePath);
  }


  return (
    <Paper classes={{root: classes.menuList}} elevation={0} sx={{ maxWidth: '100%' }}>
      <MenuList>
        { arrayMenuItems.map((item, idx) => (
          <MenuItem selected={activeItemIndex == item.id}
          classes={{ selected: classes.selectedItem, root: classes.rootitem }} key={idx} onClick={() => handleNavigateRoute(item.url, item.id)}>
            <ListItemIcon >
              {/* <ComponentWithIcon iconName="Add" /> */}
            </ListItemIcon>
            <ListItemText> {item.name} </ListItemText>
        </MenuItem>
        ))}

      </MenuList>
    </Paper>
  );
};
