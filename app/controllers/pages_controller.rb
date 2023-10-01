class PagesController < ApplicationController
  before_action :authenticate_user!, except: [:home]
  def home
    @projects = Project.published.with_attached_images.with_rich_text_body.order(created_at: :desc).limit(10)
  end

  def about; end
end
