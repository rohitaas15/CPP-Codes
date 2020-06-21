# mini_proj_4
A restful api created using express and node.js to perform crud applications on a TODO book list... 

Step 1 : The main file to access the API is the app.js file
  a) it firstly imports all the built in node packages
  b) then middleware is defined to access posts.js in the routes directorry
  c) connection is established with the mongodb server using mongoose client.
  
  
    
Step 2 : set up the .env file to refer the database from



Step 3 : Set the schema  of the NoSql mongodb file in Post.js

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

This is the Schema we are following


Step 4 : Declare the GET, POST, PATCH and DELETE requestd for the TODO api in the posts.js file





1) GET (FIRST)


![](/images/get1.png)

        
        
        
        
        

2) GET BY ID


![](/images/get_by_id.png)








3) DELETE BY ID


![](/images/delete_by_id.png)









4) TO CONFIRM HERE'S THE GET AFTER THE DELETE REQUEST


![](/images/get_after_delete.png)









5) POST A NEW REQUEST AFTER THAT DELETE HAS BEEN MADE


![](/images/post.png)










6) TO CONFIRM HERE'S THE GET AFTER THE POST REQUEST


![](/images/get_after_post.png)












7) PATCH A REQUEST TO THE TODO
![](/images/patch.png)





