const {normalizeURL} = require('./crawl.js')
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