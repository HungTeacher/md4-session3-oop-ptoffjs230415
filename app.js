// @ts-ignore
// @ts-ignore
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var user = {
    firstName: "Hung",
    lastName: "Nguyen"
};
console.log(user.firstName);
/*Type annotation*/
/*string*/
var color = 'red';
console.log("color: ", color);
var func = function (str) {
    return str;
};
var result = func("hung");
console.log("result: ", result);
/*Object*/
var person = { name: "Tony" };
console.log("person: ", person);
/*Array*/
var nums = [1, 2, 3, 4];
console.log("nums: ", nums);
var list = [1, "a", true, {}];
console.log("list any: ", list);
/*Problem solving patterns - Algorithms*/
/*
Example: -- Viết một hàm nhận vào một chuỗi bất kì, đếm số ký tự xuất hiện trong chuỗi đó
"hello" --> {"h": 1, "e": 1, "l": 2, "o": 1}
"aaa" --> {"a": 3}
"" --> null, undefined
*/
/*
* Giải quyết vấn đề - Xé nhỏ vấn đề
* tạo ra 1 object để trả về khi kết thúc logic
* Duyệt qua từng ký tự trong chuỗi
*   Nếu ký tự đó là số hoặc chuỗi mà không nằm trong object
*   --> Thêm ký tự đó làm key của object và gán giá trị = 1
*  Nếu ký tự đó hoặc chuỗi đã nằm trong object
*  --> tăng giá trị của key đó lên 1
*  nếu ký tự dó la khoảng trắng
*  --> trả về null hoặc undefined
* */
/*type Count = { [key: string]: number};*/
function charCount(str) {
    var count = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        //Nếu ký tự đã tồn tại trong count, tăng giá trị của nó lên 1
        if (count[char]) {
            count[char]++;
        }
        else {
            //Nếu ký tự chưa tồn tại, thêm vào count với giá trị là 1
            count[char] = 1;
        }
    }
    return count;
}
var countChar1 = charCount("hello");
console.log("countChar1: ", countChar1);
/*Type Tuple*/
var roles = ["admin", "user"];
console.log("roles", roles);
/*Type Enum*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MOD"] = 1] = "MOD";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
var enumVar = {
    name: "Minh Hung",
    age: 18,
    role: 0
};
console.log("enumVar: ", enumVar);
/*Type Union*/
var unionType = 10;
console.log("unionType: ", unionType);
var u1 = { name: 'M1', age: 18 };
console.log("type alias with object: ", u1);
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combine1 = combine(10, 20);
console.log("example union type number: ", combine1);
var combine2 = combine("Hello ", "Cac ban");
console.log("example union type string: ", combine2);
/*Function Type*/
function add(a, b, cb) {
    var result = a + b;
    cb(result);
}
var addResult = add(10, 20, function (result) { return console.log(result); });
console.log("example with function type: ", addResult);
var users = [
    {
        id: 1,
        first_name: "Eamon",
        last_name: "Handoff",
        email: "eharhoff0@imageshack.us",
        gender: "Male",
        age: 76,
        salary: 18888,
    },
    {
        id: 2,
        first_name: "Tom",
        last_name: "Cruise",
        email: "tomcruise@issuu.com",
        gender: "Male",
        age: 38,
        salary: 15018,
    },
    {
        id: 3,
        first_name: "Lynett",
        last_name: "Twinberrow",
        email: "ltwinberrow2@gov.uk",
        gender: "Female",
        age: 99,
        salary: 13343,
    }
];
/*
Viết một hàm trả về toàn bộ user trong mảng users thoả mãn điều kiện giới tính là nam và tuổi nhỏ hơn 40
*/
/*Khai báo mảng chứa first_name và last_name*/
var userNames = [];
/*Duyệt qua mảng users và lấy user_name, last_name của mỗi user và đẩy vào trong mảng userNames*/
users.forEach(function (user) {
    var first_name = user.first_name, last_name = user.last_name;
    userNames.push({ first_name: first_name, last_name: last_name });
});
console.log("mảng userNames sau khi được push: ", userNames);
function getMaleUsersUnder40(users) {
    return users.filter(function (user) { return user.gender === "Male" && user.age < 40; });
}
var maleUsersUnder40 = getMaleUsersUnder40(users);
console.log("list males under 40", maleUsersUnder40);
/*
Viết một hàm trả về toàn bộ tên đầy đủ của các user (first_name + last_name) trong mảng users
*/
function getFullNameUsers(users) {
    return users.map(function (user) { return "".concat(user.first_name, " ").concat(user.last_name); });
}
var fullNameUserArr = getFullNameUsers(users);
console.log("list fullname of users array: ", fullNameUserArr);
/*
Viết một hàm trả về một mảng mới vẫn chứa toàn bộ user trong mảng users
nhưng key của các phần tử trong mảng phải được viết dưới dạng camelCase
first_name => firstName
last_name => lastName
*/
/*function convertToCamelCase(users: Users): Users {
    const camelCaseUsers: Users = users.map(user => {
        const camelCaseUserArray = {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            gender: user.gender,
            age: user.age,
            salary: user.salary
        }
        return camelCaseUserArray
    })
    return camelCaseUsers;
}*/
/*
const camelCaseUserArray = convertToCamelCase(users)
console.log("users key convert to camelCase: ", camelCaseUserArray)
*/
/*
Viết một hàm trả về một mảng mới gồm các phần tử trong mảng users với first_name đã được
 sắp xếp theo thứ tự tăng dần trong bảng chữ cái*/
function sortUserByFirstName(users) {
    var sortedUsers = __spreadArray([], users, true);
    sortedUsers.sort(function (a, b) { return a.first_name.localeCompare(b.first_name); });
    return sortedUsers;
}
var sortedUserbyFirstName = sortUserByFirstName(users);
console.log("list first name of users sorted: ", sortedUserbyFirstName);
