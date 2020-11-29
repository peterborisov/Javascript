## `Preprocessing`
Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.<br/>

## `Variables`
```
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

## `Nesting`
```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

## `Partials`
You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files.<br/>
This is a great way to modularize your CSS and help keep things easier to maintain.<br/>
A partial is a Sass file named with a leading underscore.<br/>
You might name it something like _partial.scss.<br/>
The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file.<br/>
Sass partials are used with the @use rule.

## `Modules`
You don't have to write all your Sass in a single file. You can split it up however you want with the @use rule. This rule loads another Sass file as a module.
```
SCSS SYNTAX
// _base.scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
```
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```

## `Mixins`
A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.
```
SCSS SYNTAX
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}
.box { @include transform(rotate(30deg)); }
```

## `Extend/Inheritance`
Using @extend lets you share a set of CSS properties from one selector to another.
```
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}
```

## `Operators`
Sass has a handful of standard math operators like +, -, *, /, and %.
```
SCSS SYNTAX
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```
