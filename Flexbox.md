## [Background](#Background)
## [Basics & Terminology](#Basics-&-Terminology)
## [Properties for the Parent (flex container)](#Properties for the Parent (flex container))
## [Properties for the Children (flex items)](#Properties for the Children (flex items))

### `Background`
```
The Flexbox Layout (Flexible Box) module (a W3C Candidate Recommendation as of October 2017) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word “flex”).
The main idea behind the flex layout is to give the container the ability to alter its items’ width/height (and order) to best fill the available space.
Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.
```

### `Basics & Terminology`
**flex container** - parent element.<br/>
**flex items** - child elements.<br/>
**flex-flow directions** - the flex layout is based on it.<br/>
**main axis** – the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal, it depends on the flex-direction property.<br/>
**main-start | main-end** – The flex items are placed within the container starting from main-start and going to main-end.<br/>
**main size** – A flex item’s width or height.<br/>
**cross axis** – The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.<br/>
**cross-start | cross-end** – Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.<br/>
**cross size** – The width or height of a flex item, whichever is in the cross dimension.<br/>

### `Properties for the Parent (flex container)`
**display** - This defines a flex container, inline or block depending on the given value.<br/>
```
display: flex; /* or inline-flex */
```
**flex-direction** - This establishes the main-axis.<br/>
```
flex-direction: row | row-reverse | column | column-reverse
```
**flex-wrap** - By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.<br/>
```
flex-wrap: nowrap | wrap | wrap-reverse
```
**flex-flow** - This is a shorthand for the flex-direction and flex-wrap properties.<br/>
```
flex-flow: column wrap;
```
**justify-content** - This defines the alignment along the main axis.
```
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe
```
**align-items** - This defines the default behavior for how flex items are laid out along the cross axis.<br/>
```
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
```
**align-content** - This aligns a flex container’s lines within when there is extra space in the cross-axis.<br/>
```
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
```

### `Properties for the Children (flex items)`
**order** -  Controls the order in which they appear in the flex container.<br/>
```
 order: 5; /* default is 0 */
```
**flex-grow** - This defines the ability for a flex item to grow if necessary.<br/>
```
 flex-grow: 4; /* default 0 */
```
**flex-shrink** - 
```
flex-shrink: 3; /* default 1 */
```
**flex-basis** - This defines the default size of an element before the remaining space is distributed.<br/>
```
  flex-basis:  | auto; /* default auto */
```
**flex** - This is the shorthand for flex-grow, flex-shrink and flex-basis combined.<br/>
```
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```
**align-self** - This allows the default alignment.<br/>
```
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
```
