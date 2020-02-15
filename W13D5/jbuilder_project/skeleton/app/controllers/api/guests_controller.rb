class Api::GuestsController < ApplicationController
  def index
    # ALL of these actions use Active Record, make sure to read the documentation
    # @guests = Guest.where(age: 40..50).all 
    @guests = Guest.all 
    render :index
  end

  def show
    @guest = Guest.find_by(id: params[:id])
    render :show
  end
end
