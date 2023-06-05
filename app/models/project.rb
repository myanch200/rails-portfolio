class Project < ApplicationRecord
  has_rich_text :body
  has_many_attached :images, dependent: :destroy, strict_loading: true
end
