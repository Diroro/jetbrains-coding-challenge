import {FC, memo} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {Anchor} from '../../../models/anchor.model';
import {getLiItemClass, getLinkClass, getPaddingFromLevel} from '../navigation.utils';
import cn from './navigation-item.module.css';

interface AnchorItemProps {
    anchor: Anchor;
    parentLevel: number;
}

export const AnchorItem: FC<AnchorItemProps> = memo(({anchor, parentLevel}) => {
    const location = useLocation();

    const isSelected = location.hash === anchor.anchor;
    const linkClass = getLinkClass(isSelected);
    const liClassName = getLiItemClass(isSelected);
    const paddingLeft = getPaddingFromLevel(parentLevel);

    return (
        <li className={liClassName}>
            <div className={cn.navigationItemWrapper} style={{paddingLeft}}>
                <Link className={linkClass} to={anchor.anchor}>
                    <span className={cn.itemContent}>{anchor.title}</span>
                </Link>
            </div>
        </li>
    );
});
