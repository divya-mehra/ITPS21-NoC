## Random Walks
A random walk is the process by which randomly-moving objects wander away from where they started.

### A review of object oriented programming

An `Object` in JavaScript is an entity that has both **data and functionality**. A `Class` is the template (or cookie cutter) for making instances of these objects. For example: a template to create articles, with the actual articles and unique metadata as instances of the book object. It reminds me of Plato's *Allegory of the Cave* with its notion of abstract, ideal entities and their visible incarnations. 

A few notes on `Objects`:

1. A **property** is what an object has, while a **method** is what an object does. It's a function that BELONGS to an object. This is what we mean by an object having both data stored and functionality.

2. Use *commas* to separate your key-value pairs (representing properties and methods) within the object and `{}` *curly braces* to enclose your object.
````
    let article {
        title: 'The Unfinished Business of Flint’s Water Crisis',
        author: 'Anna Clark',
        'pub date': 'Jan 22, 2021'
    };
````
2. We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.   
````
    article['pub date']; // 'Jan 22, 2021'
    article.title; // 'The Unfinished Business of Flint’s Water Crisis'
````

3. Objects are mutable so can be reassigned.

5. for...in loop is only for is only for unordered objects & their key-value pairs, not arrays which are ordered.  
Ways to loop:  
````
    for (let i = 0; myList.length < 10; i++) 
        { let element = myList[i]; if(element.includes{'!'}) ... } 
    
    for (let element in myUnorderedList) { console.log(element.name; } // assuming name is a property of the items in the object) } 
````

6. Factory functions are object creators.   
*I'm going to add this one later.*

A few notes on `Classes`:

1. Classes are templates for making instances of the objects. 
2. They look similar to objects, but have the `constructor()` method & are created with the `class` key, like below. They can also act as superclasses to eliminate code redundancies:
````
class Content {
    constructor(title, author, date) {
        this._title = title;
        this._topic = topic;
        this._date = date;
        this._age = 0
    }

    addDays(days) {
        this._age += days;
    }

    get title() {
        return this._title;
    }


} 

class Article extends Content {
    constructor(title, author, date, pub) {
        super(title);
        super(topic);
        super(date);
        this._pub = pub;

    }

    addTopic(addlTopic) {
        this._topic.push(addlTopic);
    }

}

````

3. Static methods belong to the parent class alone.
*And I have more to add.*

### A Review of Statistics


