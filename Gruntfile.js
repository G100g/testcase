/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		
		// Task configuration.
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					"after": false,
					"afterEach": false,
					"angular": false,
					"before": false,
					"beforeEach": false,
					"browser": false,
					"describe": false,
					"expect": false,
					"inject": false,
					"it": false,
					"jasmine": false,
					"spyOn": false,
					"$": false,
					'module': false,
					'element': false,
					'by': false,
					'$$': false,
					'exports': false
				}
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			src: {
				src: ['src/**/*.js', 'tests/**/*.js']
			}
		},
		
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'src/carouselTC.css': 'src/carouselTC.scss',
				}
			}
		},   
		
		karma: {
			unit: {
				configFile: 'tests/karma/karma.conf.js',
				singleRun: true
			}
		},
		
		protractor: {
			options: {
				keepAlive: false,
				configFile: "tests/protractor/protractor.conf.js",
				
				args: {
					seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
					chromeDriver: 'node_modules/protractor/selenium/chromedriver'
				}			
			},
			run: {}
		},
		
		// WATCH    
		watch: {
			
			options: {
				livereload: true,
				files: [
					'index.html'
				]
			},
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},      
			sass: {
				files: 'src/*.scss',
				tasks: ['sass']
			},      
			
			js: {
				files: '<%= jshint.src.src %>',
				tasks: ['jshint:src']
			},
			
			karma: {
				files: ['src/**/*.js', 'tests/karma/**/*.js'],
				tasks: ['jshint:src', 'karma']
			},
			
			protractor: {
				files: ['src/**/*.js', 'tests/protractor/**/*.test.js'],
				tasks: ['jshint:src', 'protractor']
			}
		
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-karma');  
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-protractor-runner');	
	
	// Default task.
	grunt.registerTask('default', ['jshint', 'sass', 'karma', 'protractor:run']);
	
	grunt.registerTask('test', ['karma', 'protractor:run']);

};
