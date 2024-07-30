import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'

const remarkExample: Plugin<[], Root> = function () {
    return (ast) => {
        visit(ast, 'text', function (node, index, parent) {
            console.log(node.value);
        })
    }
}

export default remarkExample;
