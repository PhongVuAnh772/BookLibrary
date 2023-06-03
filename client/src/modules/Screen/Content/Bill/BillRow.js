import { React, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { FcAdvertising, FcComboChart } from "react-icons/fc";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function BillRow({ row, handleInputChange }) {
  return (
    <StyledTableRow key={row.name} style={{ fontWeight: "bold" }}>
      <StyledTableCell component="th" scope="row" style={{ width: "150px" }}>
        {row.bookName}
      </StyledTableCell>
      <StyledTableCell align="right">{row.bookAuthor}</StyledTableCell>
      <StyledTableCell align="right">{row.bookQuatity}</StyledTableCell>
      <StyledTableCell align="right">{row.bookCategory} </StyledTableCell>

      <StyledTableCell align="right" style={{ width: "10px" }}>
        <Form.Check type="checkbox" label="" />
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default BillRow;
