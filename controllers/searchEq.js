import fs from 'fs';
import { CollectContent, Root, Scraper } from "nodejs-web-scraper";

export const searchEq = async (req, res) => {
    const { url } = req.query;
    const finalUrl = "https://" + url.slice(2);

 
    try {

const config = {
    baseSiteUrl: `https://www.quora.com/`,
    startUrl: `https://www.quora.com/search?q=math`,
    filePath: "./images/",
    logPath: "./logs/",
};

const scraper = new Scraper(config);
const root = new Root(); 

const title = new CollectContent("q-text", ".puppeteer_test_question_title", ); 

root.addOperation(title);
await scraper.scrape(root);

const articles = title.getData();

fs.writeFile("./articles.json", JSON.stringify(articles), () => {
    
});

    

    } catch (error) {
        console.log(error);
        res.json({ message: error.message });
    }
};
