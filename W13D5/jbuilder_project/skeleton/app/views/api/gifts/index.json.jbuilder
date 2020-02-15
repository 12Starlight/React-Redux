# notice we can add more information via the foreign_key by not including it 
# in the partial and instead adding it on the page we want
json.array! @gifts, :title, :description, :guest_id 