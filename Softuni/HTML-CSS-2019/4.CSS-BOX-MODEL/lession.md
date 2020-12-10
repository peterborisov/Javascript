## Box model
```
Every element in web design is a rectangular box
(top, right, bottom, left) => margin => border => padding => element content(with, height)
```

#### block elements
```
display: block;
Default width is 100%.
A block-level element always starts on a new line and takes up the full width available.(div)

```

#### inline elements
```
display: inline;
An inline element does not start on a new line and it only takes up as much width as necessary.(span)
Height and width properties, have no effect.
margins:
left - yes,
right - yes, 
top - no,
bottom - no
```

### inline block elements
```
display: inline-block; 
The element itself is formatted as an inline element, but you can apply height and width values
```

### box-sizing: border-box
The box-sizing property defines how the width and height of an element are calculated.
```
box-sizing: content-box|border-box|initial|inherit;
```