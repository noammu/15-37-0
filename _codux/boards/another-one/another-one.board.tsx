import { createBoard, Variant } from '@wixc3/react-board';
import { AnotherOne } from '../../../src/components/another-one/another-one';

export default createBoard({
    name: 'AnotherOne',
    Board: () => (
        <Variant name="yooooo">
            <AnotherOne className="wix:image://v1/~mv2.jpg/Image by Alesia Kazantceva.jpg" />
        </Variant>
    ),
    environmentProps: {
        windowWidth: 1024,
    },
    isSnippet: true,
});
