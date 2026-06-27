const SPREADSHEET_ID = '여기에_구글스프레드시트_ID를_넣으세요'
const SHEET_NAME = '게시글'

function doPost(e) {
  try {
    const sheet = getSheet_()
    const data = JSON.parse(e.postData.contents || '{}')

    sheet.appendRow([
      new Date(),
      data.title || '',
      data.bride || '',
      data.groom || '',
      data.weddingDate || '',
      data.phone || '',
      data.designType || '',
      data.message || '',
      data.createdAt || '',
    ])

    return json_({ ok: true })
  } catch (error) {
    return json_({ ok: false, message: error.message })
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
  let sheet = spreadsheet.getSheetByName(SHEET_NAME)

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME)
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      '접수일시',
      '제목',
      '신부 성함',
      '신랑 성함',
      '예식일',
      '연락처',
      '희망 디자인',
      '요청 내용',
      '브라우저 생성시각',
    ])
  }

  return sheet
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON)
}
