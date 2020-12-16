
## Form 
Form must have the name, action & method attributes set.<br/>
**name=""** - A unique name identifying the form.<br/>
**action="url"** - The address (URL) of the script that will process the form data when submitted.<br/>
**method=""** - The method used by the action script, POST or GET. For example, post would be used to submit data to a user-registration form, and get is used for searches or forms that must return information.

## Form tags
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
## Input Field
Used to create a simple text-entry field for your form.<br/>
**name="?"** - Unique name.<br/>
**type="?"** - **text, number, email, tel, url, password, time, date, datetime-local, week, month, color, range, file, search, checkbox, radion, hidden.**<br/>
**value="?"** - Initial value or data displayed in the input field when the form is first loaded.<br/>
**size="?"** - Defines the input size or width, typically defined in terms of number characters wide instead of pixels.<br/>
**maxlength="?"** - Maximum length of input field, such as the maximum number of characters for a text input.<br/>
**checked** - Used with checkbox and radio inputs, it sets the field default to be already checked.<br/>

## Input attributes
**require, checked, value, placeholder, autocomplete, autocapitalize, inputmode, list, maxlength, min, max, step, pattern, multiple, spellcheck, readonly, disable, autofocus**

## CSS selectors
**:focus, :optional, :require, :valid, :invalid, :checked, :disable, :enable, :in-range, :out-of-range, :indeterminate**