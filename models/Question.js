const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  options: [
    {
      text: {
        type: String,
        required: true
      },
      isCorrect: {
        type: Boolean,
        default: false
      }
    }
  ],
  explanation: {
    type: String
  }
});

module.exports = mongoose.model('Question', QuestionSchema);
