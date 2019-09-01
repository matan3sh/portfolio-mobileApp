const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  // location: { type: String, required: true },
  // processedLocation: String,
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  shortInfo: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  startDate: { type: Date, required: true },
  // timeFrom: { type: String, required: true },
  // timeTo: { type: String, required: true },
  status: String,
  joinedPeopleCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  portfolioCreator: { type: Schema.Types.ObjectId, ref: 'User' },
  joinedPeople: [{type: Schema.Types.ObjectId, ref: 'User'}],
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  img3: { type: String, required: true },
  img4: { type: String, required: true }
});

module.exports = mongoose.model('Portfolio', portfolioSchema );
