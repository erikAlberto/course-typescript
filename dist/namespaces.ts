var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("ERIK");
    //console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
/// <reference path="namespaces.ts" />
var myOtherUser = new DatabaseEntity.User("erik 19");
console.log(myOtherUser);
