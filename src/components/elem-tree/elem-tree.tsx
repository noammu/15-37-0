import cx from 'classnames';
import styles from './elem-tree.module.scss';

export interface ElemTreeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ElemTree = ({ className }: ElemTreeProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <img
                src="https://static.wixstatic.com/media/nsplsh_0ad82434c8074337b34fd5b6acf29980~mv2.jpg/v1/fit/w_640,h_640/Image by Clark Tibbs.jpg"
                alt=""
                className={styles.img1}
            />
            <div>
                <h1>Heading 1</h1>
            </div>
            ElemTree
            <p>This is a paragrdfgsdf ghdfgh fdgh dfgh fdaph.</p>
            <button className={styles.button1}>Button</button>
            <span>text</span>
            <img
                src="https://i.ebayimg.com/images/g/B~gAAOSwhNthhdjn/s-l1200.jpg"
                alt=""
                height="175"
            />
            <video
                controls={true}
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
                height="175"
            />
            <audio
                controls={true}
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
            />
            <form>
                <label>First name:</label>
                <br />
                <input type="text" />
                <br />
                <label>Last name:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
