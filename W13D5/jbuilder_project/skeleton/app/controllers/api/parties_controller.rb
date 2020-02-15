class Api::PartiesController < ApplicationController
  def index
    @parties = Party.includes(guests:[:gifts]).all
    render :index
  end

  def show
    # So, basically we are keying into the guests's gifts 
    @party = Party.includes(guests: [:gifts]).find_by(id: params[:id])
    render :show
  end
end
