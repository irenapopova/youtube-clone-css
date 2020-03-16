CSS Flex Box

Flex Box consists of not one but two element types: The container & items.



The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
```css
/* Positional alignment */
justify-content: center;     /* Pack items around the center */
justify-content: start;      /* Pack items from the start */
justify-content: end;        /* Pack items from the end */
justify-content: flex-start; /* Pack flex items from the start */
justify-content: flex-end;   /* Pack flex items from the end */
justify-content: left;       /* Pack items from the left */
justify-content: right;      /* Pack items from the right */

/* Baseline alignment */
/* justify-content does not take baseline values */

/* Normal alignment */
justify-content: normal;

/* Distributed alignment */
justify-content: space-between; /* Distribute items evenly
                                   The first item is flush with the start,
                                   the last is flush with the end */
justify-content: space-around;  /* Distribute items evenly
                                   Items have a half-size space
                                   on either end */
justify-content: space-evenly;  /* Distribute items evenly
                                   Items have equal space around them */
justify-content: stretch;       /* Distribute items evenly
                                   Stretch 'auto'-sized items to fit
                                   the container */

/* Overflow alignment */
justify-content: safe center;
justify-content: unsafe center;

/* Global values */
justify-content: inherit;
justify-content: initial;
justify-content: unset;

```



### Things to keep in mind
The algorithm describing how flex items are laid out can be pretty tricky at times. Here are a few things to consider to avoid bad surprises when designing using flexible boxes.

Flexible boxes are laid out in conformance of the writing mode , which means that main start and main end are laid out according to the position of start and end .

cross start and cross end rely on the definition of the start or before position that depends on the value of direction.

Page breaks are possible in flexible boxes layout as long as break-property allows it. CSS3 break-after, break-before, and break-insideas well as CSS 2.1 page-break-before, page-break-after, and page-break-insideproperties are accepted on a flex container, flex items, and inside flex items.

An element with ‘display:flexbox’ or ‘display:inline-flexbox’ is a flexbox. Children of a flexbox are called flexbox items and are laid out using the flexbox box model.

Unlike block layout, which is normally biased towards laying things out vertically, and inline layout, which is normally biased toward laying things out horizontally, the flexbox layout algorithm is agnostic as to the direction the flexbox happens to be laid out in. 

The main axis of a flexbox is the axis on which flexbox items are laid out along. The flexbox items are ordered such that they start on the main-start side of the flexbox, and go toward the main-end side. A flexbox item's width or height, whichever is in the main axis, is the item's main size. The flexbox item's main size property is either the ‘width’ or ‘height’ property, whichever is in the main axis.

The axis perpendicular to the main axis is called the cross axis, and similarly has cross-start and cross-end directions and sides defined. The width or height of a flexbox item, whichever is in the cross axis, is the item's cross size, and similarly the cross size property is whichever of ‘width’ or ‘height’ that is in the cross axis.

The contents of a flexbox can be easily and powerfully manipulated with a handful of properties. Most significantly, flexbox items can "flex" their main size by using the ‘flex’ property. This "flexing" allows the items to get bigger or smaller based on the available space in the page. If there is leftover space in the flexbox after all of the flexbox items have finished flexing, the items can be aligned, centered, or distributed with the ‘flex-pack’ property. Flexbox items can also be completely rearranged within the flexbox with the ‘flex-order’ property.

In the cross axis, flexbox items can either "flex" to fill the available space or be aligned within the space with the ‘flex-align’ property. If a flexbox is multi-line, new lines are added in the cross-end direction, and can similarly be aligned, centered, or distributed within the flexbox with the ‘flex-line-pack’ property.

### Summary of Flexbox Properties
flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content
order
align-self
flex-grow
flex-shrink
flex-basis
flex

### Resaurces

https://developer.mozilla.org/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes

https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox

https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/

https://tympanus.net/codrops/css_reference/flexbox/