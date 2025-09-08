import gulpPkg from 'gulp';
const { src } = gulpPkg;

import ghPages from 'gulp-gh-pages';

export const deploy = () => {
    return src('./dist/**/*')
        .pipe(ghPages());
};
