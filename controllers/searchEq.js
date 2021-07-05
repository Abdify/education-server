
import scrape from 'website-scraper';

export const searchEq = async (req, res) => {
    const { url } = req.query;
    const finalUrl = "https://" + url.slice(2);
    
    const options = {
        urls: [finalUrl],
        directory: "./result",
    };

    try {
        const result = await scrape(options);
        
        const links = result[0].text.slice(10000,20000).match(/<a href="\/url\?q=https:\/\/\S+"/);
        console.log(links);
        // res.status(200).json(chapters);
    } 
    
    catch (error) {
        console.log(error);
        res.json({ message: error.message });
    }
};
