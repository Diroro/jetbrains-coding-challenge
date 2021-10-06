import {FC, memo} from 'react';
import {useNavigationData} from '../../../data/use-store/use-store';
import {Page} from '../../../models/page.model';
import {AnchorItem} from './anchor-item.component';

interface AnchorListProps {
    page: Page;
}

export const AnchorList: FC<AnchorListProps> = memo(({page}) => {
    const {data} = useNavigationData();
    const {anchors} = data;
    const anchorsIds = page.anchors ?? [];

    return (
        <ul>
            {anchorsIds.map((anchorId) => {
                const anchor = anchors.get(anchorId);
                return (
                    anchor && <AnchorItem anchor={anchor} key={anchorId} parentLevel={page.level} />
                );
            })}
        </ul>
    );
});
