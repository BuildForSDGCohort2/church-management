export const OPEN_SIDEBAR = "OPEN_SIDEBAR"
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR"


// Action Creators
export const openSidebar = () => {
    return {
        type: OPEN_SIDEBAR
    }
}


export const closeSidebar = () => {
    return {
        type: CLOSE_SIDEBAR
    }
}