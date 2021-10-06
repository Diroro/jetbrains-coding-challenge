import {FC, memo} from 'react';
import {Page} from '../../../models/page.model';
import {ListItemWrapper} from './list-item-wrapper.component';
import {NavigationLink} from './navigation-link.component';

interface NonExpandableItemProps {
    page: Page;
    isSelected: boolean;
}

export const NonExpandableItem: FC<NonExpandableItemProps> = memo(({page, isSelected}) => {
    return (
        <ListItemWrapper page={page} isListExpanded={false} isSelected={isSelected}>
            <NavigationLink page={page} />
        </ListItemWrapper>
    );
});
