import {FC, memo} from 'react';
import {Page} from '../../../models/page.model';
import {AnchorList} from '../anchors-list/anchor-list.component';
import {getLiItemClass, getPaddingFromLevel} from '../navigation.utils';
import {InnerNavigationList} from './inner-navigation-list.component';
import cn from './navigation-item.module.css';

interface ListItemWrapperProps {
    page: Page;
    isListExpanded: boolean;
    isSelected: boolean;
}

export const ListItemWrapper: FC<ListItemWrapperProps> = memo(
    ({page, isListExpanded, children, isSelected}) => {
        const liClassName = getLiItemClass(isSelected);
        const paddingLeft = getPaddingFromLevel(page.level);

        return (
            <li className={liClassName}>
                <div className={cn.navigationItemWrapper} style={{paddingLeft}}>
                    {children}
                </div>
                {isListExpanded && <InnerNavigationList page={page} />}
                {isSelected && <AnchorList page={page} />}
            </li>
        );
    },
);
