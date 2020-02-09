# **Pokedex (Part 1)**

&nbsp;

<kbd>Pokedex: Part 1 - Jbuilder, React, Redux</kbd>

Okay, now it is time to put everything you know to its ultimate use and build the coolest app ever, a `Pokedex`! We will use React/Redux/Rails to manage <kbd>Pokemon</kbd> and their <kbd>Items</kbd> in the Pokedex. For a live demo, click on the link [here](http://aa-pokedex.herokuapp.com/#/pokemon/1)!

&nbsp;

### **Phase 0: Rails API Setup**

So, most of the work is already done for us, with a Rails backend, migrations, and models already being set up.
  * Download the [skeleton](https://open.appacademy.io/learn/swe-online/react/pokedex--part-1-). 
  * Add gem `'bootsnap'` to your Gemfile.
  * Make sure Postgres is runing, then run <kbd>rails db:setup</kbd> (short for <kbd>rails db:create db:schema:load db:seed</kbd>).

&nbsp;

Get familiar with the files and folders.
  * Take a look at the <kbd>schema</kbd>, <kbd>routes</kbd>, and <kbd>StaticPagesController</kbd>.
  * Also look at the <kbd>Pokemon</kbd> and <kbd>Item</kbd> models.
  * Open up the rails console (<kbd>rails c</kbd>) to see what is in the database.
  * Start up the rails server (<kbd>rails s</kbd>) and visit the root url. 

&nbsp;

### **API Namespace**

Let us build pokemon routes! These need to be nested under an <kbd>api</kbd> namespace.

Code:
![alt text](./app/assets/images/notes/Rails_API/Screen&#32;Shot&#32;2020-02-09&#32;at&#32;1.jpg "Routes Example")

&nbsp;

The <kbd>defaults: { format: :json }</kbd> option tells the controller to first look for a <kbd>.json.jbuilder</kbd> view rather than an <kbd>html.erb</kbd> view.

Make sure the <kbd>routes.rb</kbd> table should look like the following:

![alt text](./app/assets/images/notes/Rails_API/Screen&#32;Shot&#32;2020-02-09&#32;at&#32;2.jpg "Rails Routes Example")

&nbsp;

### **Pokemon Controller** 

We want a controller to handle our pokemon <kbd>resources</kbd>, so it is time to build one.
  * Generate an <kbd>Api::PokemonController</kbd>.
    * Use the command <kbd>rails g controller Api::Pokemon</kbd> in order to generate the correct helper and view files.
  * Define <kbd>#index</kbd> and <kbd>#show</kbd> controller actions.

&nbsp;

It is important that our actions **render json responses**. In order for everything to flow on the front end, let us go and format our <kbd>index</kbd> action to generate json responses that look something like this:

![alt text](./app/assets/images/notes/Rails_API/Screen&#32;Shot&#32;2020-02-09&#32;at&#32;3.jpg "JSON Response Example")

&nbsp;

Our `primary keys` of the pokemon, **are the keys in our json response**. The objects themselves are the values. This is a perfect place to use <kbd>Jbuilder</kbd>. 
  * Create a `views/api/pokemon/index.json.jbuilder` file.
  * Iterate over each pokemon.
  * Use <kbd>json.set!</kbd> to explicitly set the key to the pokemon's id.
  * Use <kbd>json.extract!</kbd> to grab the pokemon's <kbd>id</kbd>, <kbd>name</kbd>, <kbd>image_url</kbd>.

&nbsp;

Code:
![alt text](./app/assets/images/notes/Rails_API/Screen&#32;Shot&#32;2020-02-09&#32;at&#32;4.jpg "Pokemon Index JSON Example")

&nbsp;

We want to use the <kbd>asset_path</kbd> helper to find the path that is correct for the image. Locations of assets are sometimes diffreent for production, so to make sure, use <kbd>asset_path</kbd> rather than a literal path. For more information check [these guides](https://guides.rubyonrails.org/asset_pipeline.html) out!

We have all the information we need for our index route. Keep in mind, Jbuilder allows us to `select and organize` or *curate* our data, gettting back only the attributes we want.
  * Now that we have the basics, let us create a Jbuilder view for <kbd>PokemonController#show</kbd>. We want the action to render all the pokemon info for just that pokemon, including all it's items. For this particular case, list the poke and items separately bc they represent separate resources. On Day 2 when we `normalize` our data, it will make more sense. 

&nbsp;

Remember, we want to use `json.association` to use our associtions and <kbd>@instance.association.each do |item|</kbd> in order to iterate over the associations. Everything else is just pretty much the same as our `index.json.jbuilder` file.

Code:
![alt text](./app/assets/images/notes/Rails_API/Screen&#32;Shot&#32;2020-02-09&#32;at&#32;5.jpg "Pokemon Show JSON Example")

&nbsp;

A `GET` request to <kbd>localhost:3000/api/pokemon/5</kbd> should render for you:

![alt text](./app/assets/images/notes/Rails_API/Screen&#32;Shot&#32;2020-02-09&#32;at&#32;6.jpg "JSON Object For Pokemon Example")