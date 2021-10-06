import {Link} from 'react-router-dom';
import cn from './header.module.css';

export const Header = () => (
    <header className={cn.header}>
        <Link to={'/'}>Some header data</Link>
    </header>
);
