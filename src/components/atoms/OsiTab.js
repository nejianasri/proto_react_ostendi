
import Tab from '@mui/material/Tab'

const OsiTab = (props) => {
    const path = props.parentPath + '/' + props.id

    return (
        <>
            <Tab
                onClick={(e) => props.onClick(e, props)}
                className="mr-2"
                id={props.id}
                label={props.label}
                parentPath={path}
            />

        </>
    )
}

export default OsiTab