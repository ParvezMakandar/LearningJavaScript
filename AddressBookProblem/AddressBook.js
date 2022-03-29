console.log("Welcome to The Address Book JS Program ") 
class Contact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;
    

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
}

let contact1 = new Contact("Parvez", "Makandar", "AzamNagar", "Belgaum", "Karnataka",590010,8147340746,"parvezh@gmail.com");
console.log(contact1)