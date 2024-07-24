const Quiz = require('../models/Quiz');
const Question = require('../models/Question');

exports.createQuiz = async (req, res) => {
  const { name } = req.body;

  try {
    const quiz = new Quiz({ name });
    await quiz.save();
    res.json(quiz);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addQuestion = async (req, res) => {
  const { quizId, questionText, options, explanation } = req.body;

  try {
    const question = new Question({
      quiz: quizId,
      questionText,
      options,
      explanation
    });
    await question.save();
    res.json(question);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getResults = async (req, res) => {
  // Implement logic to fetch quiz results and user answers
};
