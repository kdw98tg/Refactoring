const organiztion={name:"애크미 구스베리", country:"GB"};

result += `<h1>${organiztion.name}</h1>`;
result += `<h2>${organiztion.country}</h2>`;
/////////////////////////////////////////////////////////////////
class Organization{
    constructor(data){
        this.name = data.name;
        this.country = data.country;
    }
    set name(value){
        this._name = value;
    }
    get name(){
        return this._name;
    }
    get country(){
        return this._country;
    }
    set country(value){
        this._country = value;
    }
}

const organization = new Organization({name:"애크미 구스베리", country:"GB"});

result += `<h1>${organization.name}</h1>`;
result += `<h2>${organization.country}</h2>`;



