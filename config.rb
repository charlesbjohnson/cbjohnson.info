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
  blog.sources           = ":year/:month/:title.html"
  blog.permalink         = ":year/:month/:title.html"
  blog.paginate          = true
  blog.layout            = 'blog_layout'
end

# Automatically create directories for files (pretty URLs)
activate :directory_indexes

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

# Deployment
activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
  deploy.branch = "master"
end