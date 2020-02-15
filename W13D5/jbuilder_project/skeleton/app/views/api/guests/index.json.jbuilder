# json.array! @guests.each do |guest|
#   json.name guest.name 
#   json.age guest.age 
#   json.favorite_color guest.favorite_color
# end 

json.array! @guests.each do |guest|
  if (guest.age <= 50 && guest.age >= 40) 
    json.partial! 'api/guests/guest', guest: guest 
  end  
end 