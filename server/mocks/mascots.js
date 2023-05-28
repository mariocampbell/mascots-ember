'use strict';

module.exports = function (app) {
  const express = require('express');
  let mascotsRouter = express.Router();

  mascotsRouter.get('/', function (req, res) {
    res.json({
      data: [
        {
          id: '1',
          title: 'Classic Tomster',
          image: 'tomster.webp',
          tags: 'all,tomster',
          stars: '5',
        },
        {
          id: '2',
          title: 'Classic Zoey',
          image: 'zoey.webp',
          tags: 'all,zoey',
          stars: '4',
        },
        {
          id: '3',
          title: 'Ember Octane',
          image: 'ember-octane.webp',
          tags: 'all,friends',
          stars: '3',
        },
      ],
    });
  });

  mascotsRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  mascotsRouter.get('/:id', function (req, res) {
    res.send({
      mascots: {
        id: req.params.id,
      },
    });
  });

  mascotsRouter.put('/:id', function (req, res) {
    res.send({
      mascots: {
        id: req.params.id,
      },
    });
  });

  mascotsRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/mascots', require('body-parser').json());
  app.use('/api/mascots', mascotsRouter);
};
