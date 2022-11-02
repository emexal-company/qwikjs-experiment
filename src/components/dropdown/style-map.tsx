export const styleMap = (styleInfo: Object) => Object.keys(styleInfo).reduce((style, prop) => {
    const value = styleInfo[prop];
    if (value == null) {
        return style;
    }
    // Convert property names from camel-case to dash-case, i.e.:
    //  `backgroundColor` -> `background-color`
    // Vendor-prefixed names need an extra `-` appended to front:
    //  `webkitAppearance` -> `-webkit-appearance`
    // Exception is any property name containing a dash, including
    // custom properties; we assume these are already dash-cased i.e.:
    //  `--my-button-color` --> `--my-button-color`
    prop = prop
        .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
        .toLowerCase();
    return style + `${prop}:${value};`;
}, '');