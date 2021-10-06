import {FC, memo} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useNavigationData} from '../../../data/use-store/use-store';
import {Page} from '../../../models/page.model';
import {getLinkClass, isAnyAnchorSelected, isUrlSelected} from '../navigation.utils';
import cn from './navigation-item.module.css';

interface NavigationLinkProps {
    page: Page;
}

export const NavigationLink: FC<NavigationLinkProps> = memo(({page}) => {
    const {pathname, hash} = useLocation();
    const {data} = useNavigationData();

    const isAnchorSelected = isAnyAnchorSelected(page, hash, data.anchors);
    const isSelected = isUrlSelected(pathname, page.url) && !isAnchorSelected;

    const linkClassName = getLinkClass(isSelected);

    if (!page.url) {
        return <span className={cn.itemContent}>{page.title}</span>;
    }

    return (
        <Link className={linkClassName} to={page.url}>
            <span className={cn.itemContent}>{page.title}</span>
        </Link>
    );
});
