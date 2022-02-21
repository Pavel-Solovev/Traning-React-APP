type ActionType = {
    type: string
}

export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

export type StateType = {
    collapsed:boolean
}

export const reducer = (accor: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return  {...accor, collapsed: !accor.collapsed};
        default:
            // return state ||
            throw new Error('bad state')
    }
}