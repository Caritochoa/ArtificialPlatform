

const schema = new Schema({
    ObjectId: Number,
    name: String, 
    email: String, 
    children: [child] 
});

module.exports = {
    schema
}