module TitleHelpers

  def full_title
    title = ""
    if current_page.data.title
      title << "#{current_page.data.title} | blog | "
    elsif current_page.data.section
      title << "#{current_page.data.section} | "
    end
    title << data.site.name
  end

  def section_title
    if current_page.data.title
      'blog'
    else
      current_page.data.section
    end
  end

end