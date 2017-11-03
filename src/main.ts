import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { join } from 'path';
import { controller } from './server/controller';
import * as express from 'express';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main.bundle');
const PORT = process.env.PORT || 8080;
const CLIENT_DIR = join(process.cwd(), 'dist', 'client');

enableProdMode();

const config = require('./config/config.json')
const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', CLIENT_DIR);

app.use(controller({config}));

app.get('*.*', express.static(CLIENT_DIR));
app.get('*', (req, res) => {
  res.render(join(CLIENT_DIR, 'index.html'), { req, res });
});

app.listen(PORT, () => {
  console.log(`Application is running at http://localhost:${PORT}`);
});