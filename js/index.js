const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navigation = document.querySelectorAll('a'); //Select all anchor tags

//Loop through all anchor tags and place the correct text in them
//Change text color to green
navigation.forEach((element, index) => {
    switch (index) {
        case 0:
            element.textContent = "Services";
            break;
        case 1:
            element.textContent = "Product";
            break;
        case 2:
            element.textContent = "Vision";
            break;
        case 3:
            element.textContent = "Features";
            break;
        case 4:
            element.textContent = "About";
            break;
        case 5:
            element.textContent = "Contact";
            break;
    }
    element.style.color = "green";
});

//Create a new element with text, append it to object and style element
let newAppend = document.createElement('a');
newAppend.textContent = "NewAppend";
let navs = document.querySelector('nav').appendChild(newAppend).style.color = "green";

//Create new element with text, prepend it to object
let newPrepend = document.createElement('a');
newPrepend.textContent = "NewPrepend";
let navs2 = document.querySelector('nav').prepend(newPrepend);

//Select prepended object and style it
let navs3 = document.querySelector('a');
navs3.style.color = "green";


//Select the cta-img and replace the image src
let callToAction = document.querySelector('#cta-img');
callToAction.src = "img/header-img.png";

//Select H1 tag and insert text
let ctaH1 = document.querySelector('h1');
ctaH1.insertAdjacentHTML('beforeend', 'DOM<br>Is<br>Awesome')

//Select Button and insert text
let ctaBtn = document.querySelector('button');
ctaBtn.textContent = "Get Started";

let midImg = document.querySelector('#middle-img');
midImg.src = "img/mid-page-accent.jpg";

//Select all H4 tags and loop through them inserting correct text
let textH4 = document.querySelectorAll('.text-content, h4');
textH4.forEach((element, index) => {
    switch (index) {
        case 1:
            element.textContent = "Features";
            break;
        case 3:
            element.textContent = "About";
            break;
        case 5:
            element.textContent = "Services";
            break;
        case 7:
            element.textContent = "Product";
            break;
        case 9:
            element.textContent = "Vision";
            break;
        case 10:
            element.textContent = "Contact";
            break;
    }
});

//Select all P tags loop through them and insert text
let textP = document.querySelectorAll('text-content, p');
textP.forEach((element, index) => {
    switch (index) {
        case 0:
            element.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
            break;
        case 1:
            element.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
            break;
        case 2:
            element.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
            break;
        case 3:
            element.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
            break;
        case 4:
            element.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
            break;
        case 5:
            element.textContent = "123 Way 456 Street Somewhere, USA";
            break;
        case 6:
            element.textContent = "1 (888) 888-8888";
            break;
        case 7:
            element.textContent = "sales@greatidea.io";
            break;
        case 8:
            element.textContent = "Copyright Great Idea! 2018";
            break;
    }
});