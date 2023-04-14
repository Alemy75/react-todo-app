import React from 'react';

interface ButtonProps {
    onClick: () => void
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button onClick={() => props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;