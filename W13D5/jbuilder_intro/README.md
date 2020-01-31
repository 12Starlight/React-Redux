# Intro to Jbuilder

### **Sending Customized JSON responses with Jbuilder**

[Jbuilder](./https://github.com/rails/jbuilder) is used to customize the responses we get back in JSON from our rails server.

By default, normally when we make a request for data in our Rails controller, we end up getting back **all** the attributes back from the database. Up to this point, this has been the default behavior we have used. We did this by writing <kbd>render json: @users</kbd> at the end of our controller actions. However, this has some very bad and unwanted side effects - for one, we will end sending everything, including **potentially `sensitive` information**, to the client. Consider the following:

<kbd>users</kbd> schema:

![alt text](./Images/Screen&#32;Shot&#32;2020-01-30&#32;at&#32;9.55.43&#32;PM.jpg "Vunerable Example Schema")

&nbsp;

By default, if we send the <kbd>@user</kbd> as a JSON response, we will end up with something like this:

      {
        "id": 1
        "username": "BlueJay",
        "password_digest": "$2a$10$qFkvLzrkjk/Hw3fAPAd6..3OXaCUnQMKQR4xIKb/ypsGx/eRJrwV2",
        "session_token": "RMZ7Ox8xnHQbLid6FRMKBg",
        "created_at": "2019-02-20 12:20:29 -0800",
        "updated_at": "2019-02-20 12:20:29 -0800"
      }

&nbsp;

This is very disturbing bc we end up sending information that the client does **not** need to know! The <kbd>password_digest</kbd> and <kbd>session_token</kbd>, should be kept hidden from the client in order to prevent a potential security vulnerability. One way to get around this might be to:

![alt text](./Images/Screen&#32;Shot&#32;2020-01-30&#32;at&#32;10.13.16&#32;PM.jpg "Constructing A JSON Object Example")

&nbsp;

As you can notice, we constructed a hash from scratch that ONLY contains the data we want to send to the client, then rendered it as JSON. Now this is not the worst idea, however what if we also wanted to fetch a list of comments from that user?

![alt text](./Images/Screen&#32;Shot&#32;2020-01-30&#32;at&#32;10.18.23&#32;PM.jpg "Complicated Construction Of JSON Object Example")

&nbsp;

Now this works, but to what extent? I mean, do we really want to smash all this logic into our one controller? As this gets more and more complicated, things will definitely become harder to manage. 

We can do better. We will do better. Enter <kbd>Jbuilder</kbd> 😉	

With Jbuilder, rails allows us to use our <kbd>views</kbd> folder to create `JSON` templets for our responses. Instead of building HTML views, we can now enjoy the power of <kbd>JSON</kbd> `views` using Jbuilder and ruby code!

When you make your Jbuilder template, simply place a file with the extension <kbd>.json.jbuilder</kbd> where you were previously putting your ERB files. The same way ERB is compiled to an HTML template, Jbuilder templates will be compiled by Rails and you will be left with `JSON`.

Using the beatifuly written Jbuilder view, the above complex nightmare can be written as simply:

![alt text](./Images/Screen&#32;Shot&#32;2020-01-30&#32;at&#32;10.35.26&#32;PM.jpg "Jbuilder Example")

&nbsp;

Using this view, the JSON response would look like:

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
            "body": "Not too bad, pas the butter please",
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

&nbsp;

Now we are talking! Since rails evaluates `Jbuilder` views similarly to how it handles HTML templates, we can access instance variables (like @user) defined in the controller that renders the view, as well as any of their <kbd>associations</kbd>. Jbuilder views can use regular ruby code, but also uses special methods defined by Jbuilder. The [Jbuilder docs](https://github.com/rails/jbuilder) have the best and most detailed information about each of these methods. For now though, we can cover the most common ones here:

&nbsp;

### **Some common Jbuilder methods**

<kbd>json.'<some_key>'</kbd>

To specify a key in the response, we can use the syntax: <kbd>json.some_key some_value</kbd>. The value can either be any valid data type, or a **`block that defines a nested scope`**.

![alt text](./Images/Screen&#32;Shot&#32;2020-01-30&#32;at&#32;11.26.56&#32;PM.jpg)