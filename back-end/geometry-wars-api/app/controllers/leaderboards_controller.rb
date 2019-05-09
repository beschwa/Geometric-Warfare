class LeaderboardsController < ApplicationController
  def index
    @leaderboards = Leaderboard.all
    render json: @leaderboards, each_serializer: LeaderboardsSerializer
  end
  def create
  end
end
