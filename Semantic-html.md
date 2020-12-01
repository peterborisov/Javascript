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
**Forms 2.0** Improvements to HTML web forms where new attributes have been introduced for "input" tag.<br/>
HTML4
```
HTML4 input elements use the "type" attribute to specify the data type.<br/>
1 text - A free-form text field, nominally free of line breaks.<br/>
2 password - A free-form text field for sensitive information, nominally free of line breaks.<br/>
3 checkbox - A set of zero or more values from a predefined list.<br/>
4 radio - An enumerated value.<br/>
5 submit - A free form of button initiates form submission.<br/>
6 file - An arbitrary file with a MIME type and optionally a file name.<br/>
7 image - A coordinate, relative to a particular image's size, with the extra semantic that it must be the last value selected and initiates form submission.<br/>
8 hidden - An arbitrary string that is not normally displayed to the user.<br/>
9 select - An enumerated value, much like the radio type.<br/>
10 textarea - A free-form text field, nominally with no line break restrictions.<br/>
11 button - A free form of button which can initiates any event related to button.<br/>
 ```
 HTML5
 ```
1 datetime - A date and time (year, month, day, hour, minute, second, fractions of a second) encoded according to ISO 8601 with the time zone set to UTC.<br/>
2 datetime-local - A date and time (year, month, day, hour, minute, second, fractions of a second) encoded according to ISO 8601, with no time zone information.<br/>
3 date - A date (year, month, day) encoded according to ISO 8601.<br/>
4 month - A date consisting of a year and a month encoded according to ISO 8601.<br/>
5 week - A date consisting of a year and a week number encoded according to ISO 8601.<br/>
6 time - A time (hour, minute, seconds, fractional seconds) encoded according to ISO 8601.<br/>
7 number - It accepts only numerical value. The step attribute specifies the precision, defaulting to 1.<br/>
8 range - The range type is used for input fields that should contain a value from a range of numbers.<br/>
9 email - It accepts only email value. This type is used for input fields that should contain an e-mail address. If you try to submit a simple text, it forces to enter only email address in email@example.com format.<br/>
10 url - It accepts only URL value. This type is used for input fields that should contain a URL address. If you try to submit a simple text, it forces to enter only URL address either in http://www.example.com format or in http://example.com format.<br/>
 
 The '<output>' element,
 The placeholder attribute,
 The autofocus attribute,
 The required attribute,
 
 ```
 
**Persistent Local Storage** − To achieve without resorting to third-party plugins.<br/>
HTML5 introduces the **localStorage** attribute which would be used to access a page's local storage area without no time limit and this local storage will be available whenever you would use that page.

**WebSocket** − A next-generation bidirectional communication technology for web applications.<br/>
Once you get a Web Socket connection with the web server, you can send data from browser to server by calling a send() method, and receive data from server to browser by an onmessage event handler.<br/>
```
let socket = new WebSocket(url, [protocal] );
```
**WebSocket Attributes** (Socket.readyState, Socket.bufferedAmount)<br/>
**WebSocket Events**<br/>
  **open**	This event occurs when socket connection is established.<br/>
  **message**	This event occurs when client receives data from server.<br/>
  **error**	This event occurs when there is any error in communication.<br/>
  **close**	This event occurs when connection is closed.<br/>
**WebSocket Methods** (Socket.send(), Socket.close())<br/>

**Server-Sent Events** − HTML5 introduces events, from web server to the web browsers and they are called Server-Sent Events (SSE).<br/>
For example, a simple click on a link requests a new page from the server. From web browser to the web server may be called client-sent events.

**Canvas** − This supports a two-dimensional drawing surface that you can program with JavaScript.<br/>
HTML5 element '<canvas>' gives you an easy and powerful way to draw graphics using JavaScript. It can be used to draw graphs, make photo compositions or do simple (and not so simple) animations.

**Audio & Video** − You can embed audio or video on your webpages without resorting to third-party plugins.<br/>
**Geolocation** − Now visitors can choose to share their physical location with your web application.<br/>
**Microdata** − This lets you create your own vocabularies beyond HTML5 and extend your web pages with custom semantics.<br/>
**Drag and drop** − Drag and drop the items from one location to another location on the same webpage.<br/>
 
 
