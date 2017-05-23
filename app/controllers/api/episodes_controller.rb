class Api::EpisodesController < ApplicationController
  respond_to :json

  def index
    @episodes = Season.find(params[:season_id]).episodes
    render json: @episodes
  end
end
