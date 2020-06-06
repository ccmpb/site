module.exports = eleventyConfig => {
	// Copy our static assets to the output folder
	eleventyConfig.addPassthroughCopy('css');
	eleventyConfig.addPassthroughCopy('js');
	eleventyConfig.addPassthroughCopy('images');
  };