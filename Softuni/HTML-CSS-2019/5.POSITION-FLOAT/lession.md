## Position
Default position is 'static'

#### Static
Elements are not affected by left/right/top/bottom/z-index properties.

#### Relative
left/right/top/bottom/z-index will work. The positional properties “nudge” the element from the original position in that direction.

#### Absolute
The element is removed from the flow of the document and other elements will behave as if it’s not even there, while all the other positional properties will work on it.<br/>

#### Fixed
Position an element anywhere relative to the document, however this value is unaffected by scrolling. 

#### Sticky
Allows you to position an element relative to anything on the document and then, once a user has scrolled past a certain point in the viewport, fix the position of the element to that location so it remains persistently displayed like an element with a fixed value.
