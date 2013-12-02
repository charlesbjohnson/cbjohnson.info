require 'find'

module BlogImageHelpers

  def blog_image(image)
    blog_files = Find.find(File.expand_path('blog', 'source')).to_a
    blog_files.grep(/#{image}/).first[/\/blog.+/]
  end

end
