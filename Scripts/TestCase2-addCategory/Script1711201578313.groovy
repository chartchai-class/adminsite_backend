import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl(GlobalVariable.G_SiteUrl)

WebUI.setText(findTestObject('Object Repository/AddCategoryPage_/input_username'), GlobalVariable.username)

WebUI.setEncryptedText(findTestObject('Object Repository/AddCategoryPage_/input_password'), 'yHe9suVz1Dkg/2HJIvR/uA==')

WebUI.click(findTestObject('Object Repository/AddCategoryPage_/button_Login'))

WebUI.click(findTestObject('Object Repository/AddCategoryPage_/a_Add'))

WebUI.click(findTestObject('Object Repository/AddCategoryPage_/a_Add Category'))

WebUI.setText(findTestObject('Object Repository/AddCategoryPage_/input_Category Name_categoryName'), 'girlLove')

WebUI.click(findTestObject('Object Repository/AddCategoryPage_/button_Submit'))

WebUI.click(findTestObject('Object Repository/AddCategoryPage_/div_Category added successfully'))

WebUI.click(findTestObject('Object Repository/AddCategoryPage_/a_Select Category'))

WebUI.click(findTestObject('Object Repository/AddCategoryPage_/a_girlLove'))

WebUI.click(findTestObject('Object Repository/AddCategoryPage_/a_Categories'))

WebUI.click(findTestObject('Object Repository/AddCategoryPage_/td_girlLove'))

WebUI.closeBrowser()

