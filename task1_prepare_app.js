// Task 1: Preparing the App for Deployment

// --- React Production Build ---
npm run build

// frontend/.env.example
REACT_APP_API_URL=https://your-api-url.com/api

// Code Splitting in App.js
import React, { Suspense, lazy } from 'react';
const BugList = lazy(() => import('./components/BugList'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BugList />
    </Suspense>
  );
}

// --- Backend Production Setup ---
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
}).then(() => app.listen(process.env.PORT || 5000));