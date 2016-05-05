module.exports = function(grunt) {

	// Grunt的初始化配置
	grunt.initConfig({
		qunit: {
			files: ['index.html']
		},
		jshint: {
			options: {
				jshintrc: true
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			src: {
				src: ['js/*.js']
			},
			test: {
				src: ['js/*.js']
			},
		}
	});

	// 加载Grunt任务
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// 在命令行上输入"grunt"，test task就会被执行。
	grunt.registerTask('default', ['jshint', 'qunit']);

};