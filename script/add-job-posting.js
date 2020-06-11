const { GoogleSpreadsheet } = require("google-spreadsheet");

const creds = require("./credentials.json");

const googleDocument = new GoogleSpreadsheet(
  "1p-6EWh9oI-reQ77O1oJtzHvry7EgFbEs8n8nPWRzsmE"
);

const getSpreadsheetRows = async (googleDocument) => {
  await googleDocument.useServiceAccountAuth(creds);

  await googleDocument.loadInfo();

  const [spreadsheet] = googleDocument.sheetsByIndex;

  const rows = await spreadsheet.getRows();

  return rows;
};

(async function () {
  const rows = await getSpreadsheetRows(googleDocument);
})();
