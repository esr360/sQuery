export default function isModule(node, moduleName, config) {
    config = config || this;

    const DOMNodes = !(node instanceof NodeList || node instanceof Array) ? [node] : node;

    return [].slice.call(DOMNodes).every(node => {
        return node.matches(`.${moduleName}, [class*="${moduleName + config.modifierGlue}"]`);
    });
}