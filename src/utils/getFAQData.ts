
import fs from 'fs';

export default async function getFAQData() {
  let faq: TFAQ;
  
  let listBuff = fs.readFileSync(__dirname + '/../data/FAQData.json');
  faq = JSON.parse(listBuff.toString());
  
  return faq;
}
