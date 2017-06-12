var express = require('express');
var appserver = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admin');
appserver.use(bodyParser.urlencoded({extended: true}))
appserver.use(bodyParser.json());

var router = express.Router();
appserver.use('/api', router);
appserver.listen(3000);
console.log("Server is running !!!");

// Setting up server complete -------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

var UserPost = require('./userPostModel');

router.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Max-Age', '1000');
	res.setHeader('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
	res.setHeader('Access-Control-Allow-Methods', "POST, GET, OPTIONS, DELETE, PUT");
	next(); 
});

router.get('/', function(req, res){
    res.json('Server is running.');
});

router.route('/posts')
    .get(function(req, res){
        UserPost.find(function(err,data){
            if(err)
                res.send(err);
            
            res.json(data);
        })
    })
    .post(function(req,res){
        var newPost = new UserPost();
        newPost.name = req.body.name;
        newPost.age = req.body.age;
        newPost.email = req.body.email;
        newPost.website = req.body.website;
        newPost.post = req.body.post;

        newPost.save(function(err){
            if(err){
                res.setHeader('Access-Control-Allow-Origin', '*');
				res.send(err);
            }

            res.setHeader('Access-Control-Allow-Origin', '*');
			res.json(newPost);
        })
    })
    .put(function(req,res){
        res.setHeader('Access-Control-Allow-Origin', '*');
        UserPost.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.postId),req.body.post,function(err,post){
            if(err){
            console.log('error'+err);
                throw err;
            }
            else    
                return res.json('Successfully updated');
        })
    });

router.route('/posts/:postId')
    .delete(function(req,res){
        console.log(req.params.postId);
        UserPost.remove({_id: mongoose.Types.ObjectId(req.params.postId)}, function(err, post){
            if(err)
                res.json(err);
            else    
                console.log(post);
                res.json("Succesfully Deleted ");
        })
    });

router.route('/')
router.route('/search')
    .post(function(req,res){
        var id = req.body.postId;
        UserPost.findById(mongoose.Types.ObjectId(id), function(err, doc){
            res.setHeader('Access-Control-Allow-Origin', '*');
            if(err){
                return res.json({'error' : err});
            }else{
                return res.json(doc);
            }
        })
    })
