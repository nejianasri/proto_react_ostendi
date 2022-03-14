import {ActionTypes} from "../contants/action-types";

export const setTab = (tab) => {
    return {
        type: ActionTypes.SET_TAB,
        payload: tab,
    }
}

export const selectedTab = (tab) => {
    return {
        type: ActionTypes.SELECTED_TAB,
        payload: tab,
    }
}

export const undo = (tab) => {
    return {
        type: ActionTypes.UNDO,
        payload: tab,
    }
}

export const redo = (tab) => {
    return {
        type: ActionTypes.REDO,
        payload: tab,
    }
}

export const setNotification = (tab) => {
    return {
        type: ActionTypes.SET_NOTIFICATION,
        payload: tab
    }
}

export const removeNotification = (tab) => {
    return {
        type: ActionTypes.REMOVE_NOTIFICATION,
        payload: tab
    }
}