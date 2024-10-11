class Hospital {
    constructor(params)
    {
        this.doctors = params.doctors
        this.patients = params.patients
    }
    showDoctors(age){
        let filtered = this.doctors.filter((doc)=> doc.age == 23)
        
        return filtered
    }
    showPatients(){
        return this.patients
    }
}
class SubClass extends Hospital{
    constructor(params){
        super(params)
    }
    Doctors() {
console.log(this)
    }
}
const doctors = [
    {
        name :"shuruthi",
        age:23,
        specialization:"ortho"
    },
   {
    name :"pooja",
        age:20,
        specialization :"endo"
    }

]

const patients = [{
    deivanai :{
        diseases : "Mental health problem"
    },
    velraj :{
        diseases : "Irritation disorder"
    }
}]

// const hospital = new Hospital({doctors,patients})
// console.log(hospital.showDoctors(23))
// console.log(hospital.showPatients())
const subclass = new SubClass({doctors,patients})
// subclass.Doctors()
console.log(subclass.showDoctors(23))