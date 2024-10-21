const {JSDOM} = require('jsdom')

async function crawlPage(baseURL, currentURL, pages){ 

    const baseUrlObj = new URL(baseURL) 
    const currentURLObj = new URL(currentURL) 
    if(baseUrlObj.hostname !== currentURLObj.hostname){
        return pages
    } 
    const normalizedCurrentURL = normalizeURL(currentURL) 
    if(pages[normalizedCurrentURL]>0){
        pages[normalizedCurrentURL]++ 
        return pages
    } 

    pages[normalizedCurrentURL]=1 

    console.log(`Actively crawling the page of: ${currentURL}`) 

    try{
        const resp = await fetch(currentURL) 
        if(resp.status>=400){
            console.log(`problem with fetch status code: ${resp.status} on page: ${currentURL}`)
            return pages
        } 
        const contentType= resp.headers.get("content-type")
        if(!contentType.includes("text/html")){
            console.log(`non html response, content type: ${contentType}, on page: ${currentURL}`)
            return pages
        } 
        const HTMLBody = await resp.text() 
        const nextURLs = getURLsFromHTML(HTMLBody,baseURL) 

        for(const url of nextURLs){ 
            pages = await crawlPage(baseURL,url,pages)

        }

    } catch(err){
        console.log(`problem in fetch action: ${err.message}, on page ${currentURL}`)
    } 

    return pages

}

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
    getURLsFromHTML,
    crawlPage
}