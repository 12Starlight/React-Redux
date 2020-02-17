class Api::PokemonController < ApplicationController
  def index
    sleep(3)
    @pokemon = Pokemon.all 
    render :index 
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show 
  end 
end


