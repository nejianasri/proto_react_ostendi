import TextField from "@mui/material/TextField"
import OsiDropdown from "../atoms/OsiDropdown";
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import { redo, undo } from "../../redux/actions/tabActions";

const Header = () => {
    const dispatch = useDispatch()
    
    const tab = useSelector((state) => state.getTab.tab)
    const past = useSelector((state) => state.getTab.past)
    const future = useSelector((state) => state.getTab.future)
    const notifications = useSelector((state) => state.getTab.notifications)

    const undoClick = (e, index) => {
        console.log(index)
        for (let i = 0; i <= index; i++) {
            dispatch(undo())
        }
    }

    const redoClick = (e, index) => {
        for (let i = 0; i <= index; i++) {
            dispatch(redo())
        }
    }

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            mb={5}
        >
            <div>
                <Stack
                    direction="row"
                    spacing={2}
                >
                    <OsiDropdown icon="back" dataList={past} onClick={undoClick} />
                    <OsiDropdown icon="next" dataList={future} onClick={redoClick} />
                </Stack>

            </div>
            <Box
            component="form"
            >
                <TextField
                    id="route"
                    value={tab.path}
                />
            </Box>
            <OsiDropdown icon="notification" dataList={notifications} />
        </Stack>
    )
}

export default Header