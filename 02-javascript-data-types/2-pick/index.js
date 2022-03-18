/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

    const entries = Object.entries(obj);
    const newEntries = new Map();
    
    for(const entry of entries) {
        if (fields.includes(entry[0])) {
            newEntries.set(entry[0], entry[1]);        
        }
    }

    return Object.fromEntries(newEntries);
};
