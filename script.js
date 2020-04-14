//start using puppeteer.js
const puppeteer = require('puppeteer');

(async () => {
  // don't launch headless as we want to see the result 
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  // open specified page 
  await page.goto('https://custom.rotacloud.com/developer-challenge/');

  // get info from the page 
  var bTag1 = await page.evaluate(() => {
    return document.getElementsByTagName("b")[0].innerText;
  })
  var bTag2 = await page.evaluate(() => {
    return document.getElementsByTagName("b")[1].innerText;
  })

  // calculate greatest common denominator using the function below 
  var answer = gcd(bTag1, bTag2);

  // enter answer into form and submit! 
  await page.waitForSelector('input[type=number]');
  await page.focus('input');
  await page.keyboard.type(answer.toString());

  await page.click('input[type=submit]')
  
 
  // uncomment the below if you don't want to view the outcome of submitting the form
  // await browser.close();
})();

// function to calculate gdc 
function gcd(a, b) {
  if (b == 0){
      return a;
  } else {
      return gcd(b, (a % b));
  }
}