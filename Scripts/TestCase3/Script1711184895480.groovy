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

WebUI.navigateToUrl('http://54.200.147.118:5001/')

WebUI.setText(findTestObject('Object Repository/AddBookPage_/input_Username_username'), 'admin')

WebUI.setEncryptedText(findTestObject('Object Repository/AddBookPage_/input_Password_password'), 'yHe9suVz1Dkg/2HJIvR/uA==')

WebUI.click(findTestObject('Object Repository/AddBookPage_/button_Login'))

WebUI.click(findTestObject('Object Repository/AddBookPage_/a_Add'))

WebUI.click(findTestObject('Object Repository/AddBookPage_/a_Add Book'))

WebUI.setText(findTestObject('Object Repository/AddBookPage_/input_Title_book_title'), 'purple')

WebUI.setText(findTestObject('Object Repository/AddBookPage_/input_Author_author_name'), 'gogo rubi ruth')

WebUI.setText(findTestObject('Object Repository/AddBookPage_/input_Price_price'), '200')

WebUI.setText(findTestObject('Object Repository/AddBookPage_/input_Promotional Price_promo'), '0')

WebUI.setText(findTestObject('Object Repository/AddBookPage_/input_Stock_stock'), '100')

WebUI.setText(findTestObject('Object Repository/AddBookPage_/input_Publisher_publisher'), 'gogo rubi ruth')

WebUI.setText(findTestObject('Object Repository/AddBookPage_/input_Language_language'), 'burmese')

WebUI.setText(findTestObject('Object Repository/AddBookPage_/input_Number of pages_pages'), '20')

WebUI.setText(findTestObject('Object Repository/AddBookPage_/textarea_Description_description'), '      \n    nothing')

WebUI.click(findTestObject('Object Repository/AddBookPage_/button_update'))

WebUI.click(findTestObject('Object Repository/AddBookPage_/div_Book added successfully'))

WebUI.click(findTestObject('Object Repository/AddBookPage_/div_Book added successfully'))

WebUI.click(findTestObject('Object Repository/AddBookPage_/a_Select Category'))

WebUI.click(findTestObject('Object Repository/AddBookPage_/a_Kids Books'))

WebUI.click(findTestObject('Object Repository/AddBookPage_/div_purple        gogo rubi ruth        Sto_0ea462'))

WebUI.closeBrowser()

