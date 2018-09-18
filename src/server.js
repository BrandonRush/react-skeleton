import express from 'express';
import React from 'react';

import Html from './components/Html.js';

app.use(express.static(path.resolve(__dirname, 'public')));
