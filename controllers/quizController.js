const Quiz = require('../models/Quiz');
const Question = require('../models/Question');

exports.startQuiz = async (req, res) => {
  const { quizId } = req.body;

  try {
    const quiz = await Quiz.findById(quizId);
    const questions = await Question.find({ quiz: quizId }).select('-options.isCorrect');
    res.json({ quiz, questions });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.submitQuiz = async (req, res) => {
  const { quizId, answers } = req.body;

  try {
    const questions = await Question.find({ quiz: quizId });
    let correctAnswers = 0;
    let incorrectAnswers = [];

    questions.forEach(question => {
      const userAnswer = answers.find(answer => answer.questionId === question._id.toString());
      const correctOption = question.options.find(option => option.isCorrect);

      if (userAnswer && userAnswer.optionId === correctOption._id.toString()) {
        correctAnswers++;
      } else {
        incorrectAnswers.push({
          question: question.questionText,
          correctAnswer: correctOption.text,
          userAnswer: userAnswer ? userAnswer.optionText : 'No Answer',
          explanation: question.explanation
        });
      }
    });

    res.json({
      score: correctAnswers,
      incorrectAnswers
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
