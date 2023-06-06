# Interview Based Assessment Answers
#### Full Stack JavaScript Course 2.0

## All Answers Google Docs File Link - *[Click Here](https://docs.google.com/document/d/1djhUj9UVj8xtwhbQb9hOYmCj0wJkbFOThtxunhub2Bo/edit?usp=sharing)*

## HTML Answers

**Q.1 `<!DOCTYPE html>` is it a tag of html? If not, what is it and why do we use it?**

<u>*Answer -*</u> `<!DOCTYPE html>` is a declaration not a tag of HTML. 
	The purpose of the declaration is to inform the web browser about the markup language and its version, so that they can correctly interpret and render the web page. By declaring `<!DOCTYPE html>` at the very beginning of our HTML document, we are indicating that the page is written in HTML5, which is the latest version of HTML.


**Q.2 Explain Semantic tags in html? And why do we need it?**

<u>*Answer -*</u> Semantics in HTML are special elements that provide meaning and structure to the content within a web page. Unlike other tags like `div`, `span` or `p` semantics tags describe the type of content they contain, making the html more descriptive and understandable. Semantic tags are designed to convey the meaning of the content rather than just its appearance. Some examples of semantic tags are - `nav`, `main`, `header`, `footer`, `article` etc. 
 	Having semantic tags in HTML has so many benefits - 
Improved Accessibility - Technologies like screen readers can use it to help users with disabilities to navigate and understand the content more effectively
Search Engine Optimization - By using semantic tags we can provide clear signals about the importance of different sections of our page and search engines will also get the important keyword which will potentially improve the page’s rankings.
Code Readability and Maintainability - Semantic tags makes the code more readable and maintainable.


**Q.3 Differentiate between HTML Tags and Elements?**

<u>*Answer -*</u> HTML tags are just opening and closing entities of HTML elements. An HTML tag consists of an opening tag, content and a closing tag. Content can be anything like text or other HTML elements or both. For example `<p>` and `</p>` are tags of HTML but `<p>This is paragraph</p>` is an HTML element and `<p>`This is `<span>Content</span></p>` this is also an HTML element which consists HTML tags like `<p>`, `<span>` etc. 


**Q.4 Build Your Resume using HTML only.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/HTML%20Q4.%20Build%20Resume%20Using%20HTML%20only


**Q.5 Write Html code so that it looks like the given image Link.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/HTML%20Q5


**Q.6 What are some of the advantages of HTML5 over its previous versions?**

<u>*Answer -*</u> HTML5 has several advantages over its previous versions - 
Improved Semantics - HTML5 introduced a set of semantic tags like - `<header>`, `<nav>`, `<article>`, `<section>` etc. that provide improved structure and meaning to the content. It also helps with accessibility, search engine optimization (SEO) and overall document structure.
HTML5 provides native support for multimedia elements like `<audio>` and `<video>`.
Improved Forms - HTML5 introduced new form input types (ex - email, date, number etc.) and attributes (ex - required, placeholder, pattern etc.) that simplify form validation and improves user experience. HTML5 enables developer to build fancier forms.
HTML5 introduced the new `<canvas>` element which enables dynamic rendering of graphics, animations without any plugins. HTML5 also introduced Scalable Vector Graphics or SVG as a native element.
HTML5 offers better support for mobile devices including making responsive designs easily with media queries. 
HTML5 introduced Geolocation API which enables websites to request user’s location information.


**Q.7 Create a simple Music player using html only**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/HTML%20Q7.%20Create%20A%20Music%20Player


**Q.8 What is the difference between `<figure>` tag and `<img>` tag?**

<u>*Answer -*</u> `<img>` element is used to embed the image in an HTML document whereas the `<figure>` element is used to semantically organise the content of image in an HTML document. The content within the `<figure>` tag is typically accompanied by a `<img>` element and a `<figcaption>` element within the `<figure>` element. In `<img>` element the src attribute is required which contains the source of the image. The `<img>` tag focuses solely on displaying the image and does not provide any additional semantic meaning or context and we use the `<figure>` tag when we need to add some information about the image like captions.


**Q.9 What’s the difference between html tag and attribute and give example of some
global attributes?**

<u>*Answer -*</u> HTML tags are just opening and closing entities of HTML elements. It defines the structure and the content of an HTML document whereas attributes are some values or properties that adjust the behaviour of the HTML element in various ways to meet the user’s requirement. Attributes are specified in the opening tag of an HTML element. Ex - `<button class=”login-button” type=”button”>Log In</button>`. Here `<button>` and `</button>` are HTML tags and class and type are attributes of this button element.

Global Attributes - Global attributes are common to all HTML elements, they can be used in any HTML element, though they may have no effect on some elements. Some examples of global attributes are - class, id, style, title etc.


**Q.10 build Table which looks like the given image Link.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/HTML%20Q10.%20Table


## CSS Answers

**Q.1 What is Box Model in CSS & Which CSS Properties are part of it?**

<u>*Answer -*</u> CSS Box Model is a set of rules that determines how the browser's rendering engine renders the HTML elements of our web page. The web browser renders every element as a rectangular box according to the CSS Box Model. CSS determines the size, position and other properties of these boxes.

Box Model has mainly four properties - Margin, Border, Padding and Content (Content has Width and Height)


**Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?**

<u>*Answer -*</u> We have so many types of selectors and the most commonly used are -
Universal Selector
Type Selector or Individual Selector
Class and Id selector
Attribute Selector
And or chained selector
Grouping selector
Combinators
Pseudo element and pseudo class selector
Advantages of Different Types of Selectors - Different selectors allow us to target HTML element or elements with more precision and control. Selectors like class selectors allow us to target multiple elements across the web pages enhancing the code reusability, whereas id selectors are mainly used to target individual element in the document. Selectors like attribute selectors and pseudo selectors enable us to style elements based on specific conditions or characteristics. By utilising appropriate selectors we can create precise consistent and flexible stylesheets.


**Q.3 What is VW/VH & How it is different from PX?**

<u>*Answer -*</u> VW(viewport width) and VH(viewport height) are CSS units of measurement that are relative to the size of the viewport. Whereas PX or pixels are an absolute unit of measurement that represent the smallest unit of display on a screen.
1 VW is equal to 1% of the viewport’s width. If the viewport’s width is 1000 pixels then 1 VW will be 10px. Same with VH also. VW or VH is mainly used when we want the element to automatically adapt with the viewport width or height. This is useful for making responsive layouts. Whereas PX unit is used when we want precise control over the element’s width or height which will not change automatically according to the size of the viewport.


**Q.4 What is the difference between Inline, Inline Block and block ?**

<u>*Answer -*</u> Inline, Inline-block and Block are values of display property in CSS, which specifies the display behavior of an element. 
Inline - Inline elements do not start on a new line and do not put a line break at the end of the content.These elements take as much space as necessary based on their content. If we try to set width and height explicitly, it will have no effect. Their top and bottom margin and padding does not have any effect on layout of other elements, however left and right margin and padding will push neighboring elements horizontally. Inline elements can not contain block level elements. Examples of some default inline elements are span, a, img, em, strong etc.
Inline-block - Inline-block elements are displayed like but behave like block level elements. Like inline they do not start on a new line and do not put line break at the end but we can set width and height of inline-block elements explicitly and all margin and padding can be applied to them. Inline-block elements can not contain block level elements
Block - Block level elements start on a new line and occupy full width available within their parent container. These elements start on a new line and also push other elements which are after the block element on a new line. Width, height, margin, padding, borders all can be set explicitly in block level elements. Block level elements can contain other block level elements and also inline and inline-block elements. Examples of some default block level elements are div, p, ul, li, section etc.


**Q.5 How is Border-box different from Content Box?**

<u>*Answer -*</u> Border-box and content-box are two values of the box-sizing property of CSS which determines how the width and height of an element is calculated.
Content-box - It is the default box-sizing behaviour, it calculates the size of the element excluding its padding and border. When we apply width and height of an element, it only applies to the content area inside the padding and border. So, the total size of the element is the width and height of the element added with the padding and border. For example if the element has 200px set width 10px padding and 2px width of border then total width of the element will be 224px (200px content width + 10px padding-left + 10px padding-right + 2px border-left + 2px border-right).
Border-box - The border-box box-sizing model calculates the width and the height of an element including its padding and border. So, when we specify the height and width of the element it includes the width and height of the content, padding and border. That means if we set 200px width of the element, 20px padding and 2px width of border then the width of the content is 176px (200px content width - 10px padding-left - 10px padding-right - 2px border-left - 2px border-right).
It is useful to set box-sizing to border-box for all the elements. It helps us deal with element sizes much easier.


**Q.6 What’s z-index and How does it Function?**

<u>*Answer -*</u> Z-index property controls the stacking order of positioned elements and determines how the elements are layered and displayed on top or behind one another on a web page. The character Z came from the three dimensional representation where x stands for width, y stands for height and z stands for depth.

	The z-index property accepts an integer value that specifies the stacking order of an element. Higher values result in elements appearing on top of other lower valued elements. By default z-index value is auto, we can give it any positive or negative integer value according to our need. Each positioned element with a z-index value other than auto creates a stacking context. A stacking context is a hierarchical structure that determines the order in which elements are stacked. Z-index only affects the elements with a positioned value other than static (like relative, absolute, fixed or sticky).


**Q.6 What’s Grid & Flex and difference between them?**

<u>*Answer -*</u> Grid and Flex or Flexbox both are CSS layout systems used for creating responsive and flexible designs.
Flex - Flexbox is a one-dimensional layout method that helps us in arranging items of a container in rows or columns, even when the size of the items are unknown. It gives the container the ability to alter the items' width, height and order to best fill the available space. A flex container expands its items to fill the available free space or shrinks items to prevent overflow. Flexbox is a great way to get more flexibility to our layouts and simplify the responsive layout design. To use flexbox layout we have to set the display property of the container to flex. It is a one dimensional layout system designed for creating flexible and dynamic layout along a single axis either horizontally or vertically. The main axis of the flex container along which the flex items are laid out. The direction of the main axis depends on the flex-direction property.
Grid - Grid is a two-dimensional layout system that allows us to create complex grid based layout systems with both rows and columns. One good example of grid layout is image gallery, which we can easily make with grid. Like flexbox grid layout also repositions its items according to the available space, which makes it very useful for making complex layouts, responsive design and overall page structures. To use grid layout we have to set the display property of the container to grid. We can set the column and row sizes with grid-template-columns and grid-template-rows property. 
Differences Between Grid and Flex - 
Flexbox is a one-dimensional layout system whereas grid is a two-dimensional layout system.
Flexbox is suited for arranging items along with a single axis like either row or column while grid allows arranging elements in both row and columns.
Flexbox provides control and distribution of items over a single axis while grid provides control over item placement in rows and columns, including spanning items across multiple cells.
Flexbox is useful for smaller-scale layouts within a container while grid is ideal for large-scale layouts such as entire page structure or complex grid-based designs.
Flex is relatively simpler to understand and implement whereas grid is a little bit more complex than flexbox.


**Q.7 Difference between absolute and relative and sticky and fixed position explain with example.**

<u>*Answer -*</u> Relative, absolute, fixed and sticky are the values of CSS position property, which defines how the element is positioned in the web page.By default the position property is set to static. We can set different values of position property other than static and then manipulate them by using the top, right, bottom and left property. In static positioning the top, right, bottom, left and z-index will not have any effect on the element.
Relative - It is just like static value where the element will be positioned according to the flow of the document, but now top, right, bottom, left and z-index will have effect on the element. These properties will work on the element based on its original position. These properties and the values will not affect the positions of other elements and the space given for the relative element in the page layout will be the same as if the position was static. For example let’s take the code - 
```css
	item {
		position: relative;
		top: 60px;
		left: 60px;
	}
  ```
	Here the given space for the item in the page will be the same as if it was for static but we will see the item moved to 60 pixels from top and 60 from left than its original position.
Absolute - Unlike the static and relative this time the element will be removed from the original document flow and there will be no space created for the document in the page layout.That means if the child element has an absolute value then the parent will behave as if the child is not there at all. The values of top, right, bottom and left will be calculated with respect to the entire document. Only if we make the parent container’s position relative then the absolute child’s top, right, bottom and left values will be calculated with respect to the parent container. For example - 
```css
item {
	position: absolute;
	top: 60px;
	left: 60px;
}
```
Here the item will be displayed in the top left corner of the entire document or page at 60px distance from top and 60px distanced from left. Now if we make the parent container position relative - 
```css
parent-container {
	position: relative;
}
```
Then the item will be displayed 60px distance from top and 60px distance left from the parent container.
Fixed - This is very similar to absolute, the item with fixed positioning will be removed from the normal document flow and there will be no space for the element in the page layout. We can position the element anywhere we want in the document by using top, right, bottom and left properties but this time the element will be unaffected by scrolling. That means the item will stay at the same position no matter how much we scroll the page. Let’s see an example -
```css 
item {
		position: fixed;
		bottom: 60px;
		right: 60px;
}
```
Here the item will be in the bottom right corner at a 60px distance from right and bottom. It will stay there no matter how much we scroll the page.
Sticky - It allows us to position the element relative to anything in the document and then when the user has scrolled past a certain point at the viewport, it fixes the position of the element to that location so it is displayed like an element with fixed value. Let’s take an example - 
```css
		item {
		position: sticky;
		top: 60px;
}
```
If we apply the above code for an item, the item will be relatively positioned until the scroll location of the page reaches at a point where its distance from the top of the viewport is 60px. From that point the item will remain fixed at a 60px distance from top of the screen.


**Q.8 Build Periodic Table as shown in the below image.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/CSS%20Q8.%20Periodic%20Table


**Q. 9 Build given layout using grid or flex see below image for reference.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/CSS%20Q9.%20Build%20The%20Layout


**Q.10 Build Responsive Layout both desktop and mobile and Tablet, see below image for reference?**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/CSS%20Q10.%20Build%20The%20Given%20Layout


**Q.11 Build Complete Homepage of Ineuron ( Link ) with responsiveness.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/CSS%20Q11.%20iNeuron%20Homepage%20Clone


**Q.12 What are Pseudo classes in CSS & How its different From Pseudo Elements?**

<u>*Answer -*</u> Pseudo classes and pseudo selectors both are CSS selectors that allow us to target specific elements based on certain conditions or states. While they have very similar purposes and use cases there are some differences also - 
Pseudo-classes - Pseudo-classes target elements based on a specific state or condition, such as user interaction or element hierarchy. They can also target elements based on their relationship with other elements. Pseudo-classes are represented by a colon (‘ : ’) followed by the pseudo-class name. Examples of pseudo-classes are - :hover, :active, :focus, :nth-child(), :first-child etc.
Pseudo-elements - Pseudo-elements target and style specific parts of an element or generate additional content. We can insert content before or after the element using pseudo-elements. They are represented by two colon (‘ :: ‘) followed by the pseudo-element name. Examples of pseudo-elements are - ::before, ::after, ::first-letter, ::first-line, ::selection etc.


## JavaScript Answers

**Q.1 What is Hoisting in Javascript ?**

<u>*Answer -*</u> Hoisting in JavaScript refers to the process where the interpreter appears to move declarations of functions, variables and classes to the top of their scope, prior to execution of the code. It allows us to use functions and variables before they are even declared. 
	Functions and variables are hoisted differently in JavaScript. If we declare a function using the function keyword and call the function before the function declaration it will give us the desired output because of hoisting. Example - 
```javascript
1.	printHello();
2.	function printHello() {
3.		console.log(“Hello”);
4.	}
```
Output: “Hello”

This function will print Hello without any error even though we are calling the function in the first line before we declare it in line no. 2. 
	For variables declared using var keyword if we try to access the value of the variable before declaring it, it will give us undefined. Example -
```javascript
1.	console.log(x);
2.	var x = 10;
```
Output: undefined 

Variables that are declared using let or const can not be accessed before initialization because of the temporal dead zone.


**Q.2 What are different higher order functions in JS? What is the difference between .map() and .forEach() ?**

<u>*Answer -*</u> In JavaScript Higher order functions are the functions which accepts a function as an argument or returns a function. Examples of higher order functions are .map(), .filter(), .forEach(), setTimeOut() etc.

	Difference Between .map() and .forEach() - Both .map() and .forEach() are available for arrays in JavaScript. Both are higher order functions and both takes a callback function as an argument. But they both serve different purposes - 

.forEach() - forEach() iterates over each element of the array and executes the provided function once for each array element in ascending-index order. Unlike map(), the forEach() function always returns undefined. forEach() does not mutate the array on which it is called but the callback function inside the forEach() method can mutate the original array. Example of forEach() - 
```javascript
1. 	const numbers = [1, 2, 3, 4];
2.
3.	numbers.forEach((num) => {
4.	console.log(num);
5.	});
```
		Output: 1
			    2
			    3
			    4
.map() - map() iterates over each element of the array and performs the operation given in the callback function of map() once for each array element and then it returns a new array populated with the results. The new array elements are transformed from the original array based on the logic given in the callback function. Example -
```javascript 
1. 	const numbers = [1, 2, 3, 4];
2.
3.	const doubledNumbers = numbers.map((num) => {
4.		return num * 2;
5.	});
6.
7.	console.log(doubledNumbers);
```
Output: [2,4,6,8]


**Q.3 What is the difference between .call() .apply() and .bind()? explain with an example.**

<u>*Answer -*</u> .call() .apply() and .bind() methods are used to manipulate the execution context of a function allowing us to explicitly set the value of `this` and pass arguments to the function.
.call() - The .call() method is used to invoke a function and explicitly set the value of this. It accepts arguments individually as comma separated values.
.apply() - The .apply() method is similar to .call(), but it accepts arguments as an array or array-like object. It is particularly useful when the number of arguments is not known in advance or when the arguments are already available in an array.
		Here is the example of .call() and .apply() with code- 
```javascript
		const person = {
  name: 'Sayantan',
  greet: function(message) {
    console.log(`${message}, ${this.name}!`);
  }
};

const otherPerson = {
  name: 'Deep'
};

person.greet.call(otherPerson, 'Hello');
// Output: Hello, Deep!

person.greet.apply(otherPerson, ['Hello', '!']);
// Output: Hello, Deep!
```
.bind() - The .bind() method is used to create a new function with a specific execution context (the value of this) and, optionally, preset arguments. It returns a new function that can be invoked later.

Here is the example of .bind() with code - 
```javascript
const person = {
  name: 'Sayantan',
  greet: function(message) {
    console.log(`${message}, ${this.name}!`);
  }
};

const boundGreet = person.greet.bind({ name: 'Alice' }, 'Hello');
boundGreet();
// Output: Hello, Alice!
```
In this example, .bind() creates a new function boundGreet with the execution context { name: 'Alice' } and the argument 'Hello' preset. When boundGreet() is invoked, it logs the desired output.


**Q.4 Explain Event bubbling and Event Capturing in JavaScript with suitable examples.**

<u>*Answer -*</u> Event bubbling and event capturing are two ways of event propagation in DOM. These two mechanisms are used to determine the order in which event handlers are triggered when an event occurs on an element that is nested within other elements. 
Event Bubbling - Event bubbling is the most common form of event propagation. It happens when an element receives an event and that event bubbles up or transmitted or propagates to its parent and ancestor elements in the DOM tree until it gets to the root element. When an event is triggered, the event handlers attached to the innermost element are executed first, followed by the handlers of its parent elements, and so on. Example -
```HTML 
<div id="outer">
  <div id="middle">
    <div id="inner">Click me!</div>
  </div>
</div>

<script>
  document.getElementById('inner').addEventListener('click', function() {
    console.log('Inner element clicked!');
  });

  document.getElementById('middle').addEventListener('click', function() {
    console.log('Middle element clicked!');
  });

  document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer element clicked!');
  });
</script>
```
Output:  Inner element clicked!
    Middle element clicked!
    Outer element clicked!
Event Capturing - Event capturing works in the opposite direction of event bubbling. It starts from the outermost ancestor element and captures the event as it propagates down through its child elements until it reaches the innermost element where the event occurred. Event capturing involves attaching event handlers to the outermost element to intercept the event before it reaches the target element. Example - 
```HTML
<div id="outer">
  <div id="middle">
    <div id="inner">Click me!</div>
  </div>
</div>

<script>
  document.getElementById('outer').addEventListener(
    'click',
    function() {
      console.log('Outer element clicked!');
    },
    true
  );

  document.getElementById('middle').addEventListener(
    'click',
    function() {
      console.log('Middle element clicked!');
    },
    true
  );

  document.getElementById('inner').addEventListener(
    'click',
    function() {
      console.log('Inner element clicked!');
    },
    true
  );
</script>
```
Output:   Outer element clicked!
      Middle element clicked!
      Inner element clicked!

By default, event handlers in JavaScript use event bubbling. However, you can explicitly enable event capturing by passing true as the third parameter in the addEventListener method.


**Q.5 What is function currying with example?**

<u>*Answer -*</u> Function currying in JavaScript is an advanced technique where a function with multiple arguments is transformed into a sequence of functions each taking a single argument. Currying helps us avoid passing the same variable multiple times and also helps to create higher order functions. We can create currying functions by using the .bind() method or using closures and recursion or we can also use arrow functions to create currying functions.
Here is one example of creating currying function using closures -
```javascript
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log(multiply(10)(2)(3));
// Output: 60
```
Function currying is useful in scenarios where you want to create specialised functions from a generic function by fixing some of its arguments. 


**Q.6 Explain execution context diagram of following code snippets, use white board to draw execution context diagram**

Code Snippet 1
console.log('First');
setTimeout(() => console.log('Second'), 0);
console.log('Third');

Code Snippet 2
console.log('First');
function secondCall() {
console.log('Second');
}
setTimeout(secondCall, 2000);
setTimeout(() => console.log('Third'), 0);
console.log('Third');

<u>*Answer -*</u> For the code snippet 1 execution context diagram will be like this - 

The execution starts from the global execution context and at first memory allocation happens and then the code execution. In memory allocation of code snippet 1 the callbacks of setTimeOut and the timeout time got stored.For console.log() there is no memory allocation they directly get executed. So, in code execution at first `console.log(“first”);` is executed first and prints “first” in the console. Then the `setTimeout(() => console.log('Second'), 0);` gets executed, although the delay is 0 but still the callback inside setTimeOut will get executed after a certain delay. By then the next line `console.log(“Third”)` gets executed which prints “Third” in console and then the callback inside the setTimeOut gets executed which prints “Second” in console. So the output we get is -
First
Third
Second

Code Snippet 2 - For the code snippet 2 the execution context diagram will be - 

The execution starts in the global execution context and memory is allocated for the function secondCall() and the two setTimeOut functions with their callbacks and timeouts. In code execution the “First” is printed in the console, then two setTimeOut functions get queued and execution moved to the last line and it prints “Third” in the console. Just after that the second setTimeOut function which had timeout 0 milliseconds gets executed and logs “Third” in the console and then finally after 2 seconds delay the other setTimeOut function gets executed which has 2 secs delay and it logs “Second” in the console. So we get the output - 
	First
Third
Third
Second


**Q.7 What are promises? What are the different states of a promise? Support your answer with an example where you need to create your own promise.**

<u>*Answer -*</u> Promises are a feature in JavaScript that provide a way to handle asynchronous operations. They represent the eventual completion or failure of an asynchronous operation and allow us to chain and handle the results using a more readable and organised syntax.

Promises have three different states:

1. Pending: The initial state of a promise. It represents that the asynchronous operation is still ongoing, and the promise is neither fulfilled nor rejected.

2. Fulfilled: The state of a promise when the asynchronous operation is successfully completed. It means that the promise has been resolved with a value.

3. Rejected: The state of a promise when the asynchronous operation encounters an error or fails. It means that the promise has been rejected with a reason or an error object.

Here's an example where we create our own promise to simulate an asynchronous operation:
```javascript
function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve(randomNumber);
      } else {
        reject(new Error('Operation failed'));
      }
    }, 2000);
  });
}

// Usage
simulateAsyncOperation()
  .then(result => {
    console.log('Promise fulfilled:', result);
  })
  .catch(error => {
    console.error('Promise rejected:', error);
  });
```
In this example, the `simulateAsyncOperation()` function returns a new promise. Inside the promise constructor, we simulate an asynchronous operation using `setTimeout()`. If a random number generated is less than 0.5, the promise is resolved with the generated number. Otherwise, the promise is rejected with an `Error` object.

When using the promise, we chain the `.then()` method to handle the fulfilled state. If the promise is fulfilled, the provided callback function is executed, and the result is logged to the console. We also chain the `.catch()` method to handle the rejected state. If the promise is rejected, the provided callback function is executed, and the error is logged to the console.


**Q.8 What is ‘this’ keyword in JavaScript? explain with an example & create.**

<u>*Answer -*</u> In JavaScript, the `this` keyword refers to the object that is currently executing or being referenced in a particular context. It allows you to access and manipulate properties and methods of the object within that context.
	The value of this is dependent on how it is called and it can vary depending on the current context. 

Example of this in Global Scope - 
`console.log(this);  
 // 'this' refers to the global object (e.g., 'window' in browser, 'global' in Node.js, so in Node.js environment it prints an empty object - { } )`

Example of this in object method - 
```javascript
const person = {
  name: ‘Sayantan’,
  greet: function() {
    console.log(this.name);	 // 'this' refers to the 'person' object
  }
};

person.greet(); // Output: ‘Sayantan’

Example of this in event handler - 
const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log(this); // 'this' refers to the element that triggered the event (the button)
});
```

**Q.9 Explain event loop Call Stack Callback queue and Micro Task queue in Your Words.**

<u>*Answer -*</u>
Call Stack - The call stack is like a stack of function calls in JavaScript. Whenever a JavaScript program starts to run a new Global Execution context is created inside the call stack and whenever a function is called in the program the execution context for the program is added on top of the stack. That means in the top of the stack there is always that function which is currently running and after execution of that function the execution context for that function is removed. And at last after execution of the whole JavaScript program is completed then the Global Execution Context gets removed from the call stack.
Event Loop - The event loop is a mechanism in JavaScript that keeps the program running smoothly, even when there are asynchronous tasks. It constantly checks if the call stack is empty and if there are any tasks waiting to be executed in the callback queue or microtask queue.
Callback Queue - Callback Queue is where the callback function gets pushed to, and waits for the execution. Let’s see an example to understand the callback queue -
```javascript 
setTimeout(abc, 5000);

function abc(){
    console.log("Hello");
}
```
Here, we have a callback function abc(), that is to be executed after 5 seconds of time. After 5 seconds, the callback function abc() does not get directly pushed into the call stack for execution instead it will be pushed into the callback queue. The call stack may be busy with the execution of some other functions. The callback queue keeps all callback functions in a queue that are ready for execution and waits until the call stack gets free. When the call stack is free, the event loop pops the callback function from the callback queue and pushes it to the call stack. 
Microtask Queue - Microtask Queue is similar to the Callback Queue(macrotask queue), but microtask queue has a higher priority than the callback queue. All the callback functions coming through promises and mutation observer will go inside the microtask queue. 
For example, in the case of fetch(), it returns a promise and this callback function will get pushed into the microtask queue. Promise handling always has a higher priority than setTimeout or setInterval. So the event loop gives higher priority to the microtask queue and then looks into the callback queue.

**Q.10 Explain Debouncing and Create a project where you are using Debouncing.**

<u>*Answer -*</u> Debouncing is a technique used to control the frequency of a particular event, typically triggered by user input, such as key presses or scroll events. It ensures that a function is executed only after a specified period of inactivity, reducing the number of times the function is invoked.
	It is particularly useful when we are implementing search functionality where users will get recommendations while typing. If we don’t control the frequency of function calling in that case it can be a massive performance issue for the app.

Example Project Link - https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/JS%20Q10.%20Debouncing


**Q.11 Explain Closures and Use cases of Closures.**

<u>*Answer -*</u> In JavaScript a closure gives you access to an outer function's scope from an inner function. A closure is created when an inner function references variables from its outer function. The inner function maintains a reference to the variables it needs, even if the outer function has returned. This enables the inner function to access and manipulate those variables whenever it is invoked.
Here is an code example - 
```javascript
function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); 
```
Output: I am from the outer function

Use Cases of Closures - Closures are a powerful and flexible feature in JavaScript, offering benefits such as data privacy, code organisation, and preserving state in asynchronous operations. By using closures, we can define variables within a function scope that cannot be accessed or modified from outside the function. This helps in creating modules and maintaining data privacy. Closures can be utilised for memoization, which is a technique to cache the results of expensive function calls. By storing the results of function calls in closures, subsequent calls with the same inputs can retrieve the cached result instead of recomputing it, leading to improved performance.


**Q.12 Create a Blog web app using JavaScript**
- Fetch data from https://jsonplaceholder.typicode.com/posts and show it to ui
- User can also add new blog
- Add Delete functionality also*

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/JS%20Q12.%20Blog%20App


## React Answers

**Q.1 What’s React and What are the advantages of it?**

<u>*Answer -*</u> React is a JavaScript library for building user interfaces. It allows us to build user interfaces out of individual pieces called components. It was developed by facebook and widely used in front-end web development.
Advantages of React -
Component Based Architecture - React encourages the development of modular and reusable components. This modular approach improves code reusability, maintainability and testability.
Virtual Dom - React uses a virtual DOM, a lightweight copy of actual DOM to visualise and render components which minimises the number of actual DOM manipulations resulting in improved performance and smooth user experience.
JSX - React utilises JSX(JavaScript XML), which provides syntactic sugar that allows us to write HTML code inside our JavaScript. That simplifies the development a lot and allows us to write more readable code which is also easier to debug.
One-Way Data Flow - React enforces a one-way data flow, where data flows from parent components to child components. This unidirectional flow makes it easier to understand and track data changes, improving code predictability and debugging.
SEO Friendly - React can be used for server-side rendering (SSR) or static site generation (SSG), which allows search engines to crawl and index the content easily. This helps in improving search engine optimization (SEO) for React-based applications.
Rich Ecosystem - React has a large and vibrant ecosystem with a vast number of libraries, tools, and community support. This ecosystem provides a wide range of options for routing, state management, form handling, testing, and more.


**Q.2 What's Virtual Dom in React & What are the advantages of it?**

<u>*Answer -*</u> The Virtual DOM is a lightweight, in-memory representation of the actual DOM. It serves as an intermediary layer between the React components and the browser's DOM, enabling efficient updates and rendering of UI components.
Advantages of Virtual DOM - The Virtual DOM allows React to optimize the updating and rendering process. Instead of directly manipulating the actual DOM for every change, React performs updates on the lightweight Virtual DOM representation. It then calculates the minimal set of changes required to update the actual DOM, reducing the number of expensive and potentially slow DOM operations. This results in improved performance and a more responsive user interface.The Virtual DOM provides a level of abstraction over the browser's native DOM APIs. React handles the differences in DOM implementations across various browsers, allowing developers to write code that works consistently across different environments. This abstraction simplifies cross-browser compatibility concerns and reduces the need for browser-specific code.React's Virtual DOM is crucial for server-side rendering (SSR) capabilities. React can render components to HTML on the server using the Virtual DOM, enabling faster initial page loads and improved search engine optimization (SEO). With SSR, search engines can crawl and index the rendered content, enhancing discoverability and improving the overall user experience.
	Overall, React's Virtual DOM provides significant advantages in terms of performance optimization, efficient diffing, cross-browser compatibility, declarative programming, component reusability, server-side rendering, and ease of debugging and testing.


**Q.3 Explain LifeCycle of React Components?**

<u>*Answer -*</u> In React, components have a lifecycle that consists of different stages or phases from initialization to unmounting. Each lifecycle phase provides hooks or methods that allow developers to perform specific actions or implement logic at various points in the component's lifecycle. Here is an overview of the lifecycle phases of React components -
Mounting - 
constructor() - This is the initial phase where the component is constructed and initialised. It is called before the component is rendered.
getDerivedStateFromProps(props, state) - getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing. This method exists for rare use cases where the state depends on changes in props over time.
render() -  This phase renders the component and its child components to the Virtual DOM. It returns the JSX or React elements that define the component's UI.
componentDidMount() - This method is called immediately after the component is mounted to the actual DOM. It is used for side effects like API calls or setting up event listeners. It is a good place to initialise the component's state.
Updating - 
componentDidUpdate(prevProps, prevState) - This method is called after the component updates and re-renders due to changes in props or state. It allows you to perform additional logic or side effects after the update.
shouldComponentUpdate(nextProps, nextState) - This method is used to optimise performance by determining if the component should re-render. It receives the next props and state as arguments and returns a boolean value indicating whether the component should update or not.
render() - This phase re-renders the component with updated props or state.
getSnapShotBeforeUpdate(prevProps, PrevState) - This method is called right before the component's updates are applied to the DOM. It allows you to capture some information from the DOM before it changes (e.g., scroll position) and pass it to componentDidUpdate().
Unmounting - 
componentWillUnmount() - This method is called just before the component is unmounted and removed from the DOM. It allows you to perform cleanup tasks like cancelling timers, removing event listeners, or clearing subscriptions.
Error Handling - These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component - static getDerivedStateFromError(), componentDidCatch().


**Q.4 What's the difference between between Functional Components and Class
Components?**

<u>*Answer -*</u> Functional components are simpler and easier to understand as they are just JavaScript functions that take props as input and return JSX. They promote the use of React Hooks for managing state and other React features.
	Class components, on the other hand, are defined as JavaScript classes that extend the React.Component class. They are suitable for managing complex state and performing actions at different stages of the component's lifecycle. However, with the introduction of React Hooks, functional components have become the preferred approach for most use cases due to their simplicity and better performance.


**Q.5 What are the hooks in React & Can we use Hooks in Class Components?**

<u>*Answer -*</u> In React, hooks are functions that allow functional components to have state and access other React features without writing a class. Hooks were introduced in React 16.8 as a way to simplify state management and component logic. Some commonly used hooks in React are - useState(), useEffect(), useRef(), useMemo(), useContext(), useReducer() etc. We can also create our custom hooks and use them. 
	Hooks are specifically designed for functional components and cannot be used directly in class components. However, in React 16.8 and later versions, we can still use functional components alongside class components in the same application.


**Q.6 What are the LifeCycle methods and the advantages of it?**

<u>*Answer -*</u> Lifecycle methods in React are special methods available in class components that are called at different stages of a component's lifecycle. They allow you to perform actions and implement logic during component initialization, rendering, updating, and unmounting.
Advantages of LifeClycle Methods - 
Control - Lifecycle methods provide control over component behaviour at specific stages, allowing you to execute custom logic as needed.
Side Effects - Lifecycle methods such as componentDidMount() enable performing side effects like data fetching or integrating with external libraries.
Performance optimization - Lifecycle methods such as componentDidMount() enable performing side effects like data fetching or integrating with external libraries.
Clean-up - Lifecycle methods such as componentWillUnmount() provide an opportunity for resource cleanup, such as removing event listeners or cancelling subscriptions, preventing memory leaks.
Overall, lifecycle methods enhance the functionality and behaviour of React components throughout their lifecycle.


**Q.7 What’s useState Hook & Advantages of it?**

<u>*Answer -*</u> React useState hook allows us to have state variables in our functional component. It takes an initial state value as an argument and returns an array containing the current state value and a function to update the state. We can update the state by calling the function provided by useState.

Advantages - 
The useState hook simplifies the process of managing state in functional components, reducing the need for complex class components and their corresponding lifeCycle methods.
The state related logic is encapsulated within a component. It improves code organisation, readability and modularity.


**Q.8 Explain useEffect & Advantages of it.**

<u>*Answer -*</u> React useEffect is a built in react hook that allows us to perform side effects in functional components. It basically allows us to synchronise a component with an external system. For example if we want to control a non react based component based on react state, set up server connection or data fetching then we need this hook. It allows us to run some code after rendering so that we can synchronise our component with some system outside of react.

Advantages - 
useEffect provides a simplified way to manage side effects, reducing the complexity of handling asynchronous operations and other external interactions.
By specifying the dependencies the effect can be executed only when necessary, optimising performance and avoiding unnecessary re-renders.
We can write all our side effect related code in a single hook using useEffect. That improves code organisation and maintainability. 
The clean up function returned by useEffect ensures proper clean up resources such as event listeners or subscriptions, preventing memory leaks.
useEffect replaces various lifeCycle methods in class components and simplifies the code and reduces duplication.


**Q.9 Explain Context Api and create a minor project on it (5 Marks)**
- Create dashboard and with button on clicking on that change theme to dark and light

<u>*Answer -*</u> React Context Api is a feature in react that lets a component receive information from distant parents without passing it as props. For example our app’s top level component can pass the current  Ui Theme to all components below no matter how deep it is. It provides a way to create a global state or shared data that can be accessed by any component in the application. The Context Api consists of two main parts - the Context Provider and the Context Consumer. The provider component is responsible for creating and managing the shared state data while the consumer components access or consume the data. To create a context we have to use the createContext() hook provided by react and to use the context we have to use the useContext() hook. We have to pass our desired data or state as value prop in the provider component. This value will be available for all the components that consume the context.

Theme Switch app link - https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/React%20Q9.%20Context%20Api


**Q.10 Explain useReducer and Its advantages.**

<u>*Answer -*</u> React useReducer hook lets us add a reducer to our component. As our components grow in complexity, it can get harder to see at a glance all the different ways in which the component’s state gets updated. For these cases we can move all our state update logic outside the component in a single function. This function is called reducer. useReducer is an alternative to useState hook for complex state logic or updates.

Advantages - 
useRecucer simplifies the complex state management by centralising the state logic within a reducer function.
It improves code readability and maintainability.
useReducer is suitable for managing complex state updates that involve multiple values or require calculations based on current state.
useRecucer can be very easily used with Context Api and other custom hooks.


**Q.11 build a Todo Web App Using React and useReducer Hook.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/React%20Q11.%20Todo%20App%20Using%20useReducer


**Q.12 Build A simple counter app using React.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/React%20Q12.%20%20Counter%20App


**Q.13 Build Calculator Using React Only.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/React%20Q12.%20Simple%20Calculator


**Q.14 Build a Tic Tac Toe Game using Class Component of React.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/React%20Q14.%20Tic%20Tac%20Toe%20Using%20Class%20Components


**Q.15 Explain Prop Drilling & How can we avoid it?**

<u>*Answer -*</u> Prop drilling refers to the process of passing props through multiple levels of components, even when some intermediate components do not use or modify these props. It can occur in component hierarchies where data or state needs to be passed down from a top level component to deeply nested child components. The main drawback of prop drilling is that it can make code more complex, reduce code readability and maintainability and lead to code duplication. Additionally it becomes hard to update or add new props when they need to be passed through multiple intermediate components.

How to Avoid Prop Drilling - 
Use Context Api - The Context Api in react allows us to create a shared data or data can be accessed by any component without explicitly passing it through props. 
State Management Libraries - State management libraries like Redux or Zustand provide centralised stores or state containers that can be accessed by any component in the application. These libraries eliminate the need for prop drilling by managing state globally and allowing components to directly access the required data from the store.
Instead of passing props through intermediate components we can break down our components into smaller, more focused components and compose them together to form the desired component hierarchy. This way we can directly pass props from parent to child components who need them avoiding unnecessary prop drilling.


**Q.16 Create a task manager where user can create tasks and see his task.**
- Redirect him to task dashboard section after login
- Use https://reqres.in/ api to authenticate user and redirect him to task manager
dashboard where he can see his task and create

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/React%20Q16.%20Task%20Manager


## Express Answers


**Q.1 Create a simple server using Express and connect with backend and create an endpoint “/post” which sends 20 posts.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/Express%20Q1.%20Backend%20API


**Q.2 Explain a middleware and create a middleware that checks if user is authenticated or not then sends data of post.**

<u>*Answer -*</u> 
	Middleware - Middlewares are functions that sit between the server receiving the request and the server sending the response. It intercepts the incoming request and performs some specific actions and can modify the request or the response objects. Middleware provides a way to add functionality, process data and enforce rules before or after the main handler function for a particular route. In ExpressJS, a middleware function typically takes three arguments - req, res and next. Here req is the request object, res is the response object and next is a function to invoke the next middleware in the chain or the final route handler. Middlewares are mainly used to do tasks such as authentication, authorization, data parsing, error handling etc.

Middleware App GitHub Link - https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/Express%20Q2.%20Middleware


**Q.3 Create a backend for blog app, where user can perform crud operations -**
- Add blog
- Delete blog
- Update blog
- Replace blog

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/Express%20Q3.%20Blog%20App%20Backend


**Q.4 What is the difference between authentication and authorization?**

<u>*Answer -*</u> 
Authentication - Authentication is the process of verifying the identity of a user or entity. It ensures that the user is who they claim to be. The primary goal of authentication is to establish trust and grant access to authenticated users only. It typically involves validating credentials, such as usernames and passwords, provided by the user. Authentication answers the question, "Who are you?".
Authorization - Authorization, on the other hand, is the process of granting or denying access to specific resources or functionalities based on the authenticated user's privileges or permissions. It determines what actions or operations a user is allowed to perform once their identity is verified. Authorization answers the question, "What are you allowed to do?".


**Q.5 What is the difference between common JS and EJS module?**

<u>*Answer -*</u> 
CommonJS - CommonJS is a module system for JavaScript that is primarily used in server-side environments, such as Node.js. It provides a way to organise and structure JavaScript code by splitting it into separate modules that can be imported and exported. In CommonJS, modules are defined using the module.exports or exports object to specify what parts of the module should be made available for use in other modules. These exported values can then be imported using the require() function. CommonJS modules are loaded synchronously at runtime, meaning that the dependencies are loaded and executed immediately. This can be convenient for server-side development, where file I/O operations are more common.
EJS Module - EJS or ESM (ES Modules) is the standardised module system in JavaScript that is supported by modern browsers and newer versions of Node.js. It provides a way to organise and structure JavaScript code into separate modules for better code maintainability and reusability. ESM modules use the import and export statements to define and import/export values between modules. This module system offers several advantages over CommonJS, including static analysis, improved performance, and better compatibility with modern JavaScript features. ESM modules are loaded asynchronously, allowing for more efficient loading and parallelism. They also support static analysis, enabling tools and bundlers to analyse dependencies and perform optimizations like tree-shaking and dead code elimination. ESM modules are supported by modern browsers and can be used without the need for bundlers or transpilers. However, in Node.js, ESM modules require the use of the --experimental-modules flag or specifying "type": "module" in the package.json file.


**Q.6 What is JWT and what we can achieve with that create a minor project with jwt** 
- Login and sign up
- Add authentication using jwt

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/Express%20Q6.%20JWT%20Authentication


**Q.7 What should we do with the password of a user before storing it into DB?**

<u>*Answer -*</u> Before storing passwords into DB, we should hash them using a strong cryptographic hashing algorithm. Hashing converts the password into a fixed-length string of characters that cannot be reversed to obtain the original password. To further enhance security, we can use a random and unique salt value for each user's password. A salt is a randomly generated string that is appended to the password before hashing. Salting prevents attackers from using precomputed tables (rainbow tables) to quickly reverse the hashed passwords. We can use libraries like bcrypt or crypto to do this.


**Q.8 What is event loop in NodeJS?**

<u>*Answer -*</u> The event loop in Node.js is a fundamental part of its runtime environment. It is responsible for managing and processing events in a non-blocking, asynchronous manner. The event loop continuously checks for pending events and executes their associated callback functions when those events occur. This allows Node.js to handle multiple I/O operations concurrently without blocking the execution of other code. The event loop plays a crucial role in enabling the scalability and efficiency of Node.js applications, particularly in scenarios involving high concurrency and I/O-intensive tasks.


**Q.9 Create a Full Stack Ecommerce website with all major functionalities.**

<u>*Answer -*</u> https://github.com/Sayantan-23/Placement-Assignment_Sayantan-Ghosh/tree/master/Assignment%20Projects/Express%20Q9.%20Full%20Stack%20Ecommerce%20App

