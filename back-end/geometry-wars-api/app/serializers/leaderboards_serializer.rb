class LeaderboardsSerializer < ActiveModel::Serializer
  attributes :id, :name, :ship, :stage, :score
  belongs_to :ship
  belongs_to :stage
end
