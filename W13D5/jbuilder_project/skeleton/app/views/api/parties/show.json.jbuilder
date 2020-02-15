# json.partial! 'api/parties/party', party: @party 

# @party.invitations do |invitation|
#   json.set! invitation.guest.name do 
#     json.partial! 'api/guests/guest', guest: invitation.guest 
#   end
# end 

# json.key: value 
json.name @party.name 

json.guests @party.guests do |guest|
  json.name guest.name 
  json.gifts guest.gifts.each do |gift|
    json.title gift.title 
  end

  # shortcut for the loop above 
  # json.gifts guest.gifts, :title 
end