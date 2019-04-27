const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const del = require('del');

const buildFolder = 'dist';
const tsProject = ts.createProject('tsconfig.json');

const clean = done => del(buildFolder).then(() => done());

const build = () => 
  src('src/**/*.ts')
    .pipe(tsProject())
    .pipe(dest(buildFolder));

const watch = done =>
  nodemon({
    script: `${buildFolder}/app.js`,
    ext: 'ts',
    watch: 'src',
    tasks: ['build'],
    done
  })
    
module.exports = {
  clean,
  build,
  watch
}