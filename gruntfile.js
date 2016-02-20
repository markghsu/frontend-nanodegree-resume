module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.initConfig({
			jshint: {
			all: [
				'gruntfile.js',
				"js/helper.js",
				"js/resumeBuilder.js"
			]
		}
	});
	grunt.registerTask('default', [
		'jshint'
	]);
};