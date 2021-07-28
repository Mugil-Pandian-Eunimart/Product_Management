var productSchema = {
    type:'object',
    required:['id','name','price'],
    properties:{
        id:{
            type:'string',
            minLength:1,
            maxLength:3
        },
        name:{
            type:'string',
            minLength:3,
            maxLength:45
        },
        price:{
            type:'string',
            minLength:4,
            maxLength:10
        }
    }
}

module.exports = productSchema;