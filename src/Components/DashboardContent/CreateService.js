import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { API } from "../../General/General";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CreateService() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [approver, setApprover] = useState("");

  useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="card rounded-2 shadow">
        <div className="card-body">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <span className="col">
              <TextField
                label="Name"
                name="Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </span>
            <span className="col">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  defaultValue={dayjs("2023-04-17")}
                  onChange={(newDate) => {
                    setDate(newDate.$d);
                  }}
                  label="Select Date"
                />
              </LocalizationProvider>
            </span>
          </div>
          <br />
          <span className="mx-auto">
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              color="secondary"
              sx={{ width: "75%" }}
            />
          </span>
          <br />
          <span className="d-flex flex-row justify-content-between align-items-center container">
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="approver-label">Select Approver</InputLabel>
              <Select
                labelId="approver-label"
                id="approver-select"
                value={approver}
                label="Age *"
                onChange={(event) => {
                  setApprover(event.target.value);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Steve">Steve</MenuItem>
                <MenuItem value="Sunny">Sunny</MenuItem>
                <MenuItem value="Rolex">Rolex</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained">Send</Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CreateService;
