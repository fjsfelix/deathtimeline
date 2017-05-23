class Api::DeathsController < ApplicationController
  respond_to :json
  def index
    @deaths = Season.find(params[:season]).deaths.order(id: :asc)
    render json: @deaths
  end
end
