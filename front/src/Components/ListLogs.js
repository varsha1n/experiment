import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Form, Button } from "react-bootstrap";
import "../index.css";

const divStyle = {
  margin: "8% 8%",
};

const ListLogs = () => {
  const [logs, setLogs] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getLogsList();
  }, []);

  const getLogsList = () => {
    axios
      .get("http://localhost:4000/logs")
      .then((response) => {
        console.log(response);
        setLogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if (searchType === "") {
      getLogsList();
    } else {
      axios
        .get(`http://localhost:4000/logs/${searchType}/${searchValue}`)
        .then((response) => {
          console.log(response);
          setLogs(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div style={divStyle}>
      <Form>
        <Form.Group>
          <Form.Label>Search By:</Form.Label>
          <Form.Check
            type="radio"
            name="searchType"
            label="Date"
            value="DateLog"
            onChange={handleSearchTypeChange}
          />
          <Form.Check
            type="radio"
            name="searchType"
            label="Time"
            value="TimeLog"
            onChange={handleSearchTypeChange}
          />
          <Form.Check
            type="radio"
            name="searchType"
            label="Severity"
            value="SeverityLog"
            onChange={handleSearchTypeChange}
          />
          <Form.Check
            type="radio"
            name="searchType"
            label="Hostname"
            value="HostnameLog"
            onChange={handleSearchTypeChange}
          />
          <Form.Check
            type="radio"
            name="searchType"
            label="Message"
            value="MessageLog"
            onChange={handleSearchTypeChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Search Value:</Form.Label>
          <Form.Control
            type="text"
            name="searchValue"
            value={searchValue}
            onChange={handleSearchValueChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Time</th>
            <th>Severity</th>
            <th>Hostname</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {logs &&
            logs.map((log, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{log.Date}</td>
                  <td>{log.Time}</td>
                  <td>{log.Severity}</td>
                  <td>{log.Hostname}</td>
                  <td>{log.Message}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListLogs;
