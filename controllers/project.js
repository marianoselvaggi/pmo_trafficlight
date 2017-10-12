let mongoose = require('mongoose');
let Project = require('../models/project.js');

///get all the projects
function getAllprojects(req,res){
    Project.find(function(err,projects){
      if (err) {
        res.send(500,err.message);
      } else {
        res.json(projects);
      };
    });
}

/// get one project by id
function getProjectById(req,res){
  Project.findById(req.params.id,function(err,project){
    if(err) {
      res.send(500,err.message);
    } else {
      res.json(project);
    }
  });
}

//add a project to the database
function addProject(req,res){
  var project = new Project({
    client: req.body.client,
    name: req.body.name,
    pm: req.body.pm,
    type: req.body.type,
    startdate: req.body.startdate,
    enddate: req.body.endddate,
    status: req.body.status,
    pl: req.body.pl
  });

  project.save(function(err,project){
    if(err){
      res.status(500).send(err.message);
    } else {
      res.jsonp({success: true, message: 'The project was created!'});
    }
  })
}

//remove one project by id
function removeProject(req,res){
  Project.findByIdAndRemove(req.params.id,(err,project)=>{
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.jsonp({success: true,message: 'Project deleted:'+req.params.id});
    }
  });
}

//update one project by id
function updateProject(req,res){
  Project.findById(req.params.id, (err, project) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      Object.assign(project,req.body).save((err,project)=>{
        res.jsonp({message: 'Book updated!',project: project});
      });
    }
  });
}

module.exports = { getAllprojects, getProjectById,addProject,removeProject, updateProject };
