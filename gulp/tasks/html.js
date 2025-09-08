import fileInclude from 'gulp-file-include'
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import handlebars from 'gulp-compile-handlebars'
import rename from 'gulp-rename'
import nodePath from "path";

const options = {
    batch : [nodePath.resolve('src/html-templates/')],
    helpers: {
        array: function() {

            return Array.prototype.slice.call(arguments, 0, -1);
        }
    }
}

export const html = () =>{
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'HTML',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(fileInclude())
        .pipe(handlebars({}, options))
        .pipe(rename({ extname: '.html' }))
        .pipe(app.plugins.replace(/@assets\//g, 'assets/'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                (webpHtmlNosvg())
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    value: '%DT%',
                    append: {
                        key: '_v',
                        cover: 0,
                        to: ['css', 'js'],
                    },
                    output: {
                        file: 'gulp/version.json',
                    },
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
}