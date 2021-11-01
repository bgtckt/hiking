let project_folder = "dist";
//let project_folder = require("path").basename(__dirname);  // присваивание результирующей папке имени проекта
let source_folder = "source";

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  src: {
    html: source_folder + "/*.html",
    css: source_folder + "/less/style.less",
    js: source_folder + "/js/*.js",    // "/js/script.js"
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: source_folder + "/fonts/*.{woff2,woff,ttf}",
  },
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/less/**/*.less",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  clean: "./" + project_folder + "/"
}

let {src, dest} = require("gulp"),
    gulp = require("gulp"),
    browsersync = require("browser-sync").create(),
    fileinclude = require("gulp-file-include"),
    del = require("del"),
    less = require("gulp-less"),
    gulp_image = require("gulp-image"),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify-es").default,
    autoprefixer = require("gulp-autoprefixer");


//функция для обновления браузера
function browserSync (params) {
    browsersync.init({
      server: {
        baseDir: "./" + project_folder + "/"
      },
      port: 3000,
      notify: false
    })
};

//функция для формирования html файлов в результирующей папке dist
function html () {
  return src(path.src.html)
  //.pipe(fileinclude())        //склеивание html файлов из папки source в один результирующий файл
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
};

//функция для формирования css файлов в результирующей папке dist
function css () {
  return src(path.src.css)
    .pipe(
      less({
        outputStyle: "expanded"   //формирование результирующих css файлов без сжатия
      })
    )
    .pipe(
      group_media()
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: true
      })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
};

//функция для формирования js файлов в результирующей папке dist
function js () {
  return src(path.src.js)
  //.pipe(fileinclude())        //склеивание js файлов из папки source в один результирующий файл
    .pipe(dest(path.build.js))
    .pipe(
      uglify()
    )
    .pipe(
      rename({
        extname: ".min.js"
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
};

//функция для формирования изображений в результирующей папке dist
function images () {
  return src(path.src.img)
    .pipe(                    // сжатие изображений в результирующей папке без потери качества
      gulp_image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: false,
        concurrent: 10,
        quiet: true
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
};

//функция для формирования шрифтов в результирующей папке dist
function fonts () {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
    //.pipe(browsersync.stream())
};

//функция для отслеживания изменений в файлах
function watchFiles (params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
};

//функция для автоматического удаления папки dist
function clean (params) {
  return del(path.clean);
};

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
