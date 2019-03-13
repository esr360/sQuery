export default function getModules(node, moduleName, config) {
    config = config || this;

    const { modifierGlue } = config;

    if (node instanceof NodeList) {
        const matchedModules = [].slice.call(node).reduce((matches, node) => {
            const modules = [].slice.call(getModules(node, moduleName, config));

            matches = matches.filter(match => modules.every(module => module !== match));

            return matches.concat(modules);
        }, []);

        return matchedModules;
    }

    return node.querySelectorAll(`.${moduleName}, [class*="${moduleName + modifierGlue}"]`)
}