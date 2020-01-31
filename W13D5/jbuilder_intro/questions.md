# Jbuilder Questions

What are the side effects of using `render json: @users`?
>Answer: We end up sending **sensitive** information that the client should not get like <kbd>session_tokens</kbd>, <kbd>passwords</kbd>, etc. 

&nbsp;

What are two reasons we want to use jbuilder over `render json:`?
>Answer: <kbd>Filter data we send up</kbd> and <kbd>Add more to the data we send up</kbd>

&nbsp;

Where do we put our json.jbuilder files?
>Answer: We put them in the <kbd>view</kbd> folder under the api or where we previously have been putting our ERB files.

&nbsp;

What are some jbuilder methods we can use and how do they change our json respones?
>Answer: <kbd>jbuilder.extract!</kbd> which lets us extract attributes from an instance directly and <kbd>json.set!</kbd> which allows us to set keys that need to be evaluated first. 

&nbsp;

How do we make our routes that return json default to returning json instead of html?
>Answer: We want to set the default format of resources in `config/routes.rb` to <kbd>:json</kbd>. So, it would look like the following:

      Rails.application.routes.draw do 
        namespace :api, defaults: { format: :json } do
          resources :pokemon, only: [:index, :show, :create, :destroy]
        end
      end