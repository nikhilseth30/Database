const express = require('express')
const Employee = require('../model/employee.model')
const router = express.Router()

router.get("/",(req,res) =>{   //first page
    res.render("home")

})

router.get('/add-emp',(req,res)=>{    //second page
    res.render("addEmp")   
})

router.post('/save-emp',(req,res)=>{    //third page
    let Emp = new Employee()
    Emp.fullName = req.body.fullName
    Emp.email = req.body.email
    Emp.mobile = req.body.mobile
    Emp.city = req.body.city

    Emp.save((err,result)=>{
        if(!err){
            res.redirect("/emp")
        }else{
            console.log("Save Error",err)
        }
    })
})

router.get('/show-all-emp',(req,res)=>{
    Employee.find((err,result)=>{
        if(!err){
            res.render('showEmp',{list:result})
        }else
            console.log("Show Error",err)
    })
})

router.get('/delete-all-emp',(req,res)=>{
    Employee.find((err,result)=>{
        if(!err){
            console.log(result)
            res.render('delete',{list:result})
        }
    })
})

router.get('/final-delete/:uid',(req,res)=>{
    Employee.findByIdAndDelete(req.params.uid,(err,result)=>{
        if(err) console.log(err)
        else
        res.redirect('/emp/delete-all-emp')

    })
})

router.get('/update-all-emp',(req,res)=>{
    Employee.find((err,result)=>{
        if(!err){
            res.render('updateEmp',{list:result})
        }
     })
})

router.get('/pre-update/:id',(req,res)=>{
    Employee.findById(req.params.id,(err,result)=>{
        if(err){
    
        }else{
           res.render('preEmp',{emp:result})
        }
    })
})

router.post("/final-update",(req, res) => {
    Employee.findByIdAndUpdate(req.body.id,req.body,{new:true},(err,result) =>{
        if(err) {
            console.log(err)
        }else{
            res.redirect("/emp/update-all-emp")
        }
    })

})

module.exports = router 