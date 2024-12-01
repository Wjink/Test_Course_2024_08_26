import Runner from "./Runner.js";

export default class Marathon {
    #begikuSkaicius;
    #IkategorijosBegikai;
    #IIkategorijosBegikai;
    #IIIkategorijosBegikai;

    constructor() {
        this.#begikuSkaicius = 0;
        this.#IkategorijosBegikai = [];
        this.#IIkategorijosBegikai = [];
        this.#IIIkategorijosBegikai = [];
    };

    get begikuSkaicius(){
        return (
            this.#IkategorijosBegikai +
            this.#IIkategorijosBegikai +
            this.#IIIkategorijosBegikai
        );
    }

    get IkategorijosBegikai(){
        return this.#IkategorijosBegikai;
    }

    get IIkategorijosBegikai(){
        return this.#IIkategorijosBegikai;
    }

    get IIIkategorijosBegikai(){
        return this.#IIIkategorijosBegikai;
    }


    #priskirtBigukuiKategorija(runner){
        if(runner.weight <= 60)
        {
            this.#IkategorijosBegikai.push(runner);
            return "I";
        }
        
        elseif(runner.weight > 60 && runner.weight <= 90)
        {
            this.#IIkategorijosBegikai.push(runner);
            return "II";
        }

        elseif(runner.weight > 90)
        {
            this.#IIIkategorijosBegikai.push(runner);
            return "III";
        }  
    }

    pridetiBegika(runner){
        // console.log(runner);
        // console.log(runner instanceof Runner);
        if(!(runner instanceof Runner)){
            console.error("Pridedamas begikas privalo buti objektas sudarytas is klases Runner");
            return;
        }
    }

}



