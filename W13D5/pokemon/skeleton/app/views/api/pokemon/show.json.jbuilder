json.pokemon do 
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type 
  json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}") 
  json.extract! @pokemon, :item_ids 
end 

json.items do # put json.association to use an association 
  @pokemon.items.each do |item| # we want the items for that pokemon 
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url) 
    end
  end
end 