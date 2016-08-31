#!/usr/bin/env node

require('shelljs/global');
var fs = require('fs');
var path = require('path');

var srcPath = path.resolve(__dirname, '../src')
  , buildPath = path.resolve(__dirname, '../build')
  , componentsPath = path.join(srcPath, 'components')
  , buildComponentsPath = path.join(buildPath, 'components')
  , stylusPath = path.join(srcPath, 'stylus')
  , buildStylusIndex = path.join(buildPath, 'stylus/react-alp.styl')
  , buildCSSPath = path.join(buildPath, 'css')
  , babel = path.resolve(__dirname, '../node_modules/.bin/babel')
  , tmp = tempdir();

var package_json = require('../package.json');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

if (!test('-f', babel)) {
  echo('try globe babel');
  if (which('babel')) {
    babel = 'babel';
  } else{
    echo('Sorry, this script requires babel');
    exit(1);
  }
}

// clean build path
rm('-rf', buildPath);
mkdir(buildPath);

// build es6 file
if(exec([babel, srcPath, '-d', buildPath].join(' ')).code !== 0){
  echo('Error: babel build es6 failed');
  exit(1);
}

// exec(['copyfiles -u 1', srcPath + '/**/*.styl', path.join(srcPath, '**/*.md'), path.join(srcPath, 'resources/*'), buildPath].join(' '));
cp('-Rf', path.join(srcPath, 'stylus'), path.join(buildPath));
cp('-Rf', path.join(srcPath, 'resources'), path.join(buildPath));

var index_styl = '';

// var component_index_styl_template =
//   '@import \"../../stylus/theme.styl\"\r' +
//   '@import \"../../stylus/mixin.styl\"\r' +
//   '@import \"../../stylus/global.styl\"\r\r';

/**
 * 遍历组件
 */
ls(componentsPath).forEach(function(component) {
  var component_path = path.join(componentsPath, component);
  var build_component_path = path.join(buildComponentsPath, component);

  // var component_index_styl = component_index_styl_template;
  // var build_component_index_styl_path = path.join(build_component_path, 'index.styl');

  // 遍历组件样式文件
  ls(path.join(component_path, '*.styl')).forEach(function(styl) {

    // 添加组件样式文件的相对路径
    cp('-Rf', styl, build_component_path);
    if (!/index.styl/.test(styl)) {
      index_styl += "@import \"" + path.relative(stylusPath, styl) + "\"\r";
      // component_index_styl += "@import \"" + path.relative(component_path, styl) + "\"\r";
    }
  });

  // 写入文件 component/index.styl
  // fs.writeFileSync(build_component_index_styl_path, component_index_styl);
});

// 添加<组件样式>到 stylus/index.styl
sed('-i', '// COMPONENTS', index_styl, buildStylusIndex);

// build stylus
if (!test('-d', buildCSSPath)) mkdir(buildCSSPath);
if (exec('stylus ' + buildStylusIndex + ' -o ' + path.join(buildCSSPath, '/react-alp.css')).code !== 0) {
  echo('Error: build stylus to css failed');
  exit(1);
}
if (exec('stylus -c ' + buildStylusIndex + ' -o ' + path.join(buildCSSPath, '/react-alp.min.css')).code !== 0) {
  echo('Error: build stylus to min.css failed');
  exit(1);
}

// fix import path
sed('-i', 'node_modules', '../node_modules', path.join(buildPath, 'stylus/theme.styl'));

var new_package_json = {
  name: 'react-alp',
  author: package_json.author,
  version: package_json.version,
  description: package_json.description,
  main: 'components/*',
  keywords: package_json.keywords,
  repository: package_json.repository,
  license: package_json.license,
  bugs: package_json.bugs,
  homepage: package_json.homepage,
  peerDependencies: package_json.peerDependencies,
  dependencies: package_json.dependencies,
};

fs.writeFileSync(path.join(buildPath, 'package.json'), JSON.stringify(new_package_json, null, 2));

exit(0);
