module.exports=function(req,res,utils){
    res.send(utils.render('runner',{
        component:'tabs',
        externalLinks:[
            '../../../button/assets/picker.css',
            '../../assets/picker.css'
        ]
    }));
};