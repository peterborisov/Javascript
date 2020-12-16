# HTML
`HTML (Hypertext Markup Language) is the coding language used to describe the content of websites. HTML documents aren’t anything special, they’re just plain old text files. The only thing that turns a plain text HTML file into a website is the web browser. The browser takes that text, parses it, figures out what the tags are that you’ve chosen and displays the website.`

## `HTML syntax`
**element** — the combination of an open tag, the content, and a close tag<br/>
**open tag** — defines where this type of content starts<br/>
**close tag** — defines where this type of content ends<br/>
**attribute** — a piece of metadata that isn’t usually visible in the browser but defines extra information about the element<br/>

## `HTML document setup`
**!DOCTYPE html** — It tells the browser that you’re writing modern HTML(HTML5).<br/>
**html** — Wraps the whole HTML file, everything goes inside it.<br/>
**head** — Stuff that doesn’t necessarily show on the screen, but controls and defines the HTML document.<br/>
**meta** — Used to tell the browser what kind of characters are used in your document. utf-8 allows many languages in the world.<br/>
**title** — The piece of text that’s shown in the tab of your browser.<br/>
**body** — Not the body of the website, but the body of the HTML document. Everything rendered on the screen in a website goes in here.<br/>

## `What are Semantic Elements?`
A semantic element clearly describes its meaning to both the browser and the developer.<br/>
Non-semantic elements: `<div> and <span>` - Tells nothing about its content.<br/>
Semantic elements: `<form>, <table>, and <article>` - Clearly defines its content.<br/>
Semantically correct HTML helps search engines, screen readers, and other user devices determine the significance and context of web content.<br/>
Since October 2014, HTML4 got upgraded to HTML5, along with some new “semantic” elements.<br/>

## `Semantic Elements in HTML`
```
<article> Defines independent, self-contained content
<aside> Defines content aside from the page content
<details> Defines additional details that the user can view or hide
<figcaption> Defines a caption for a <figure> element
<figure> Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
<footer> Defines a footer for a document or section
<header> Specifies a header for a document or section
<main> Specifies the main content of a document
<mark> Defines marked/highlighted text
<nav> Defines navigation links
<section> Defines a section in a document
<summary> Defines a visible heading for a <details> element
<time> Defines a date/time

<!--Non Semantic HTML-->
<div id="footer">
 <p>this is a footer</p>
</div>
 
<!--Semantic HTML-->
<footer>
 <p>this is a footer</p>
</footer>
```

# HTML5 - Overview
**New Semantic Elements** These are like "header, footer, and section".<br/>
## `Forms 2.0`
Form must have the name, action & method attributes set.<br/>
**name=""** - A unique name identifying the form.<br/>
**action="url"** - The address (URL) of the script that will process the form data when submitted.<br/>
**method=""** - The method used by the action script, POST or GET. For example, post would be used to submit data to a user-registration form, and get is used for searches or forms that must return information.

### Form tags
**form** - Tag that wraps around all the form elements.<br/>
**fieldset** - Used to group elements together, like radio buttons. Must always have a legend.<br/>
**legend** - Adds a title to the fieldset. Must be inside a fieldset.<br/>
**button** - submit or reset.<br/>
**label** - Adds a name to any field.<br/>
**input** - Must always have an id to associate a label.<br/>
**textarea** - Adds a large, multi-line text field.<br/>
**select** - Creates a drop-down choice input.<br/>
**datalist** - Creates a list of items for autocompletion<br/>
**option** - Creates an entry inside select or datalist.<br/>
**optgroup** - Creates a group of options inside a select.<br/>
**output** - Represents the result of a calculation performed by JavaScript.<br/>

```
Simple form:
<form method="post" action="http://server1">
  Enter your name:
  <input type="text" name="fname">
  <br/>
  Enter your age:
  <input type="text" name="age">
  <br/>
  <input type="submit" value="Submit">
</form>
```
```
Radio button group:
<fieldset>
  <legend>Favourite dinosaur</legend>
  <input type="radio" id="trex" name="dinos">
  <label for="trex">T. rex</label>
  <input type="radio" id="tri" name="dinos">
  <label for="tri">Triceratops</label>
  <input type="radio" id="stego" name="dinos">
  <label for="stego">Stegosaurus</label>
</fieldset>
```
### Input Field
Used to create a simple text-entry field for your form.<br/>
**name="?"** - Unique name.<br/>
**type="?"** - **text, number, email, tel, url, password, time, date, datetime-local, week, month, color, range, file, search, checkbox, radion, hidden.**<br/>
**value="?"** - Initial value or data displayed in the input field when the form is first loaded.<br/>
**size="?"** - Defines the input size or width, typically defined in terms of number characters wide instead of pixels.<br/>
**maxlength="?"** - Maximum length of input field, such as the maximum number of characters for a text input.<br/>
**checked** - Used with checkbox and radio inputs, it sets the field default to be already checked.<br/>

### Input attributes
**require, checked, value, placeholder, autocomplete, autocapitalize, inputmode, list, maxlength, min, max, step, pattern, multiple, spellcheck, readonly, disable, autofocus**

### CSS selectors
**:focus, :optional, :require, :valid, :invalid, :checked, :disable, :enable, :in-range, :out-of-range, :indeterminate**

## `Persistent Local Storage`
To achieve without resorting to third-party plugins.<br/>
HTML5 introduces the **localStorage** attribute which would be used to access a page's local storage area without no time limit and this local storage will be available whenever you would use that page.

## `WebSocket`
A next-generation bidirectional communication technology for web applications.<br/>
Once you get a Web Socket connection with the web server, you can send data from browser to server by calling a send() method, and receive data from server to browser by an onmessage event handler.<br/>
```
let socket = new WebSocket(url, [protocal] );
```
## `WebSocket Attributes`
 (Socket.readyState, Socket.bufferedAmount)<br/>
**WebSocket Events**<br/>
  **open**	This event occurs when socket connection is established.<br/>
  **message**	This event occurs when client receives data from server.<br/>
  **error**	This event occurs when there is any error in communication.<br/>
  **close**	This event occurs when connection is closed.<br/>
**WebSocket Methods** (Socket.send(), Socket.close())<br/>

## `Server-Sent Events`
HTML5 introduces events, from web server to the web browsers and they are called Server-Sent Events (SSE).<br/>
For example, a simple click on a link requests a new page from the server. From web browser to the web server may be called client-sent events.

## `Canvas` 
This supports a two-dimensional drawing surface that you can program with JavaScript.<br/>
HTML5 element 'canvas' gives you an easy and powerful way to draw graphics using JavaScript. It can be used to draw graphs, make photo compositions or do simple (and not so simple) animations.

## `Audio & Video`
 You can embed audio or video on your webpages without resorting to third-party plugins.<br/>
## `Geolocation`
Now visitors can choose to share their physical location with your web application.<br/>
## `Microdata` 
This lets you create your own vocabularies beyond HTML5 and extend your web pages with custom semantics.<br/>
## `Drag and drop`
Drag and drop the items from one location to another location on the same webpage.<br/>

