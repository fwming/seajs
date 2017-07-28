module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    transport:{
	    kk:{
	    	files:{
	    		'./dist/mail.js':['./js/mail.js'],
	    		'./dist/rang.js':['./js/rang.js'],
	    		'./dist/drag.js':['./js/drag.js'],
	    		'./dist/tc.js':['./js/tc.js'],
	    	}
	    }
    },
    concat:{
    	kk:{
    		files:{
    			'./dist/index.js':['./js/mail.js','./js/rang.js','./js/drag.js','./js/tc.js']
    		}
    	}
    }
  });

  // Load the plugin that provides the "uglify" task.
//grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-cmd-transport');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['transport','concat']);

};