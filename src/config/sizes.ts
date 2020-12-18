export type ComponentSize = 'default' | 'large' | 'small';

export const sidePaddings: {[key in ComponentSize]: number} = {
    large: 94,
    default: 84,
    small: 74,
}

export const heights: {[key in ComponentSize]: number} = {
    large: 64.75,
    default: 54.75,
    small: 44.75,
}