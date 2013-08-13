module DateHelpers

  # for some reason, a blog article has an ActiveSupport::TimeWithZone
  # as a date, but the date for the current page (even when it is a blog article)
  # is a String, so it must be parsed into a Date first. Instead of formatting a
  # date in one place, but parsing and then formatting a date string in another,
  # I just do both right here.
  #
  # "2013-08-10 02:48 UTC" becomes "August 10, 2013"
  def format_date(s)
    Date.parse(s.to_s).strftime('%b %e, %Y')
  end

end