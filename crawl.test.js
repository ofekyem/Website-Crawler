const {normalizeURL,getURLsFromHTML} = require('./crawl.js')
const {test,expect } = require('@jest/globals') 

test('normalizeURL remove protocol', ()=>{
    const input = 'https://google.com'
    const actual = normalizeURL(input)
    const expected = 'google.com' 
    expect(actual).toEqual(expected)
}) 

test('normalizeURL remove slash', ()=>{
    const input = 'https://google.com/'
    const actual = normalizeURL(input)
    const expected = 'google.com' 
    expect(actual).toEqual(expected)
}) 

test('normalizeURL modify capitals', ()=>{
    const input = 'https://GOOGLE.com'
    const actual = normalizeURL(input)
    const expected = 'google.com' 
    expect(actual).toEqual(expected)
}) 

test('getURLsFromHTML absolute', ()=>{
    const HTMLBodyInput = ` 
    <html> 
        <body> 
            <a href="https://google.com/">google</a> 
        </body>
      </html>     
    
    ` 
    const baseURLInput = "https://google.com"
    const actual = getURLsFromHTML(HTMLBodyInput,baseURLInput)
    const expected = ["https://google.com/"] 
    expect(actual).toEqual(expected)
}) 

test('getURLsFromHTML relative', ()=>{
    const HTMLBodyInput = ` 
    <html> 
        <body> 
            <a href="/path/">google</a> 
        </body>
      </html>     
    
    ` 
    const baseURLInput = "https://google.com"
    const actual = getURLsFromHTML(HTMLBodyInput,baseURLInput)
    const expected = ["https://google.com/path/"] 
    expect(actual).toEqual(expected)
}) 

test('getURLsFromHTML both abs and rel', ()=>{
    const HTMLBodyInput = ` 
    <html> 
        <body> 
            <a href="https://google.com/path1/">google path1</a> 
            <a href="/path2/">google path2</a> 
        </body>
      </html>     
    
    ` 
    const baseURLInput = "https://google.com"
    const actual = getURLsFromHTML(HTMLBodyInput,baseURLInput)
    const expected = ["https://google.com/path1/","https://google.com/path2/"] 
    expect(actual).toEqual(expected)
}) 

test('getURLsFromHTML invalid URL', ()=>{
    const HTMLBodyInput = ` 
    <html> 
        <body> 
            <a href="null">invalid URL</a> 
        </body>
      </html>     
    
    ` 
    const baseURLInput = "https://google.com"
    const actual = getURLsFromHTML(HTMLBodyInput,baseURLInput)
    const expected = [] 
    expect(actual).toEqual(expected)
}) 