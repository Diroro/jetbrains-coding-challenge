import {FC, memo} from 'react';

type ArrowSide = 'down' | 'up' | 'left' | 'right';
interface ArrowProps {
    side?: ArrowSide;
    className?: string;
}

const arrowAngle: Record<ArrowSide, number> = {
    down: 0,
    left: 90,
    right: -90,
    up: 180,
};

export const Arrow: FC<ArrowProps> = memo(({side = 'down', className}) => {
    const angle = arrowAngle[side];
    return (
        <svg
            className={className}
            fill="black"
            style={{
                transform: `rotate(${angle}deg)`,
            }}
            height="24"
            viewBox="0 0 24 24"
            width="24">
            <path d="M7 10l5 5 5-5z" />
            <path d="M0 0h24v24H0z" fill="none" />
        </svg>
    );
});
