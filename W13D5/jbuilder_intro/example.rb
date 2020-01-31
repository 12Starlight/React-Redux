# Vunerable Schema Example
# schema.rb

create_table "users", force: :cascade do |t|
  t.string "username", null: false
  t.string "password_digest", null: false 
  t.string "session_token", null: false 
  t.datetime "created_at", null: false 
  t.datetime "updated_at", null: false 
  t.index ["session_token"], name: "index_users_on_session_token", unique: true
  t.index ["username"], name: "index_users_on_username", unique: true 
end

# Api::UsersController
def show 
  @user = User.find(params[:id])
  render json: @user 
end 

# JSON Vunerability Object Example

{
  "id": 1,
  "username": "BlueJay",
  "password_digest": "$2a$10$qFkvLzrkjk/Hw3fAPAd6..3OXaCUnQMKQR4xIKb/ypsGx/eRJrwV2",
  "session_token": "RMZ7Ox8xnHQbLid6FRMKBg",
  "created_at": "2019-02-20 12:20:29 -0800",
  "updated_at": "2019-02-20 12:20:29 -0800"
}

# Constructing A JSON Object Example
# Api::UsersController

def show 
  @user = User.find(params[:id])
  response = {}
  response[:id] = @user.id 
  response[:username] = @user.username 

  render json: response 
end

# Complicated Construction Of JSON Object Example
# Api::UsersController
def show
  @user = User.find(params[:id])
  response = {}
  response[:id] = @user.id 
  response[:username] = @user.username 
  response[:comments] = {}
  @user.comments.each do |comment|
    comment_response = {}
    comment_response[:id] = comment.id 
    comment_response[:author_id] = comment.author_id 
    comment_response[:body] = comment.body 
    comment_response[:created_at] = comment.created_at
    response[:comments][comment.id] = comment_response
  end

  render json: response 
end


# Jbuilder View Example
# Api::UsersController
def show
  @user = User.find(params[:id])
  render :show 
end 

# /app/views/api/users/show.json.jbuilder
json.extract! @user, :id, :username 
json.comments do 
  @user.comments.each do |comment| # this would have to be nested in the routes?
    json.set! comment.id do 
      json.extract! comment, :id, :author_id, :body, :created_at
    end
  end
end

# JSON Object Created Example

{
  "id": 1
  "username": "BlueJay",
  "comments": {
    "1": {
      "id": "1",
      "author_id": "1",
      "body": "Can not complain",
      "created_at": "2019-02-20 13:33:06 -0800"
    },
    "2": {
      "id": "2",
      "author_id": "1",
      "body": "Not too bad, pass the butter please",
      "created_at": "2019-02-20 13:35:58 -0800"
    },
    "3": {
      "id": "3",
      "author_id": "1",
      "body": "You might as well have another sandwich and watch Johnny Carson",
      "created_at": "2019-02-20 13:38:36 -0800"
    }
  }
}


=begin 

How Jbuilder works with JSON

To specify a key in the response, we can use the syntax: 
  json.some_key some_value

The value can be either a valid data type, or a do block that defines a nested 
scope

=end

# Value is valid data type "Bob"
# jbuilder:
json.username "Bob"

# response:
{ "username": "Bob" }

# Value is a do block 
# jbuilder:
json.title "The first post"
json.author do 
  json.username "Bob"
end

# response:
{
  "title": "The first post",
  "author": {
    "username": "Bob"
  }
}
 

# json.extract! lets us extract attributes from an instance directly
# jbuilder:
json.extract! @user, :fullname, :company, :email 

# response: 
{
  "fullname": "Blue Jay",
  "company": "StarlightCapital, LLC.",
  "email": "startlightcapital@gmail.com"
}

# We can use json.set! to set keys that we need to first evaluate as variables:
# jbuilder:
json.set! @user.id do # this needs to be evaluated first
  json.extract! @user, :fullname, :company, :email 
end

# response
{
  1: { # got evaluated
    "fullname": "Blue Jay",
    "company": "StarlightCapital, LLC.",
    "email": "starlightcapital@gmail.com"
  }
}

# Configuring Rails To Look For Jbuilder Views
# routes.rb

Rails.application.routes.draw do 
  namespace :api, defaults: { format: :json } do
    resources :pokemon, only: [:index, :show, :create, :destroy]
  end
end

# Partials can also be used just like with ERB as shown in the directory 
# structure below
=begin 
 
instagram_clone
  |_ app
    |_ ...
    |_ views
      |_ photos
        |_ index.json.jbuilder
        |_ show.json.jbuilder
        |_ _photo.json.jbuilder # here a partial is being used

=end 