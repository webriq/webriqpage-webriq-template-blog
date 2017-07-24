fs               = require 'fs'
axis             = require 'axis'
rupture          = require 'rupture'
autoprefixer     = require 'autoprefixer-stylus'
js_pipeline      = require 'js-pipeline'
css_pipeline     = require 'css-pipeline'
records          = require 'roots-records'
collections      = require 'roots-collections'
excerpt          = require 'html-excerpt'
moment           = require 'moment'
cleanUrls        = require 'clean-urls'
roots_config     = require 'roots-config'
SitemapGenerator = require 'sitemap-generator'
rssfeed          = require 'webriq-roots-rss-generator'
orderBy          = require 'lodash.orderby'
_                = require 'underscore'
browserify   = require 'roots-browserify'


monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  locals:
    postExcerpt: (html, length, ellipsis) ->
      excerpt.text(html, length || 100, ellipsis || '...')
    dateFormat: (date, format) ->
      moment(date).format(format)
    sortBy: (obj) ->
      orderBy obj, ['date'], ['desc']
    sortByFeatured: (obj) ->
      orderBy obj, ['featured', 'date'], ['desc', 'desc']


  extensions: [
    records(
      site: { file: "data/site.json" }
      files: { file: "data/files.json" }
      config: { file: "data/config.json" }
    ),
    collections(folder: 'blog', layout: 'blog'),
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl'),
    browserify(files: 'assets/js/main.js', out: '/js/bundle.js'),
    rssfeed(
      folder: "blog"
      output: "feed.xml"
      settings:
        feed_url : "//webriq-template-blog.sites.webriqs.com/feed.xml"
        site_url: "//webriq-template-blog.sites.webriqs.com/"
      )
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true
