import { createBoard, Variant } from '@wixc3/react-board';
import { ElemTree } from '../../../src/components/elem-tree/elem-tree';

export default createBoard({
    name: 'ElemTree',
    Board: () => (
        <div>
            <Variant name="blibla">
                <ElemTree />
            </Variant>
            <Variant name="yoyoyo">
                <ElemTree />
            </Variant>
            <Variant name="dididi">
                <ElemTree />
            </Variant>
        </div>
    ),
    isSnippet: true,
});
