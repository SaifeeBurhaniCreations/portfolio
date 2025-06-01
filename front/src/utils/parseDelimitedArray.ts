type GenericObject = { [key: string]: string };

export function parseDelimitedArray(
    raw: string[],
    keys: string[],
    separator: string = ';'
): GenericObject[] {
    const result: GenericObject[] = [];

    for (let i = 0; i < raw.length;) {
        if (raw[i] === separator) {
            i++; // Skip the separator
            continue;
        }

        const entry: GenericObject = {};

        for (let k = 0; k < keys.length; k++) {
            entry[keys[k]] = raw[i + k] ?? '';
        }

        result.push(entry);
        i += keys.length + 1; 
    }

    return result;
}
