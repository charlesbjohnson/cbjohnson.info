require 'find'

module BlogImageHelpers

  def blog_image(image)
    return find_blog_image(image) if current_article.nil? || environment == :development
    image
  end

  private

  def find_blog_image(image)
    blog_files = Find.find(File.expand_path('blog', 'source')).to_a
    blog_files.grep(/#{image}/).first[/\/blog.+/]
  end

end
