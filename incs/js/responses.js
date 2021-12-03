class Resp  {
    constructor(name, pronoun, bonus){
        this.name = name;
        this.pronoun = pronoun;
        this.bonus = bonus;
    }
    userResp = {}
    addResp = (key, val)=>{
     return this.userResp[key] = val;
    }
}

export {Resp};