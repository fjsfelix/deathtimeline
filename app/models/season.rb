class Season < ApplicationRecord
  has_many :episodes
  has_many :deaths, through: :episodes
end
