class Episode < ApplicationRecord
  belongs_to :season
  has_many :deaths
end
