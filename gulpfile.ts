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

gulp.task('build-ng-browser-aot', task('ng aot browser build', 'ng', ['build', '--aot']));
gulp.task('build-ng-server', task('ng server build', 'ngc', ['--aot', '-p', './src/tsconfig.server.json']));

gulp.task('clean-outdir', clean(['./out-tsc']));
gulp.task('clean-ngfactory', clean(['./src/ngfactory']));

gulp.task('ng-factory-build', cb =>
  runSequence(
    'clean-ngfactory',
    'build-ng-server',
    cb
  ));

gulp.task('default', cb =>
  runSequence(
    'clean-ngfactory',
    'build-ng-browser-aot',
    'ng-factory-build',
    'clean-outdir',
    cb
  ));
