import cx from 'classnames';
import styles from './another-one.module.scss';
import { ElemTree } from '../elem-tree/elem-tree';
import { useState } from 'react';

export interface AnotherOneProps {
    /** @format wix-image-id */
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const AnotherOne = ({ className }: AnotherOneProps) => {
    const [la, setLa] = useState(11)
    return (
        <div className={cx(styles.root, className)}>
            <ElemTree />
            AnotherOne
        </div>
    );
};
