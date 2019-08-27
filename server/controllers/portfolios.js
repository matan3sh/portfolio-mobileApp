const Portfolio = require('../models/portfolios');
const User = require('../models/users');

exports.getSecret = function (req, res) {
  return res.json({secret: 'I am secret Message'})
}

exports.getPortfolios = function(req, res) {
  const {category, location} = req.query;

  const findQuery = location ? Portfolio.find({ processedLocation: { $regex: '.*' + location + '.*' } })
                             : Portfolio.find({})
  findQuery
        .populate('category')
        .populate('joinedPeople')
        .populate('portfolioCreator')
        .limit(100)
        .sort({'createdAt': -1})
        .exec((errors, portfolios) => {
    if (errors) {
      return res.status(422).send({errors});
    }

    // WARNING: requires improvement, can decrease performance
    if (category) {
      portfolios = portfolios.filter(portfolio => {
        return portfolio.category.name === category
      })
    }

    return res.json(portfolios);
  });
}

getPortfolioByIdQuery = function(id, callback) {
  Portfolio.findById(id)
        .populate('portfolioCreator', 'name id avatar')
        .populate('category')
        .populate({path: 'joinedPeople',
           options: {limit: 5, sort: {username: -1}}})
        .exec(callback);
}

exports.getPortfolioById = function(req, res) {
  const {id} = req.params;

  getPortfolioByIdQuery(id, (errors, portfolio) => {
    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(portfolio);
  });
}

exports.createPortfolio = function(req, res) {
  const portfolioData = req.body;
  const user = req.user;

  const portfolio = new Portfolio(portfolioData);
  portfolio.portfolioCreator = user;
  portfolio.processedLocation = portfolio.location.toLowerCase().replace(/[\s,]+/g,'').trim()
  portfolio.status = 'active';

  meetportfolioup.save((errors, createdPortfolio) => {
    if (errors) {
      return res.status(422).send({errors});
    }

    User.populate(createdPortfolio, 'portfolioCreator', function (err) {
      return res.json(createdPortfolio._id);
    });
  });
}

exports.joinPortfolio = function (req, res) {
  const user = req.user;
  const {id} = req.params;

  getPortfolioByIdQuery(id, (errors, portfolio) => {
    if (errors) {
      return res.status(422).send({errors})
    }

    const userIndex = portfolio.joinedPeople.findIndex(p => p._id == user.id);
    if (userIndex != -1) {
      return res.status(422).send({errors: 'You are already member!'});
    }

    portfolio.joinedPeople.push(user);
    portfolio.joinedPeopleCount++;

    return Promise.all(
      [portfolio.save(),
      User.updateOne({ _id: user._id }, { $push: { joinedPortfolios: portfolio }})])
      .then(result => {
        return res.json(portfolio)
      })
      .catch(errors => res.status(422).send({errors}))
  });
}

exports.leavePortfolio = function (req, res) {
  const user = req.user;
  const {id} = req.params;

  getPortfolioByIdQuery(id, (errors, portfolio) => {
    if (errors) {
      return res.status(422).send({errors})
    }

    const userIndex = portfolio.joinedPeople.findIndex(p => p._id == user.id);
    if (userIndex == -1) {
      return res.status(422).send({errors: 'You are not member of this portfolio'});
    }

    portfolio.joinedPeople.splice(userIndex, 1);
    portfolio.joinedPeopleCount--;

    Promise.all(
      [Portfolio.updateOne({ _id: id }, { $pull: { joinedPeople: user._id }, $inc: {joinedPeopleCount: -1}}),
       User.updateOne({ _id: user._id }, { $pull: { joinedPortfolios: id }})])
      .then(result => {
        return res.json(portfolio)
      })
      .catch(errors => res.status(422).send({errors}))
  });
}

// We were just debugging in this lecture (:
exports.updatePortfolio = function (req, res) {
  const portfolioData = req.body
  const {id} = req.params
  const user = req.user;
  portfolioData.updatedAt = new Date()

  if (user._id === portfolioData.portfolioCreator._id) {
    Portfolio.findByIdAndUpdate(id, { $set: portfolioData}, { new: true })
          .populate('portfolioCreator', 'name id avatar')
          .populate('category')
          .exec((errors, updatedPortfolio) => {

      if (errors) {
        return res.status(422).send({errors})
      }

      return res.json(updatedPortfolio)
    })
  } else {
    return res.status(401).send({errors: {message: 'Not Authorized!'}})
  }
}











