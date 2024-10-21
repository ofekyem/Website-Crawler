function printReport(pages){ 
    console.log("=========")
    console.log("Start Report") 
    console.log("=========") 
    const sortedPages = sortPages(pages) 
    for(const page of sortedPages){
        const url = page[0] 
        const hitsNum = page[1] 
        console.log(`Found ${hitsNum} links to page: ${url}`)
    } 
    console.log("=========")
    console.log("End Report") 
    console.log("=========") 

}

function sortPages(pages){
    const pagesArray = Object.entries(pages) 
    pagesArray.sort((a,b) =>{
        aHitNum=a[1]
        bHitNum=b[1] 
        return bHitNum-aHitNum
    }) 
    return pagesArray
} 

module.exports = {
    sortPages,
    printReport
}