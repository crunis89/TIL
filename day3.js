function getGrade (score){
    if(score === 100){
      return 'A+';  
    }  
      else if (score >= 90){
          return 'A';
      }
      else if (score === 89){
          return 'B+';
      }
      else if (score >= 80){
          return 'B';
      }
      else if (score >= 70){
          return 'c';
      }
      else if (score <= 60){
        return 'D';
    }
    }   
  const grade = getGrade(55);
  console.log(grade);