module BlogImageHelpers

  def blog_image(image)
    images = Find.find('source/blog').grep(/#{image}/)
    return '' if images.empty?

    images.first[/\/blog.+/]
  end

end
