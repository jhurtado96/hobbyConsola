export class Person{
    //Developer,tester,manager y director
   private name:string
   private nationality:string
   private profession:string
   private experienceYears:number

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getNationality(): string {
        return this.nationality;
    }

    public setNationality(nationality: string): void {
        this.nationality = nationality;
    }

    public getProfession(): string {
        return this.profession;
    }

    public setProfession(profession: string): void {
        this.profession = profession;
    }

    public getExperienceYears(): number {
        return this.experienceYears;
    }

    public setExperienceYears(experienceYears: number): void {
        this.experienceYears = experienceYears;
    }


    constructor(name:string,nationality:string,profession:string,experienceYears:number){
        this.name=name
        this.nationality=nationality
        this.profession=profession
        this.experienceYears=experienceYears
    }

    mostrarDatos(){
        console.log("*******************")
        console.log("Name: " + this.name)
        console.log("Natioality: " + this.name)
        console.log("Profession: " + this.name)
        console.log("Experience Years: " + this.name)
        console.log("*******************")
    }

    devolverDatos():string{
        return this.name +" "+ this.nationality+" "+this.profession+" "+this.experienceYears
    }

    igualPersona(persona:Person):Boolean{
        let bool = false
        if(this.name == persona.getName()){
            if(this.nationality==persona.getNationality()){
                if(this.profession==persona.getProfession()){
                    if(this.experienceYears==persona.getExperienceYears()){
                        bool = true
                    }
                }
            }
        }
        return bool

    }

}

