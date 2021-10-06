import {FC, memo} from 'react';
import cn from './content.module.css';

export const Content: FC<{}> = memo(() => (
    <section className={cn.contentSection}>
        <h1 className={cn.title}>Install Intellij IDEA</h1>
        <article className={cn.article}>
            <p className={cn.content}>
                Intellij Idea is our cross-platform IDE that provides consisten experience on
                Windows, macOS and Linux operational systems.
            </p>
        </article>
        <article className={cn.article}>
            <h2 className={cn.subtitle}>Install using Toolbox App</h2>
            <p className={cn.content}>Some instructions to install</p>
        </article>
        <article className={cn.article}>
            <h2 className={cn.subtitle}>Install</h2>
            <p className={cn.content}>Some instructions to install</p>
        </article>
    </section>
));
