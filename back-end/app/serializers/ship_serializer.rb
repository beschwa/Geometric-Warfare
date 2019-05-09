class ShipSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :bullet_url
  # has_many :leaderboards
end
