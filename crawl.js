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
    normalizeURL
}