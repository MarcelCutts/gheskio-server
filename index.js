const express = require("express");
const mssql = require("mssql");

const app = express();
const port = 3000;

app.use(express.json());

const config = {
  user: "sa",
  password: "<YourStrong!Passw0rd>",
  server: "localhost",
  database: "gheskio"
};

const pool = new mssql.ConnectionPool(config);
const poolConnect = pool.connect();

app.post("/patients", async (req, res) => {
  const { patients } = req.body;

  try {
    await poolConnect;

    patients.forEach(
      async patient =>
        await pool
          .request()
          .input("patient_code", mssql.NVarChar(50), patient.id)
          .input("comments", mssql.NVarChar(50), patient.comments)
          .input("time_started", mssql.DateTime, patient.timeStated)
          .input("time_finished", mssql.DateTime, patient.timeFinished)
          .input("staff_name", mssql.NVarChar(128), patient.staffName)
          .input("station_id", mssql.NVarChar(64), patient.stationId)
          .input("facility_id", mssql.NVarChar(64), patient.facilityId)
          .query(
            `INSERT INTO patients 
        (patient_code, comments, time_started, time_finished, staff_name, station_id, facility_id) 
        VALUES
        (@patient_code, @comments, @time_started, @time_finished,  @staff_name,  @station_id, @facility_id);`
          )
    );

    mssql.close();
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Server running on ${port}`));
