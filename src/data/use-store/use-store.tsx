import {createContext, memo, useContext, useState} from 'react';
import {Page} from '../../models/page.model';
import {Anchor} from '../../models/anchor.model';

interface NavigationData {
    pages: Map<string, Page>;
    anchors: Map<string, Anchor>;
    topLevelIds: string[];
}

interface NavigationDataState {
    data: NavigationData;
    setData: (data: NavigationData) => void;
}
const emptyData: NavigationData = {
    pages: new Map(),
    anchors: new Map(),
    topLevelIds: [],
};

const navigationDataContext = createContext<NavigationDataState>({
    data: emptyData,
    setData: () => {},
});

export const useNavigationData = () => useContext(navigationDataContext);

export const NavigationDataProvider = memo((props) => {
    const [data, setData] = useState<NavigationData>(emptyData);
    return (
        <navigationDataContext.Provider value={{data, setData}}>
            {props.children}
        </navigationDataContext.Provider>
    );
});
