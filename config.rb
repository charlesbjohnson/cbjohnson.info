# Use parts of foundation
require 'zurb-foundation'


# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end


# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end


# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }


Time.zone = 'Eastern Time (US & Canada)'


# Blog
activate :blog do |blog|
  blog.prefix            = 'blog'
  blog.permalink         = ":year/:month/:title.html"
  blog.sources           = ":year/:month/:day-:title.html"
  blog.layout            = 'blog_layout'

  # blog.taglink = "tags/:tag.html"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = ":year.html"
  # blog.month_link = ":year/:month.html"
  # blog.day_link = ":year/:month/:day.html"
  # blog.default_extension = ".markdown"
end


# page "/feed.xml", :layout => false


# Automatically create directories for files (pretty URLs)
activate :directory_indexes


# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes


# Reload the browser automatically whenever files change
activate :livereload


set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'


# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_path, "/Content/images/"
end


# Image compression
activate :image_optim do |image_optim|
  # print out skipped images
  # image_optim.verbose = false

  # Setting these to true or nil will let image_optim determine them (recommended)
  # image_optim.nice = true
  # image_optim.threads = true

  # Image extensions to attempt to compress
  # image_optim.image_extensions = %w(.png .jpg .gif)

  # compressor worker options, individual optimisers can be disabled by passing
  # false instead of a hash
  # image_optim.pngcrush_options  = {:chunks => ['alla'], :fix => false, :brute => false}
  # image_optim.pngout_options    = {:copy_chunks => false, :strategy => 0}
  # image_optim.optipng_options   = {:level => 6, :interlace => false}
  # image_optim.advpng_options    = {:level => 4}
  # image_optim.jpegoptim_options = {:strip => ['all'], :max_quality => 100}
  # image_optim.jpegtran_options  = {:copy_chunks => false, :progressive => true, :jpegrescan => true}
  # image_optim.gifsicle_options  = {:interlace => false}
end


# Deployment
activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
  deploy.branch = "master" # default: gh-pages
  # deploy.remote = "custom-remote" # remote name or git url, default: origin
end