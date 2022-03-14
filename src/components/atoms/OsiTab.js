import {classNames} from "../../helper";
import {Link} from "react-router-dom";

const OsiTab = (props) => {
    const path = props.parentPath + '/' +props.id

    return (
        <li
            className="mr-2"
            id={props.id}
            onClick={((e) => props.onClick(e, props))}
        >

            <Link to={path} className={classNames(
                props.active ?
                    'text-red-600 border-red-600' : 'text-gray-700 hover:text-gray-600 border-transparent hover:border-gray-300 cursor-pointer',
                'inline-block py-4 px-4 text-sm font-medium text-center rounded-t-lg border-b-2'
            )}>
                {props.label}
            </Link>
        </li>
    )
}

export default OsiTab