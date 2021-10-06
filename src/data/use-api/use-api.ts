import {useState, useEffect} from 'react';
import {Anchor} from '../../models/anchor.model';
import {Page} from '../../models/page.model';

export const getPagesData = () =>
    import('../../mock-data/data.json').then((json) => ({
        entities: json.entities,
        topLevelIds: json.topLevelIds,
    }));

interface Entities {
    pages: Record<string, Page>;
    anchors: Record<string, Anchor>;
}

interface EntitiesResponse {
    entities: Entities;
    topLevelIds: string[];
}

export const useNavigationListRequest = () => {
    const [response, setResponse] = useState<EntitiesResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        getPagesData()
            .then((responseData) => {
                setResponse(responseData);
                setIsLoading(false);
            })
            .catch(setError)
            .finally(() => setIsLoading(false));
    }, []);

    return {response, isLoading, error};
};
