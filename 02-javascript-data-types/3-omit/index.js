/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {

    const entries = Object.entries(obj);
    const newEntries = new Map();
    
    for(const entry of entries) {
        if (!fields.includes(entry[0])) {
            newEntries.set(entry[0], entry[1]);        
        }
    }

    return Object.fromEntries(newEntries);
};
