/* eslint-disable quotes */
"use strict";

const express = require("express");
const app = express();

const LinkedList = require("./src/linkedList");

app.use(LinkedList);
