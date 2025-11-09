const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy CSS to the output folder
  eleventyConfig.addPassthroughCopy("css");

  // ✅ Add a date filter for templates
  eleventyConfig.addNunjucksFilter("date", function(dateObj, format = "yyyy") {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk"
  };
};
