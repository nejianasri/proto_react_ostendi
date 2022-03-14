import {classNames} from "../../helper";
import {useEffect, useRef} from "react";

const OsiTextField = ({id, label = '', value = '', focus= false, onChange, onFocus, required = false}) => {
    const inputElement = useRef(null);
    useEffect(() => {
        if (focus && inputElement.current) {
            inputElement.current.focus();
        }
    }, []);

    return (
        <div className={classNames(
            label ?
                'mt-4' : '',
            'max-w-xl'
        )}>
            { label && (<label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>) }
            <input
                type="text"
                defaultValue={value}
                onChange={onChange}
                onFocus={((e) => onFocus(e, id))}
                ref={inputElement}
                id={id}
                name={id}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            { (required && value.length === 0) && (<em className="mt-2 block text-red-600 text-sm">Ce champ est obligatoire</em>) }
        </div>
    )
}

export default OsiTextField