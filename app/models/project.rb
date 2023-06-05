class Project < ApplicationRecord
  has_rich_text :body
  has_many_attached :images, dependent: :destroy

  validates :title, presence: true
  validates :body, presence: true


  scope :published, -> { where(published: true) }

end
