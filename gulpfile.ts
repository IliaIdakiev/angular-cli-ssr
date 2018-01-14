import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';
import * as del from 'del';
import * as path from 'path';
import { spawn } from 'cross-spawn';

const BIN_PATH = path.resolve('./node_modules/.bin');

const task = (name: string, command: string, args: string[]) => cb => {
  const op = spawn(`${BIN_PATH}${path.sep}${command}`, args);
  op.stderr.pipe(process.stderr);
  op.stdout.pipe(process.stdout);
  op.on('exit', (code) => {
    if (code !== 0) {
      return cb(new Error(`${name} failed!`));
    }
    console.log(`${name} completed!`);
    cb();
  });
};

const clean = (paths: string[]) => cb => {
  del(paths).then(delPaths => {
    console.log('Deleted:\n', delPaths.join('\n'));
    cb();
  });
};

gulp.task('build-ng-browser-prod', task('prod angular browser build', 'ng', ['build', '--prod']));
gulp.task('build-ng-browser-aot', task('angular aot browser build', 'ng', ['build', '--aot']));
gulp.task('build-ng-server', task('angular server build', 'ngc', ['-p', './src/tsconfig.server.json']));
gulp.task('build-server', task('server build', 'tsc', ['-p', './tsconfig.server.json']));

gulp.task('clean-main', clean(['./out-server']));

gulp.task('default', cb =>
  runSequence(
    'clean-main',
    'build-ng-browser-aot',
    'build-ng-server',
    'build-server',
    cb
  ));

gulp.task('prod', cb =>
  runSequence(
    'clean-main',
    'build-ng-browser-prod',
    'build-ng-server',
    'build-server',
    cb
  ));
