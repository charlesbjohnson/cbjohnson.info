require 'find'

module BlogImageHelpers

  def blog_image(image)
    Find.find(File.join('source', 'blog'))
        .grep(/#{image}/)
        .first.to_s[%r{/blog/.+}].to_s
  end

end
