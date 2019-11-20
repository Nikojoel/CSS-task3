# Finding and Styling Elements in the DOM
## Manipulating CSS with JAVASCRIPT
<br>
GREAT, now you know sooooo much more about CSS! But how will this all help me with ES6? 

Often, with JavaScript, you want to manipulate HTML elements. To do so, you have to **find the elements first**. But how do you find the correct element?  

### The root node

When an HTML document is loaded into a web browser, it becomes a document object. The document object is the root node of the HTML document. All operations on the DOM start with the document object. From it we can access any node.

<br>
<img src="https://javascript.info/article/dom-navigation/dom-links@2x.png" alt="https://javascript.info/dom-navigation" width="50%">
<br>

In the case of the DOM, `<html>`= *document.documentElement* and serves as the root node. 

There are several properties and methods that can be used on HTML documents, only some are used to find HTML elements:

https://www.w3schools.com/jsref/dom_obj_document.asp<br>
https://javascript.info/dom-navigation

<br>

## JavaScript HTML DOM Elements - Finding the element


Using the properties/methods in the example above, there are many ways to find the appropriate elements in the document tree. Here are some common ones:
<br>

**1. Finding HTML elements by id**

https://www.w3schools.com/jsref/met_document_getelementbyid.asp

```html
<div id="demo">Found it</div>
<div>Nope</div>
```

```javascript
document.getElementById("demo");
```
The getElementById() method returns the element that has the ID attribute with the specified value. **NOTE: only one!**
<br><br>

**2. Finding HTML elements by tag name**

https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp

```html
<ul>
<li>Found one</li>
<li>Found another</li>
</ul>
```
```javascript
document.getElementsByTagName("li");
```
The getElementsByTagName() method returns an **HTMLCollection of elements** with the given tag name. This method returns a NodeList in some WebKit browsers.
<br><br>

**3. Finding HTML elements by class name**

https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

```html
<div class="demo">Found it</div>
<div class="demo">Found another</div>
<div class="something">Nope, not me</div>
```

```javascript
document.getElementsByClassName("demo");
```
The getElementsByClassName() method **returns an HTMLCollection** of all child elements which have all of the given class names.
<br><br>

**4. Finding HTML elements by CSS selectors a.k.a. Query selectors!!!**

https://www.w3schools.com/jsref/met_document_queryselector.asp<br>
https://www.w3schools.com/jsref/met_document_queryselectorall.asp

These are my favourite ones! Such an effective way to find DOM elements.<br>
**The querySelector()** and the **querySelectorAll()** methods

```html
<div class="demo">QuerySelector picks only me...</div>
<div class="demo">QuerySelectorAll picks both of us!!!</div>
<div class="something">Nope, not me</div>
```

```javascript
const x = document.querySelector(".demo");
const y = document.querySelectorAll(".demo");
```
<br>

The **querySelector()** method returns the **first elemen**t that matches a specified CSS selector(s) in the document.

The **querySelectorAll()** method returns **all elements** in the document that matches a specified CSS selector(s), as a static **NodeList object**.

THE BEAUTY HERE IS THAT YOU CAN USE ANY OF THE CSS SELECTORS to pick the desired element

Example:
```javascript
const matches = document.querySelectorAll("div.note, div.alert");

const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");

const container = document.querySelector("#userlist");
const matches = container.querySelectorAll("li[data-active='1']");
````

Reference: https://www.w3schools.com/js/js_htmldom_elements.asp
<br><br>

---------------------------------------------

## JavaScript HTML DOM - Changing the CSS/Style
<br>
When you have found the correct element(s), you can manipulate an element’s style directly through its style property. 

Since the methods **document.getElementById()** and **querySelector()** return only the first element matched, styling these are easier than with the other methods.

https://www.w3schools.com/js/js_htmldom_css.asp

```javascript
document.getElementById("pickme").style.color = "blue";
document.querySelector("#pickme").style.color = "blue";
```

Styling with JavaScript is a bit different than with CSS. CSS uses hyphens and lowercase letters. In Javascript, these hyphens get removed and the words camel cased.

CSS: 
```css
#pickme { font-size: 30px; }
```
Javascript: 
```javascript
document.getElementById("pickme").style.fontSize = "30px";
```
<br>
Go through - Style Object Properties: https://www.w3schools.com/jsref/dom_obj_style.asp

<br><br>

## DOM Collections and DOM Node Lists
### HTML COLLECTION
<br>

Both the **getElementsByTagName()** and **getElementsByClassName()** methods return an **HTMLCollection object**.

https://www.w3schools.com/js/js_htmldom_collections.asp<br>
https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

You can use a **for loop** to access/modify the individual elements, such as the style of them:

```javascript
const y = document.getElementsByTagName("p");

for (let i = 0; i < y.length; i++) {
	y[i].style.backgroundColor = "red";
}
```
Or a single one:

```javascript
const y = document.getElementsByTagName("p");
y[2].style.backgroundColor = "red";

```

* An HTMLCollection object is an array-like list (collection) of HTML elements.
* An HTMLCollection is NOT an array!
* An HTMLCollection may look like an array, but it is not.
* You can loop through the list and refer to the elements with a number (just like an array).
* However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.
<br>

### NODE LIST

<br>

**The querySelectorAll method**, which is defined both on the document object and on element nodes, takes a selector string and returns a NodeList containing all the elements that it matches. 

Although NodeList is not an Array, it is possible (HTMLCollections do not support this) to iterate over it with the **forEach()** method. It can also be converted to a real Array using Array.from().

Once the NodeList of matching elements is returned, you can examine it just like any array. If the array is empty (that is, its length property is 0), then no matches were found.

```javascript
const highlightedItems = document.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

* A NodeList object is almost the same as an HTMLCollection object.
* A node list is not an array!
* A node list may look like an array, but it is not!
* You can loop through the node list and refer to its nodes like an array.
* However, you cannot use Array Methods, like valueOf(), push(), pop(), or join() on a node list.
<br>

----------------------------------------------------------------------

**SIMILARITIES**

* A NodeList and an HTML collection is very much the same thing.
* Both an HTMLCollection object and a NodeList object is an array-like list (collection) of objects.
* Both have a length property defining the number of items in the list (collection).
* Both provide an index (0, 1, 2, 3, 4, ...) to access each item like an array.

**DIFFERENCES**

* An HTMLCollection (previous chapter) is a collection of HTML elements.
* HTMLCollection items can be accessed by their name, id, or index number.
* A HTMLCollection list is live, which means it updates itself with the DOM tree automatically.
* A NodeList is a collection of document nodes.
* NodeList items can only be accessed by their index number.
* Only the NodeList object can contain attribute nodes and text nodes.
* A NodeList is (not always) typically a static list.

https://www.w3schools.com/js/js_htmldom_nodelist.asp<br>
https://developer.mozilla.org/en-US/docs/Web/API/NodeList
<br>

--------------------------

## ASSIGNMENT 

Create a simple html page with the following list:

```html
    <ul class="fruits">
        <li>Apple</li>
        <li>Banana</li>
        <li data-foodtype="squishy">Orange</li>
        <li>Pear</li>
        <li>Kiwi</li>
        <li id="berry">Strawberry</li>
    </ul>
````

Write the answers into the browser console, using console.log().

Some help:<br>
https://www.w3schools.com/jsref/prop_html_innerhtml.asp<br>
https://www.w3schools.com/cssref/sel_attribute_value.asp
<br>

1. Use **getElementById()** to find the `<li>` element that contains the word "Strawberry". Print out both the **html element** and the **innerHTML**. Change the background color of the list element to red.

```
-> <li id="berry">Strawberry</li>
-> I found the berry: Strawberry
```
<br>

2. Now find the `<li>` element that contains the word Orange. Use the **QuerySelector()** method with a **CSS [attribute=value] Selector**. Change the background color of the list element to orange.

```
-> <li data-foodtype="squishy">Orange</li>
-> I found the fruit: Orange
```
<br>

3. 1 - Use **getElementsByTagName()** to return a collection of all the `<li>`elements in the document. Use console.log to see that it is a HTMLCollection with 6 child elements. Study the HTMLCollection.
```
-> HTMLCollection(6) [li, li, li, li, li, li#berry, berry: li#berry]
```
<br>

3. 2 - Use a **for loop** to print out the name of the fruits from the previous collection. In the loop, change the background color of the list element containing "Pear" to green. Give the `<li>`elements a width of 100px and change the list-style-type to none to remove the bullets.
```
-> Using the for loop here:
-> Apple
-> Banana
-> Orange
-> Pear
-> Kiwi
-> Strawberry
```
<br>

4. 1 - Use **QuerySelectorAll()** to return a collection of all the `<li>`elements in the document. Use console.log to see that it actually is a NodeList with 6 child elements.
```
-> NodeList(6) [li, li, li, li, li, li#berry]
```
<br>

4. 2 - Use **forEach()** to iterate over the list and print out the name of the fruits. Add borders around each `<li>`element.
```
-> Using forEach here:
-> Apple
-> Banana
-> Orange
-> Pear
-> Kiwi
-> Strawberry
```

If you are done, you should see something like this:<br>
<img src="http://users.metropolia.fi/~ullamu/mdimages/fruitlist.png" width="40%">
