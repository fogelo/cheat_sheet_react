import React, {FC} from 'react';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import {ModeT} from '../LamaDev';

type SideBarPT = {
    mode: ModeT
    setMode: (mode: ModeT) => void
}


const SideBar: FC<SideBarPT> = (props) => {
    return (
        <Box
            // bgcolor={'skyblue'}
            flex={1}
            p={2}
            sx={{display: {xs: 'none', sm: 'block'}}}
        >
            <Box position={'fixed'}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={'a'} href={'#'}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Homepage"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ArticleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Pages"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={'a'} href={'#'}>
                            <ListItemIcon>
                                <GroupIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Friends"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StorefrontIcon/>
                            </ListItemIcon>
                            <ListItemText primary="MarketPlace"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={'a'} href={'#'}>
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountBoxIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding
                              onChange={(e) => props.setMode(props.mode === 'light' ? 'dark' : 'light')}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ModeNightIcon/>
                            </ListItemIcon>
                            <Switch/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default SideBar;