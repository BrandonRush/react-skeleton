import express from 'express';
import path from 'path';
import React from 'react';

import Html from './server/components/Html';

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));
