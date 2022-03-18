/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

    const comparator = (a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});
    const reverseComparator = (a, b) => b.localeCompare(a, ['ru', 'en'], {caseFirst: 'upper'});
    const sortedArray = arr.slice();

    if (param === 'asc') {
        sortedArray.sort(comparator);
    } else if (param === 'desc') {
        sortedArray.sort(reverseComparator);
    } else {
        console.error(`Incorrect value of sorting order: ${param}. The order must be \'asc\' or \'desc'\.`);
    }

    return sortedArray;
}