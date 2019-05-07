class StageSerializer < ActiveModel::Serializer
  attributes :id ,:name, :image_url
  # has_many :leaderboards
end
