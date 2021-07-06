import cheerio from "cheerio";
import getUrls from "get-urls";
import fetch from "isomorphic-fetch";

const scrapeMetatags = (text = "https://www.google.com/search?q=hello+world") => {
    const urls = Array.from(getUrls(text));

    const requests = urls.map(async (url) => {
        const res = await fetch(url);
        const html = await res.text();
        const $ = cheerio.load(html);
        
        
        const getMetatag = (name) =>
            $(`meta[name=${name}]`).attr("content") ||
            $(`meta[name="og:${name}"]`).attr("content") ||
            $(`meta[name="twitter:${name}"]`).attr("content");
        // console.log($(".q-box.qu-borderBottom.qu-p--medium").first().text());
        console.log($("body").text().slice(0, 10000))
        return {
            url,
            title: $("title").text(),
            data: $(".r h3").text(),
            favicon: $('link[rel="shortcut icon"]').attr("href"),
            description: getMetatag("description"),
            image: getMetatag("image"),
            author: getMetatag("author"),
        };
    });

    return Promise.all(requests);
};


const scrape = async (url) => {
    const res = await fetch(url);
    const text = await res.text();
    const $ = cheerio.load(text);
    const result = [];
    const links = $("a");
    $(links).each(function (i, link) {
        // console.log($(link).text() + ":\n  " + $(link).attr("href"));
        result.push({
            title: $(link).find("h3").text(),
            url: $(link).attr("href"),
        })
    });
    return result;
 
}

export const searchEq2 = async (req, res) => {
    const url = req.body.text;

    try {
        // const data = await scrapeMetatags(url);
        const data = await scrape(url);

        res.send(data);
    } catch (error) {
        console.log(error);
    }
};
