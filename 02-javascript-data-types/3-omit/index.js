/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {

    const entries = Object.entries(obj);
    const newEntries = new Map();
    
    for (let i = 0; i < entries.length; i++) {
        if (!fields.includes(entries[i][0])) {
            newEntries.set(entries[i][0], entries[i][1]);        
        }
    }

    return Object.fromEntries(newEntries);
};
