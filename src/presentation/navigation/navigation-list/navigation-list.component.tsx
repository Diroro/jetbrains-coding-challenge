import {FC, memo, useEffect} from 'react';
import {useNavigationData} from '../../../data/use-store/use-store';
import {Page} from '../../../models/page.model';
import {Anchor} from '../../../models/anchor.model';
import {NavigationItem} from '../navigation-item/navigation-item.component';
import {NavigationListLoadingcomponent} from '../navigation-list-loading/navigation-list-loading.component';
import {useNavigationListRequest} from '../../../data/use-api/use-api';
import cn from './navigation-list.module.css';

export const NavigationListComponent: FC<{}> = memo(() => {
    const {response, isLoading} = useNavigationListRequest();
    const {setData, data} = useNavigationData();

    useEffect(() => {
        if (!response) {
            return;
        }

        const {topLevelIds, entities} = response;
        const pagesMap: Map<string, Page> = new Map(Object.entries(entities.pages));
        const anchorsMap: Map<string, Anchor> = new Map(Object.entries(entities.anchors));

        setData({pages: pagesMap, topLevelIds, anchors: anchorsMap});
    }, [response, setData]);

    return (
        <nav className={cn.navigation}>
            {isLoading ? (
                <NavigationListLoadingcomponent />
            ) : (
                <ul className={cn.outerNavList}>
                    {data.topLevelIds.map((id) => {
                        const page = data.pages.get(id);
                        return page && <NavigationItem key={id} page={page} />;
                    })}
                </ul>
            )}
        </nav>
    );
});
