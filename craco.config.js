const path = require("path");

module.exports = {
	style: {
		sass: {
			loaderOptions: {
				sassOptions: {
					includePaths: [path.resolve(__dirname, "src")],
				},
			},
		},
	},
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@styles": path.resolve(__dirname, "src/styles"),
		},
	},
};
