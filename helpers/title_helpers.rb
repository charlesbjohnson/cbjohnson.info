module TitleHelpers

  def full_title
    title = if current_page.data.title
      "#{current_page.data.title} | blog"
    elsif current_page.data.section
      "#{current_page.data.section}"
    end

    title << " | #{data.site.name}"
  end

  def section_title
    current_page.data.title ? 'blog' : current_page.data.section
  end

end