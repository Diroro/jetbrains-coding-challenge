import {Anchor} from '../../models/anchor.model';
import {Page} from '../../models/page.model';
import cn from './common-navigation.module.css';

const INITIAL_PADDING = 48;
const ONE_LEVEL_PADDING = 16;

export const getPaddingFromLevel = (elementLevel: number): number =>
    INITIAL_PADDING + elementLevel * ONE_LEVEL_PADDING;

export const isUrlSelected = (pathname: string, url?: string) => {
    const pathnameWithoutSlash = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    return pathnameWithoutSlash === url;
};

export const getLinkClass = (isSelected: boolean): string =>
    `${cn.navigationLink}${isSelected ? ` ${cn.navigationLinkSelected}` : ''}`;

export const getLiItemClass = (isSelected?: boolean) =>
    `${cn.navigationItem}${isSelected ? ` ${cn.navigationItemSelected}` : ''}`;

export const isAnyAnchorSelected = (
    page: Page,
    hash: string,
    anchors: Map<string, Anchor>,
): boolean => {
    return (
        !!page.anchors &&
        page.anchors.some((anchorId) => {
            const anchor = anchors.get(anchorId);
            return anchor && anchor.anchor === hash;
        })
    );
};
