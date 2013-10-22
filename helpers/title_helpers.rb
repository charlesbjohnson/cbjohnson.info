module TitleHelpers

  def full_title
    title = if current_page.data.title
              "#{current_page.data.title} | Blog"
            elsif current_page.data.section
              "#{current_page.data.section}"
            end

    title << " | #{data.site.name}"
    title
  end

  def section_title
    current_page.data.title ? 'Blog' : current_page.data.section
  end

  def active_section(route)
    is_blog_section = route == data.site.routes.blog && is_blog_article?
    current_page.url == route || is_blog_section
  end
end
