import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import * as express from 'express';
import * as path from 'path';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import { readFileSync } from 'fs';
import { AppModuleServerNgFactory } from './ngfactory/app/app.module.server.ngfactory';

enableProdMode();

const app = express();

const template = readFileSync(path.resolve('./dist/index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = {
    document: template,
    url: options.req.url,
    extraProviders: []
  };

  renderModuleFactory(AppModuleServerNgFactory, opts).then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', (req, res) => {
  res.sendFile(path.resolve(`./dist${req.url}`));
});

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(8080, () => {
  console.log(`Server listening on 8080`);
});
