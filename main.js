const { Builder, By, options } = require("selenium-webdriver");
const crypto = require("crypto");

const validEmail = "cariwo9438@gyxmz.com";
const validPassword = "Holla9213";
const baseUrl = "https://hollyundead.github.io/Wallet-react-project/login";
driver = new Builder().forBrowser("chrome").build();

allTests();

async function allTests() {
  await validData();
  await driver.sleep(1000);
  await emptyPassword();
  await driver.sleep(1000);
  await emptyEmail();
  await driver.sleep(1000);
  await invalidPassword();
  await driver.sleep(1000);
  await invalidEmail();
  await driver.sleep(1000);
  await emailValidation();
  await driver.sleep(1000);
  await passwordValidation();
}

async function validData() {
  await driver.get(baseUrl);

  const title = await driver.getTitle();

  await driver.manage().setTimeouts({ implicit: 500 });

  const submitButton = await driver.findElement(By.css("button"));

  const userEmail = await driver.findElement(By.name("email"));

  const userPassword = await driver.findElement(By.name("password"));

  await userEmail.sendKeys(validEmail);
  await userPassword.sendKeys(validPassword);
  await submitButton.click();
  await driver.sleep(1000);
  console.log(await driver.getCurrentUrl());
  if (
    "https://hollyundead.github.io/Wallet-react-project" ===
    (await driver.getCurrentUrl())
  ) {
    console.log("Test with valid data passed");
  } else {
    console.log("Test with valid data failed");
  }

  await driver
    .findElement(
      By.xpath('//*[@id="root"]/div[1]/div/header/section/div/button')
    )
    .click();
  await driver.sleep(100);
  await driver
    .findElement(
      By.xpath(
        '//*[@id="root"]/div[1]/div/header/section/div/div[2]/div/div/button[2]'
      )
    )
    .click();
}

async function emptyPassword() {
  await driver.get(baseUrl);

  const title = await driver.getTitle();

  await driver.manage().setTimeouts({ implicit: 800 });

  const submitButton = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div/div/form/div/button')
  );

  const userEmail = await driver.findElement(By.name("email"));

  const userPassword = await driver.findElement(By.name("password"));

  await userEmail.sendKeys(validEmail);
  submitButton.click();
  await driver.sleep(100);
  if (driver.findElement(By.css("span")).isDisplayed()) {
    console.log("Test without password passed");
  } else {
    console.log("Test without password faild");
  }
  return 1;
}

async function emptyEmail() {
  await driver.get(baseUrl);

  const title = await driver.getTitle();

  await driver.manage().setTimeouts({ implicit: 800 });

  const submitButton = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div/div/form/div/button')
  );

  const userEmail = await driver.findElement(By.name("email"));

  const userPassword = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div[2]/div/form/label[2]/input')
  );

  await userPassword.sendKeys(validPassword);
  submitButton.click();
  await driver.sleep(1000);
  if (driver.findElement(By.css("span")).isDisplayed()) {
    console.log("Test without email passed");
  } else {
    console.log("Test without email faild");
  }
}

async function invalidPassword() {
  await driver.get(baseUrl);

  const title = await driver.getTitle();

  await driver.manage().setTimeouts({ implicit: 800 });

  const submitButton = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div/div/form/div/button')
  );

  const userEmail = await driver.findElement(By.name("email"));

  const userPassword = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div[2]/div/form/label[2]/input')
  );

  await userEmail.sendKeys(validEmail);
  await userPassword.sendKeys("wadawdasd");
  submitButton.click();
  await driver.sleep(1000);
  const toastify = await driver.findElement(By.className("Toastify"));
  const value = await toastify.getText();
  if (value === "You have entered an invalid email or password") {
    console.log("Test with invalid password passed");
  } else {
    console.log("Test with invalid password failed");
  }
}

async function invalidEmail() {
  await driver.get(baseUrl);

  const title = await driver.getTitle();

  await driver.manage().setTimeouts({ implicit: 800 });

  const submitButton = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div/div/form/div/button')
  );

  const userEmail = await driver.findElement(By.name("email"));

  const userPassword = await driver.findElement(By.name("password"));

  await userEmail.sendKeys(validEmail + "a");
  await userPassword.sendKeys(validPassword);

  submitButton.click();
  await driver.sleep(1000);
  const toastify = await driver.findElement(By.className("Toastify"));
  const value = await toastify.getText();
  if (value === "You have entered an invalid email or password") {
    console.log("Test with invalid email passed");
  } else {
    console.log("Test with invalid email failed");
  }
}

async function emailValidation() {
  await driver.get(baseUrl);

  const title = await driver.getTitle();

  await driver.manage().setTimeouts({ implicit: 800 });

  const submitButton = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div/div/form/div/button')
  );

  const userEmail = await driver.findElement(By.name("email"));

  const userPassword = await driver.findElement(By.name("password"));

  await userEmail.sendKeys("adwadawd__*");
  await userPassword.sendKeys(validPassword);

  submitButton.click();
  await driver.sleep(1000);
  if (driver.findElement(By.css("span")).isDisplayed()) {
    console.log("Test email validation passed");
  } else {
    console.log("Test email validation failed");
  }
}

async function passwordValidation() {
  await driver.get(baseUrl);

  const title = await driver.getTitle();

  await driver.manage().setTimeouts({ implicit: 800 });

  const submitButton = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div/div/div/form/div/button')
  );

  const userEmail = await driver.findElement(By.name("email"));

  const userPassword = await driver.findElement(By.name("password"));

  await userEmail.sendKeys(validEmail);
  await userPassword.sendKeys("asdawd__*:");

  submitButton.click();
  await driver.sleep(1000);
  const toastify = await driver.findElement(By.className("Toastify"));
  const value = await toastify.getText();
  if (value === "You have entered an invalid email or password") {
    console.log("Test password validation failed");
  } else {
    console.log("Test password validation passed");
  }
}
