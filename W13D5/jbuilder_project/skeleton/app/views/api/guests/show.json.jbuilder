json.partial! 'api/guests/guest', guest: @guest 

json.gifts @guest.gifts do |gift|
  # json.title gift.title # done without partial  
  # json.description gift.description 
  json.partial! 'api/gifts/gift', gift: gift # done with partial # notice it automatically creates the JSON keys
end

