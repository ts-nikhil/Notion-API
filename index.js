const dotenv = require('dotenv').config()
const {Client} = require('@notionhq/client')

//Init client

const notion = new Client({
    auth : process.env.NOTION_TOKEN
})

const database_id = process.env.NOTION_DATABASE_ID

const getBooks = async () => {
    const payload ={
        path: `databases/${database_id}/query`,
        method: 'POST',
    }
    const {results} = await notion.request(payload)
//console.log(results)
    const books = results.map((page)=>{
        console.log(page.properties.Bookname.title[0].plain_text)
    })

}

getBooks()