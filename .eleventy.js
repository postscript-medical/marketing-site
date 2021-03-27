const getCollectionByDisplayOrder = require('./src/utils/get-collection-by-display-order.js');

module.exports = config => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    config.setUseGitIgnore(false);

    // Returns a list of research key findindgs ordered by filename
    config.addCollection('keyFindings', collection => getCollectionByDisplayOrder(collection, './src/content/research/key-findings/*.md'));

    // Primary hospitals
    config.addCollection('hospitalsPrimary', collection => getCollectionByDisplayOrder(collection, './src/content/hospitals/*.md'));

    // Contributors
    config.addCollection('contributorsCardiology', collection => getCollectionByDisplayOrder(collection, './src/content/contributors/cardiology/*.md'));
    config.addCollection('contributorsDermatology', collection => getCollectionByDisplayOrder(collection, './src/content/contributors/dermatology/*.md'));
    config.addCollection('contributorsGastroenterology', collection => getCollectionByDisplayOrder(collection, './src/content/contributors/gastroenterology/*.md'));
    config.addCollection('contributorsOncology', collection => getCollectionByDisplayOrder(collection, './src/content/contributors/oncology/*.md'));
    config.addCollection('contributorsSurgery', collection => getCollectionByDisplayOrder(collection, './src/content/contributors/surgery/*.md'));

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};