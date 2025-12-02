require("dotenv").config();
const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

module.exports = async function() {
  const databaseId = process.env.MENU_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId
  });

  return response.results.map(item => {
    return {
      id: item.id,
      name: item.properties.Name.title[0]?.plain_text,
      price: item.properties.Price.number,
      category: item.properties.Category.select?.name,
      description: item.properties.Description.rich_text[0]?.plain_text || "",
    };
  });
};
