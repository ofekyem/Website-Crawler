const {crawlPage} = require('./crawl.js')

async function main(){
    if(process.argv.length<3){
        console.log("No webstie provided")
        process.exit(1)
    } 
    if(process.argv.length>3){
        console.log("Too many arguments provided")
        process.exit(1)
    } 
    console.log("\"Crawling in your webstie! These links, they will not be missed\"") 

    const baseURL=process.argv[2] 

    console.log(`Starting crawl of ${baseURL}`) 
    const pages = await crawlPage(baseURL, baseURL, {}) 
    for(const page of Object.entries(pages)){
        console.log(page)
    }

} 

main()