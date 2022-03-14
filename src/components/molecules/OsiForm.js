import React, {useEffect, useState} from "react";
import OsiTextField from "../atoms/OsiTextField";
import {removeNotification, setNotification, setTab} from "../../redux/actions/tabActions";
import {useDispatch, useSelector} from "react-redux";

const OsiForm = (props) => {
    const dispatch = useDispatch()
    const notifications = useSelector((state) => state.getTab.notifications)

    const [formObject, setFormObject] = useState([])
    useEffect(() => {
        const formObject = [];
        React.Children.forEach(props.children, element => {
            if (!React.isValidElement(element)) return;
            if (element.type.name === 'OsiTextField') {
                const {...props} = element;
                formObject.push({
                    ...props.props,
                    value: props.props?.value ? props.props?.value : ''
                })

                if (
                    props.props.required &&
                    !props.props.value?.length
                ) {
                    dispatch(setNotification({
                        id: props.props?.id,
                        value: props.props?.value,
                        action: props.props?.modifiedActionLabel?.replace('$$', props.props?.id)
                    }))
                }
            }
        })
        setFormObject(formObject)
        return () => {
            const notifications = formObject.filter(notification => notification.required)
            notifications.forEach(notification => dispatch(removeNotification({
                id: notification.id
            })))
        }
    }, [props.children])

    const handleChange = (event) => {
        let index = -1
        let notificationIndex = -1
        const name = event.target.name
        const value = event.target.value
        index = formObject.findIndex(item => name === item.id)
        formObject[index]['value'] = value
        setFormObject(formObject)
        if (
            formObject[index].required &&
            formObject[index].value.length === 0
        ) {
            dispatch(setNotification({
                id: name,
                value: value,
                action: formObject[index]['modifiedActionLabel']?.replace('$$', name)
            }
        ))
        } else if (
            formObject[index].required &&
            formObject[index].value.length > 0
        ) {
            notificationIndex = notifications?.findIndex(notification => notification.id === name)
            if (notificationIndex >= 0) {
                dispatch(removeNotification({
                    id: name
                }))
            }
        }
    }

    const handleFocus = (event) => {
        const name = event.target.name
        const index = formObject.findIndex(item => name === item.id)
        if (index >= 0) {
            /*
            dispatch(setTab({
                tab: {
                    action: formObject[index]['selectedActionLabel']?.replace('$$', name),
                    path: props.id + '/' + name
                }
            }))

             */
        }
    }

    return (
        <form>
            {
                formObject.map((item, index) => {
                    return (
                        <OsiTextField
                            id={item.id}
                            value={item.value}
                            label={item.label + ' ' + item.id}
                            focus={index === 0}
                            required={item.required}
                            key={item.id}
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />
                    )
                })
            }
        </form>
    );
}

export default OsiForm