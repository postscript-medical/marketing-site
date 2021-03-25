/**
 * Takes a location string and returns back a collection sorted by its filename
 *
 * @param {Array} collection The 11ty collection
 * @param {String} location The location of the files to use
 * @returns {Array} the sorted collection
 */
module.exports = (collection, location) => {
    return collection.getFilteredByGlob(location).sort((a, b) => {
        return Number(a.fileSlug) > Number(b.fileSlug) ? 1 : -1;
    });
}