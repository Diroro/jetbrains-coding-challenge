import {FC, memo} from 'react';
import {useLocation} from 'react-router-dom';
import {Page} from '../../../models/page.model';
import {isUrlSelected} from '../navigation.utils';
import {ExpandableItem} from './expandable-item.component';
import {NonExpandableItem} from './non-expandable-item.component';

interface NavigationItemProps {
    page: Page;
}

export const NavigationItem: FC<NavigationItemProps> = memo(({page}) => {
    const {pages} = page;
    const isExpandable = pages && pages.length > 0;
    const {pathname} = useLocation();

    const isSelected = isUrlSelected(pathname, page.url);

    if (isExpandable) {
        return <ExpandableItem isSelected={isSelected} page={page} />;
    }

    return <NonExpandableItem page={page} isSelected={isSelected} />;
});
