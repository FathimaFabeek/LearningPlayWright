import{chromium} from 'playwright';
import dotenv from "dotenv";
import { TIMEOUT } from 'node:dns';
dotenv.config();
async function saveSession(){
    let browser=await chromium.launch({headless:false});
    let context=await browser.newContext();
    let page=await context.newPage();
    const academy_user=process.env.academy_user;
    //const vwo_pwd=process.env.vwo_pwd;
    //let button=
    await page.goto("https://app.thetestingacademy.com/login");
    //await page.waitForTimeout(2000);
    await page.getByPlaceholder('Enter your email address').fill(academy_user);
    //await page.fill("#login-password",vwo_pwd);
    await page.locator("//span[text()='Continue']").click();
     await page.waitForURL('https://app.thetestingacademy.com/student/my-process',{ timeout: 30000 });//regex pattern
//when checking dashboard should be available
    await context.storageState({ path: "./user-session.json" });//to store the value into .user
    console.log("Session saved to user-session.json ✅");
//npx tsx tests/04_chapter_SessionStorage/01_session_storage.ts, then session will be saved to user-session.json
    await browser.close();
    //https://1sec.email/
//credentials will be in .env file(gitignored file)
    //npm install dotenv --save
}
saveSession();