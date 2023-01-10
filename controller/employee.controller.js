const employee = require("../services/employee.service");
const { genSaltSync,hashSync } = require("bcrypt");

// employee get starts****
async function empgetcont(req,res){
   let empcod = req.params.EMPCOD;
   await employee.empgetserv(empcod,(err,result)=>{
    if(err){
        console.log(err);
         res.status(500).json({
            sucess: 0,
            message:"Database Connection Error"
        });
    }
    else{
         return res.status(200).json({
             result
        });
    }
   })
};
// employee get end****

// employee create starts****
async function empincont(req,res){
    const body = req.body;
        const salt = await genSaltSync(10);
        let hash =await hashSync(body.PASSWORD, salt,(err,hsh)=>{});
        body.PASSWORD= hash;
        await employee.empinserv(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    sucess: 0,
                    message:"Database Connection Error"
                });
            }
            else{
                
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            }
        })
};
// employee create end****

// employee update starts****
async function empupcont(req,res){
    const body = req.body;
    if(body.PASSWORD.length < 20){
        const salt = await genSaltSync(10);
        let hash =await hashSync(body.PASSWORD, salt,(err,hsh)=>{});
        body.PASSWORD= hash;
    }
        await employee.empupserv(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    sucess: 0,
                    message:"Database Connection Error"
                });
            }
            else{
                
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            }
        })
};
// employee update end****

// employee get starts****
async function empdelcont(req,res){
    let empcod = req.body.EMPCOD;
    await employee.empdelserv(empcod,(err,result)=>{
     if(err){
         console.log(err);
          res.status(500).json({
             sucess: 0,
             message:"Database Connection Error"
         });
     }
     else{
          return res.status(200).json({
             success: 1,
             data: result
         });
     }
    })
 };
 // employee get end****

module.exports = { empgetcont,
                   empincont,
                   empupcont,
                   empdelcont };
