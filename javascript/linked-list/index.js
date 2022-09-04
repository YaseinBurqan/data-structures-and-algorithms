/* eslint-disable quotes */
"use strict";

// const express = require("express");
// const app = express();

const SinglyLinkedList = require("./SinglyLinkedList");

const ll = new SinglyLinkedList();

ll.push(1);
ll.push(2);
ll.push(3);
ll.insertAfter(3, 9);

ll.removeDuplicatesFromAllTheList();
ll.toString();
