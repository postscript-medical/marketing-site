module.exports = {
    /**
     * Returns back some attributes based on whether the
     * link is active or a parent of an active item
     *
     * @param {String} itemUrl The link in question
     * @param {String} pageUrl The page context
     * @returns {String} The attributes or empty
     */
    getLinkActiveState(itemUrl, pageUrl) {
        let response = '';

        if (itemUrl === pageUrl) {
            response = ' aria-current="page"';
        }

        if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
            response += ' data-state="active"';
        }

        return response;
    },
    /**
     * Returns the circumference of a circle based on its radius
     * @param {Number} radius The radius of the circle
     * @returns {Number} The circumference of the cicle
     */
    getCircleCircumference(radius) {
        // circumference = 2 * PI * radius
        return 2 * 3.14 * radius;
    },
    /**
     * Returns a partial circumference value based on a given ratio
     * @param {Number} radius The radius of the circle
     * @param {Number} ratio The ratio of the full circumference
     * @returns {Number} The partial of a given circumference
     */
    getCircleCircumferencePartial(radius, ratio) {
        return this.getCircleCircumference(radius) * ratio
    }
};