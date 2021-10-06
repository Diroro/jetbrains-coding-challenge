import {FC, memo} from 'react';
import {useNavigationData} from '../../../data/use-store/use-store';
import {Page} from '../../../models/page.model';
import {NavigationItem} from './navigation-item.component';

interface InnerNavigationListProps {
    page: Page;
}

export const InnerNavigationList: FC<InnerNavigationListProps> = memo(({page}) => {
    const {pages = []} = page;
    const {data} = useNavigationData();

    return (
        <ul>
            {pages.map((innerPageId) => {
                const innerPage = data.pages.get(innerPageId);
                return innerPage && <NavigationItem key={innerPageId} page={innerPage} />;
            })}
        </ul>
    );
});
