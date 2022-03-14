import OsiTextField from "../atoms/OsiTextField";
import OsiDropdown from "../atoms/OsiDropdown";
import {useDispatch, useSelector} from "react-redux";
import {redo, undo} from "../../redux/actions/tabActions";

const Header = () => {
    const dispatch = useDispatch()

    const tab = useSelector((state) => state.getTab.tab)
    const past = useSelector((state) => state.getTab.past)
    const future = useSelector((state) => state.getTab.future)
    const notifications = useSelector((state) => state.getTab.notifications)

    const undoClick = (e, index) => {
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
        <header
            className="w-full mx-auto max-w-7xl mx-auto flex justify-between items-center border-b-2 border-gray-100 px-4 py-4">
            <div>
                <OsiDropdown icon="back" dataList={past} onClick={undoClick}/>
                <OsiDropdown icon="next" dataList={future} onClick={redoClick}/>
            </div>
            <div className="w-full max-w-xl">
                <OsiTextField value={tab.path}/>
            </div>
            <OsiDropdown icon="notification" dataList={notifications}/>
        </header>
    )
}

export default Header