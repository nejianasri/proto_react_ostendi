import {ActionTypes} from "../contants/action-types";

const initialState = {
    past: [],
    future: [],
    tab: '',
    notifications: [],
}

export const tabReducer = (state = initialState, {type, payload}) => {
    const { past, tab, future, notifications } = state

    switch (type) {
        case ActionTypes.SET_TAB:
            return {
                past: [...past, payload.tab],
                tab: payload.tab,
                future: future,
                notifications: [...notifications]
            }
            break;
        case ActionTypes.UNDO:
            const previous = past[past.length - 1]
            const newPast = past.slice(0, past.length - 1)
            return {
                past: newPast,
                tab: previous,
                future: [tab, ...future],
                notifications: [...notifications]
            }
            break;
        case ActionTypes.REDO:
            const next = future[0]
            const newFuture = future.slice(1)
            return {
                past: [...past, tab],
                tab: next,
                future: newFuture,
                notifications: [...notifications]
            }
            break;
        case ActionTypes.SET_NOTIFICATION:
            return {
                notifications: [...notifications, payload],
                past: [...past],
                tab: tab,
                future: [...future],
            }
            break;
        case ActionTypes.REMOVE_NOTIFICATION:
            const notificationId = payload.id
            let index = -1
            if (notifications.length) {
                index = notifications.findIndex(notification => notification.id === notificationId)
                if (index >= 0) {
                    notifications.splice(index, 1);
                }
            }
            return {
                notifications: [...notifications],
                past: [...past],
                tab: tab,
                future: [...future],
            }
            break;
        default:
            return state
    }
}