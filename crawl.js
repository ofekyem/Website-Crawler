const {JSDOM} = require('jsdom')


function getURLsFromHTML(HTMLbody, baseURL){
    const urls=[] 
    const domItem = new JSDOM(HTMLbody) 
    const linksObjects = domItem.window.document.querySelectorAll('a')
    for(const link of linksObjects){
        if(link.href.slice(0,1)==='/'){
            try{
                const urlObj = new URL(`${baseURL}${link.href}`)
                urls.push(urlObj.href)
            } catch(err){
                console.log(`problem with relative url: ${err.message}`)
            }
            
        }
        else{ 
            try{
                const urlObj = new URL(`${link.href}`)
                urls.push(urlObj.href)
            } catch(err){
                console.log(`problem with absolute url: ${err.message}`)
            }
        }
        
    }
    return urls
}

/*  This function normalizes every given url into a standard form. 
    The standard form is DomainName/Pathname. 
*/
function normalizeURL(url){
    const urlObj = new URL(url)
    const p = `${urlObj.hostname}${urlObj.pathname}`
    if(p.length>0 && p.slice(-1) === '/'){
        return p.slice(0,-1)
    }
    return p
        
}  

module.exports = {
    normalizeURL,
    getURLsFromHTML
}