/* eslint-disable quotes */
"use strict";

const express = require("express");
const app = express();

const InsertionSort = require("./src/insertion.js");

app.use(InsertionSort);
