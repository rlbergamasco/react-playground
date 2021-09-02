import { FormControl, Box, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';

export const Dropdown = ({min, max, selected, handleSet, label}) => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(handleSet(event.target.value));
    };

    const createMenuItems = () => {
        let menuItemsTemp = []
        for (let i = min; i < max+1; i++) {
            menuItemsTemp.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
        }
        return menuItemsTemp;
    }
    const menuItems = createMenuItems();
    return (
        <Box m={2}>
            <FormControl style={{width: "120px"}}>
                <InputLabel>{label}</InputLabel>
                    <Select
                    value={selected}
                    onChange={handleChange}
                    >
                        
                        {menuItems}
                    </Select>
            </FormControl>
        </Box>
    )
};