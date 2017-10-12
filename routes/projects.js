var express = require('express');
var router = express.Router();
var ProjectCtrl = require('../controllers/project.js');

router.get('/', (req,res)=>{
  ProjectCtrl.getAllprojects(req,res);
});

router.get('/:id',(req,res)=>{
  ProjectCtrl.getProjectById(req,res);
});

router.post('/', (req,res) => {
  ProjectCtrl.addProject(req,res);
});

router.delete('/:id', (req,res)=>{
  ProjectCtrl.removeProject(req,res);
});

router.put('/:id', (req,res) => {
  ProjectCtrl.updateProject(req,res);
});

module.exports = router;
