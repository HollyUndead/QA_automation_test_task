const { Builder, By } = require("selenium-webdriver");

driver = new Builder().forBrowser("chrome").build();
async function Test() {
  await driver.get("https://hollyundead.github.io/Wallet-react-project/login");

  let title = await driver.getTitle();

  await driver.manage().setTimeouts({ implicit: 500 });

  const tuserEmail = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div[2]/div/form/label[1]/input')
  );

  await tuserEmail.sendKeys("cariwo9438@gyxmz.com");

  const userPassword = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div[2]/div/form/label[2]/input')
  );

  await userPassword.sendKeys("Holla9213");

  const submitButton = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div[2]/div/form/div/button')
  );

  await submitButton.click();

  await driver.sleep(1000);

  const exitButton = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/header/section/div/button')
  );

  exitButton.click();

  await driver.sleep(100);

  const confirmButton = await driver.findElement(
    By.xpath(
      '//*[@id="root"]/div[1]/div/header/section/div/div[2]/div/div/button[2]'
    )
  );

  confirmButton.click();
}

Test();
