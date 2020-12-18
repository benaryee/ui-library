import React, {ElementType, MouseEventHandler, MutableRefObject, ReactNode} from "react";
import {StyledButton} from "./styled";

export  type ButtonType = 'default' | 'danger' | 'ghost' | 'success' | 'secondary';
export type ComponentSize = 'small' | 'default' | 'large';

interface BaseButtonProps {
    type ?: ButtonType;
    icon ?: ElementType;
    size ?: ComponentSize;
    className ?: string;
    children ? :ReactNode;
    disabled ?:boolean;
    loading ?:boolean;

}


type HTMLButtonProps = {
    onClick ?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;

type HTMLAnchorProps = {
    href? : string;
}& BaseButtonProps;


type CustomNodeProps = {
    as ?: ElementType;
    to ?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;

const Button : React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
    const{
        type = 'default',
        icon,
        size = 'default',
        className = '',
        children,
        disabled,
        loading = false,
        onClick,
        href,
        as,
        to
    } = props;

    const styles ={
        innerType:type,
        size,
        disabled,
        withText : children !== null

    }

    if(as){
        return(
            <StyledButton
                as={as}
                to={to}
                ref={ref}
                className={className}
                {...styles}
            >
            </StyledButton>
        )
    }

    if(href){
        return(
            <StyledButton
                as='a'
                href={href}
                ref={ref as React.MutableRefObject<HTMLAnchorElement>}
                className={className}
                {...styles}
            >
                {loading ? 'Loading...' : children}

            </StyledButton>
        )
    }

    return (
        <StyledButton
            as='button'
            type='button'
            onClick={onClick}
            ref={ref as React.MutableRefObject<HTMLButtonElement>}
            className={className}
            {...styles}
        >
            {loading ? 'Loading...' : children}

        </StyledButton>
    )
}

export default React.forwardRef<unknown, ButtonProps>(Button);


