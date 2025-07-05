import test from "@playwright/test";

test("Xpath",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000)

    await page.locator("//input[@id='username']").fill('DemoCSR2')
    await page.waitForTimeout(3000)

    await page.locator("//input[@id='password']").fill('crmsfa')
    await page.waitForTimeout(3000)

    await page.locator("//input[contains(@class,'Submit')]").click()
    await page.waitForTimeout(3000)

    
})