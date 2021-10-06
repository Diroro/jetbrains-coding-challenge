import {FC, memo} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {NavigationDataProvider} from '../../data/use-store/use-store';
import {Content} from '../content/content.component';
import {Header} from '../header/header.component';
import {NavigationListComponent} from '../navigation/navigation-list/navigation-list.component';
import cn from './app.module.css';

export const App: FC<{}> = memo(() => {
    return (
        <div className={cn.app}>
            <BrowserRouter>
                <NavigationDataProvider>
                    <Header />
                    <main className={cn.main}>
                        <NavigationListComponent />
                        <Content />
                    </main>
                </NavigationDataProvider>
            </BrowserRouter>
        </div>
    );
});
