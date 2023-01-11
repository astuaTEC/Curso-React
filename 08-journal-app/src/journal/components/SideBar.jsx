import { TurnedInNot } from "@mui/icons-material"
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from "@mui/material"

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0} }}
        >
            <Drawer
                variant="permanent" //temporary puede ser
                open
                sx={{
                    dispaly: { xs: 'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        Saymon Astua
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text =>(
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text }/>
                                        <ListItemText secondary={ 'Aliqua nostrud enim anim sunt.' }/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ) )
                    }
                </List>

            </Drawer>
        </Box>
    )
}
