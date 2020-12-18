import styled from "styled-components";
import { ComponentSize, heights, sidePaddings } from "../../config/sizes";
import { ButtonType } from "./button";

type StateColors = {
    regular: string;
    hover: string;
    inactive : string;
}

const typeColors: {[key in ButtonType]: StateColors} = {
    default: {
        regular: '#3989DD',
        hover: '#36429F',
        inactive:'#BFC1D3'
    },
    danger: {
        regular: '#D83831',
        hover: '#D83831',
        inactive:'#E88A85'
    },
    success: {
        regular: '#89B453',
        hover: '#609222',
        inactive: '#B9D39A'
    },
    ghost: {
        regular: '#89B453',
        hover: '#609222',
        inactive: '#B9D39A'
    },
    secondary: {
        regular: '#89B453',
        hover: '#609222',
        inactive: '#B9D39A'
    }
};

interface StyledButtonProps {
    innerType: ButtonType;
    size: ComponentSize;
    withText: boolean;
}

/* Real tag is assigned dynamically */
export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    /* Add margin in case of loading or icon */
    & > *:nth-child(1) {
        margin-left: ${pr => pr.withText ? 7 : 0}px;
    }
    font-size: 1.25rem;

    border: none;
    cursor: pointer;
    background-color: ${ (pr) => typeColors[pr.innerType].regular };
    padding: 0 ${ pr => sidePaddings[pr.size]}px;
    height: ${ pr => heights[pr.size]}px;
    color: ${ pr => pr.innerType === 'ghost'
    ? typeColors['default'].regular
    : '#fff'
    };
    &:hover {
        box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.75);
    }
    ${ pr => pr.disabled ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;

        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    ` : ''}
    border-radius: 5px;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ${ (pr) => typeColors[pr.innerType].regular };
    }
    &:hover {
        background-color: ${ (pr) => typeColors[pr.innerType].hover };
    }
`;

export const StyledIcon = styled.div`
    height: 20px;
`;