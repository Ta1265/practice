'use strict';

const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');

const candidates = [
  {
    id: 'person1',
    name: 'Amy Fish',
    skills: ['scala', 'go', 'python'],
  },
  {
    id: 'person2',
    name: 'bob',
    skills: ['scala', 'go', 'java'],
  },
];

app.use(bodyParser.json({ type: 'application/json' }));

app.post('/candidates', (req, res) => {
  const { id, name, skills } = req.body;
  if (!id || !name || !skills) return res.sendStatus(500);
  candidates.push({ id, name, skills });
  console.log(candidates);
  res.sendStatus(200);
});

app.get('/candidates/search?:skills', (req, res) => {
  const searchSkills = new Set();
  if (req.query.skills.length <= 0) return res.sendStatus(400);
  req.query.skills.split(',').map((s) => searchSkills.add(s));

  const validCandidates = candidates
    .map((c) => [c, c.skills.filter((s) => searchSkills.has(s)).length])
    .filter((c) => c[1] > 0);

  if (validCandidates.length > 0) {
    const best = validCandidates.reduce((most, cur) => cur[1] > most[1] ? cur : most)[0];
    res.status(200).json(best);
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  console.log('listening on port', 3000);
});