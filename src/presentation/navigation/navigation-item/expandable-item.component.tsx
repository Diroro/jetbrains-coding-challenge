import {FC, memo, useState, useCallback} from 'react';
import {Page} from '../../../models/page.model';
import {Arrow} from '../../icons/arrow-icon';
import {ListItemWrapper} from './list-item-wrapper.component';
import {NavigationLink} from './navigation-link.component';
import cn from './navigation-item.module.css';

interface ExpandableItemProps {
    page: Page;
    isSelected: boolean;
}

export const ExpandableItem: FC<ExpandableItemProps> = memo(({page, isSelected}) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = useCallback(() => setExpanded(!expanded), [expanded]);

    return (
        <ListItemWrapper page={page} isListExpanded={expanded} isSelected={isSelected}>
            <button className={cn.navigationButton} onClick={toggleExpand}>
                <Arrow className={cn.navigationArrow} side={expanded ? 'down' : 'right'} />
                <NavigationLink page={page} />
            </button>
        </ListItemWrapper>
    );
});
