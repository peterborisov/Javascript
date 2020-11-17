class Student extends Person {
    constructor(firstName, lastName, id, testScores){
        super(firstName, lastName, id);
        this.testScores = testScores;
    }
    
    calculate(){
      let sum = this.testScores.reduce((a, b) => a + b);
      let finalSum = sum / this.testScores.length; 
      let grade = '';
       finalSum >= 90 && finalSum <= 100 ? grade = 'O' :
       finalSum >= 80 && finalSum < 90 ? grade = 'E' : 
       finalSum >= 70 && finalSum < 80 ? grade = 'A' : 
       finalSum >= 55 && finalSum < 70 ? grade = 'P' : 
       finalSum >= 40 && finalSum < 55 ? grade = 'D' :
       finalSum < 40 ? grade = 'T' : '';
       return grade;
    }
}