# Namespacing Questions

What is a namespace?
> Answer: A subset of controllers (different than the traditional rails given ones) that live under a specific URL.

&nbsp;

Why do we nest our endpoints under the API namespace?
> Answer: This is done in order to tell our router about the new controller.

&nbsp;

How do we nest routes under the API namespace in Rails?
> Answer: 
        
        namespace :api do 
          resources :cats, only: [:index]
        end

&nbsp;

How do we define those controllers and views under the API namespace?
> Answer: First we need to do `rails g controller api/name`. Then in our routes file, we need to tell our router about the new controller:
        
        namespace :api do
          resources :cats, only: [:index]
        end

Lastly, we have to store our index.json.jbuilder view in the location under the `app/views/api/cats` folder in order for the new `Api::CatsController` to find it. Finally, this allows us to access our api endpoint on `localhost:3000/api/cats`. 

