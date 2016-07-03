//var data = [{id : 1, email : "test@haha.com", password : "1", firstName : "Yuzhen", lastName : "Liu"}];
// config email address
function User(params){
	this.email = params.email;
	this.password = params.password;
	this.firstName = params.firstName;
	this.lastName = params.lastName;
}

function createUser(params){
	return new User(params);
}

User.prototype.findAll = function(callback){
	callback(null, this.data);
}


User.prototype.findById = function(id, callback){

}








