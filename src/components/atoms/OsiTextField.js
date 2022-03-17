import TextField from "@mui/material/TextField"

const OsiTextField = ({id = '', label = '', value = '', focus= false, onChange, onFocus, required = false}) => {
    
    return (
        <div>
            <TextField
                error={(required && value.length === 0)} 
                id={id}
                name={id} 
                label={label}
                defaultValue={value}
                onChange={onChange}
                autoFocus={focus}
                onFocus={((e) => onFocus(e, id))}
                helperText={(required) ? "Ce champ est obligatoire" : ""}
            />
        </div>
    )
}

export default OsiTextField