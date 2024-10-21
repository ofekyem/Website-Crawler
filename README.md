# Website Crawler Project  
## About
I created this project to improve my understanding of HTTP networking.  

In this project, I built a "Website Crawler."  

A Website Crawler is a program that takes an HTTP URL provided by the user and "crawls" the entire website, producing a report of the site's internal linking structure.  

The program works by retrieving the website's HTML code and identifying all the links and paths within it.  

It then recursively follows these links, printing to the console each time it encounters a new URL that has not yet been visited.  

At the end of the crawl, the program generates a report displaying the internal links of the given website. For each URL in the report, it shows the number of times that specific URL was linked.  

This program was developed using JavaScript as the programming language and Node.js as the runtime environment

## How To Run 
### The Main Program

First, you need to clone this repository to your machine by entering the terminal and typing:
```
git clone https://github.com/ofekyem/Website-Crawler.git
```

After that, navigate to the cloned folder by typing in the terminal: 
```
cd Website-Crawler
```
Next, install the required dependencies by typing:
```
npm install
```
To run the program, use the following command, replacing "your url" with a valid HTTP URL:
```
npm run "your url"
```
For example:
```
npm run https://webscraper.io/test-sites/e-commerce/allinone
```
Note: The program will only work with valid HTTP links, and you can only enter one URL per run.  
While running, you may sometimes see an "invalid" message in the console. This indicates that the program has found a link on the website that is not in HTTP format, so it doesn't include it in the final report.

### Tests 

I also included some tests for the functions used in the program. These tests were written with JSDOM, so in order to run them, you must also have JSDOM installed. After you install JSDOM, you can run the tests by navigating to the cloned repository and entering: 
```
npm test
```

## Written By: 
[Ofek Yemini](https://github.com/ofekyem)
