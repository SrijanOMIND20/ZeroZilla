ZeroZilla Node.js App Documentation

Base URL: ec2-52-23-196-136.compute-1.amazonaws.com:4000

Request Type: GET

Response: Status Code 200
{
    "message": "API HIT"
}

Register for testing API:

URL: ec2-52-23-196-136.compute-1.amazonaws.com:4000/api/Register

REQUEST TYPE: POST

Example Body:

{
    "username":"Srijanb97",
    "email": "srijanb97@yahoo.com",
    "password":"Srijan@1234"
}
 
Response Status Code 201:
{
    "message": "Registration done!",
    "data": {
        "Username": "Srijanb97"
    }
}
 
If any of the fields are missing:
Example email not provided (error code 400)
 
{
    "message": "Registration Unsuccessful",
    "error": {
        "errors": {
            "Email": {
                "name": "ValidatorError",
                "message": "Path `Email` is required.",
                "properties": {
                    "message": "Path `Email` is required.",
                    "type": "required",
                    "path": "Email"
                },
                "kind": "required",
                "path": "Email"
            }
        },
        "_message": "User validation failed",
        "name": "ValidationError",
        "message": "User validation failed: Email: Path `Email` is required."
    }
}
 

Login for Testing API:

URL: ec2-52-23-196-136.compute-1.amazonaws.com:4000/api/Login

Body:

{
    "username":"Srijanb97",
    "password":"Srijan@1234"
}
 
Response: Status Code 200
{
    "message": "Successful Login!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNyaWphbmI5NyIsIl9pZCI6IjYyZTRkZWRiYjcwM2JjMTUyMTlhYmVjNSIsImlhdCI6MTY1OTE2NjY0NCwiZXhwIjoxNjU5MTcwMjQ0fQ.9vURCUoa8wwEjWP0g7Qv7bTpjGWSGAS1T702IO3V4lo",
    "expireIn": 3600,
    "username": "Srijanb97",
    "email": "srijanb97@yahoo.com"
}
If not registered: 
Body:
{
    "username":"Jontyb97",
    "password":"Srijan@1234"
}
 
Response: Status Code 400
 
{
    "message": "Username not found",
    "error": null
}
API 1:

1st API should create an agency and client in single request
Request Type : Post
 
Header Required: Yes
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNyaWphbmI5NyIsIl9pZCI6IjYyZTRkZWRiYjcwM2JjMTUyMTlhYmVjNSIsImlhdCI6MTY1OTE2NjY0NCwiZXhwIjoxNjU5MTcwMjQ0fQ.9vURCUoa8wwEjWP0g7Qv7bTpjGWSGAS1T702IO3V4lo

Body:
{
    "Agc":{
        "AgencyId":"62e36b7e3cf105fe51b05174",
        "Name":"Srijan",
        "Address1":"Howrah bhavan",
        "Address2":"Howrah",
        "State":"WB",
        "City":"Howrah",
        "PhoneNumber":7278854993
    },
    "Clt":{
        "ClientId":"CL00010",
        "AgencyId":"62e36b7e3cf105fe51b05374",
        "Name":"Smith",
        "Email":"Smith@xyz.com",
        "PhoneNumber":8240386665,
        "TotalBill":3000
    }
}
Response: Status Code 201
{
    "success": "True"
}
 
If Agency is not given: Status Code 400
{
    "success": false,
    "err": "Agency validation failed: PhoneNumber: Path `PhoneNumber` is required., City: Path `City` is required., State: Path `State` is required., Address1: Path `Address1` is required., Name: Path `Name` is required., AgencyId: Path `AgencyId` is required."
}
 
2nd API should update a client detail.
URL: 
ec2-52-23-196-136.compute-1.amazonaws.com:4000/api/update-client?id=
Request Type: PATCH 
Header Required: Yes
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNyaWphbmI5NyIsIl9pZCI6IjYyZTRkZWRiYjcwM2JjMTUyMTlhYmVjNSIsImlhdCI6MTY1OTE2NjY0NCwiZXhwIjoxNjU5MTcwMjQ0fQ.9vURCUoa8wwEjWP0g7Qv7bTpjGWSGAS1T702IO3V4lo
 
Body: 
{
    "Name":"Smith Jones",
    "Bill": 5000
}
Response: 200
{
    "message": "Successful",
    "data": {
        "_id": "62e4e1c7b703bc15219abecf",
        "ClientId": "CL00010",
        "AgencyId": "62e36b7e3cf105fe51b05374",
        "Name": "Smith Jones",
        "Email": "Smith@xyz.com",
        "PhoneNumber": 8240386665,
        "TotalBill": 5000,
        "__v": 0
    }
}
 
If empty body:
Status code : 204 No content
 
3rd API should return name of agency along with client details which has top client(s) with maximum total bill, below fields should be part of response.
        AgencyName, ClientName, TotalBill
URL:
ec2-52-23-196-136.compute-1.amazonaws.com:4000/api/get-max-bill
Header Required: Yes
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNyaWphbmI5NyIsIl9pZCI6IjYyZTRkZWRiYjcwM2JjMTUyMTlhYmVjNSIsImlhdCI6MTY1OTE2NjY0NCwiZXhwIjoxNjU5MTcwMjQ0fQ.9vURCUoa8wwEjWP0g7Qv7bTpjGWSGAS1T702IO3V4lo
 
Request Type: GET
 
Response: 200
[
    {
        "_id": "62e37250d1f4ef20ec71984f",
        "AgencyId": {
            "_id": "62e36b7e3cf105fe51b05374",
            "Name": "B"
        },
        "Name": "Jack",
        "TotalBill": 200000
    }
]
 
Note:
3rd Query refers to the _id of the Agency collection and not from the id of AgencyId of Agency and populates accordingly.
Passwords during registration are hashed using bcrypt
MongoDB Atlas is being used as my cloud database.
