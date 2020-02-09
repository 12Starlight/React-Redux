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