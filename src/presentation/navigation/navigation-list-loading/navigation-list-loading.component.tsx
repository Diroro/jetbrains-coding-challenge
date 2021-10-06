import {FC, memo} from 'react';
import cn from './navigation-list-loading.module.css';

interface NavigationitemLoaderProps {
    hasLeftPadding?: boolean;
    hasRightPadding?: boolean;
}

const NavigationItemLoader: FC<NavigationitemLoaderProps> = memo(
    ({hasLeftPadding, hasRightPadding}) => {
        const leftPaddingCn = hasLeftPadding ? cn.hasLeftPadding : '';
        const rightPaddingCn = hasRightPadding ? cn.hasRightPadding : '';
        const className = `${cn.navigationItemWrapper} ${leftPaddingCn} ${rightPaddingCn}`;

        return (
            <li className={className}>
                <div className={cn.navigationItem} />
            </li>
        );
    },
);

export const NavigationListLoadingcomponent: FC<{}> = memo(() => {
    return (
        <ul className={cn.navigationList}>
            <NavigationItemLoader />
            <NavigationItemLoader hasLeftPadding hasRightPadding />
            <NavigationItemLoader hasLeftPadding />
            <NavigationItemLoader hasLeftPadding hasRightPadding />
            <NavigationItemLoader hasLeftPadding />
            <NavigationItemLoader hasLeftPadding hasRightPadding />
            <NavigationItemLoader hasLeftPadding />
            <NavigationItemLoader hasLeftPadding hasRightPadding />
            <NavigationItemLoader hasLeftPadding hasRightPadding />
            <NavigationItemLoader />
            <NavigationItemLoader />
        </ul>
    );
});
