let gulp = require('gulp');
let protractor = require('gulp-protractor').protractor;
let notify = require('gulp-notify');
 
gulp.task('executeTests', async function () {
    gulp.src(['../CarnivalAssignment/tests/carnival-spec.js'], {"allowEmpty": true})
        .pipe(notify('Executing Scripts'))  
        .pipe(protractor({configFile: '../CarnivalAssignment/conf/conf.js'
        }))
        .on('error', function(e) { throw e })
    }
);
