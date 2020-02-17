@pokemon.each do |pokem| 
  json.set! pokem.id do 
    json.extract! pokem, :id, :name 
    json.image_url asset_path("pokemon_snaps/#{pokem.image_url}") 
  end
end 


