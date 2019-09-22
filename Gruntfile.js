module.exports = function(grunt) {
  // Configuración de Grunt.js
  grunt.initConfig({
    // Configuración para proyectos y tareas.
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'node_modules/bootstrap/dist',
          src: '**/*',
          dest: 'public/assets/libraries/bootstrap/dist/'
        }, {
          expand: true,
          cwd: 'node_modules/jquery/dist',
          src: '**/*',
          dest: 'public/assets/libraries/jquery/dist/'
        }, {
          expand: true,
          cwd: 'node_modules/popper.js/dist',
          src: '**/*',
          dest: 'public/assets/libraries/popper.js/dist/'
        }, {
          expand: true,
          cwd: 'node_modules/open-iconic/font',
          src: '**/*',
          dest: 'public/assets/libraries/open-iconic/font/'
        }]
      }
    }
  });

  // loadNpmTask
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Ejecuta las tareas por defecto.
  grunt.registerTask('default', ['copy']);
}
