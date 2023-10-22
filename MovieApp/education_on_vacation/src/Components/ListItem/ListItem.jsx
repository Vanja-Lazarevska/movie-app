import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const ListItemComponent = ({ Icon, text}) => {
    const iconSize = 30

    return (
        <>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Icon size={iconSize} />
                </ListItemIcon>
                <ListItemText  primary={text}/>
            </ListItemButton>
        </ListItem>
        <Divider />
        </>
    )
}