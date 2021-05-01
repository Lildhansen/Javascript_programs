function Question(q,a1,a2,a3,correctAnswer) {
    this.q = q;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.answers = [a1,a2,a3]
    this.correctAnswer = correctAnswer //from 1-3
    this.isCorrectAnswer = () => {return this.answers[correctAnswer-1]}
  }

//let questions = [Question("what is life?","no","yes","maybe",2),Question("what is red?","red","blue","yellow",0)];

exports.Question = Question


