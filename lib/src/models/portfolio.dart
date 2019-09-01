import 'package:portfolio_app/src/models/category.dart';

class Portfolio {
  final String id;
  // final String processedLocation;
  // final String location;
  final String title;
  final String image;
  final String img1;
  final String img2;
  final String img3;
  final String img4;
  final String description;
  final String shortInfo;
  final Category category;
  final String startDate;
  // final String timeFrom;
  // final String timeTo;
  final String createdAt;
  final String updatedAt;
  int joinedPeopleCount;
  // final User meetupCreator;
  // final List<User> joinedPeople;

  Portfolio.fromJSON(Map<String, dynamic> parsedJson)
    : this.id = parsedJson['_id'],
      // this.location = parsedJson['location'] ?? '',
      // this.processedLocation = parsedJson['processedLocation'] ?? '',
      this.title = parsedJson['title'] ?? '',
      this.image = parsedJson['image'] ?? '',
      this.img1 = parsedJson['img1'] ?? '',
      this.img2 = parsedJson['img2'] ?? '',
      this.img3 = parsedJson['img3'] ?? '',
      this.img4 = parsedJson['img4'] ?? '',
      this.description = parsedJson['description'] ?? '',
      this.shortInfo = parsedJson['shortInfo'] ?? '',
      this.startDate = parsedJson['startDate'] ?? '',
      // this.timeFrom = parsedJson['timeFrom'] ?? '',
      // this.timeTo = parsedJson['timeTo'] ?? '',
      this.joinedPeopleCount = parsedJson['joinedPeopleCount'] ?? 0,
      this.createdAt = parsedJson['createdAt'] ?? '',
      this.updatedAt = parsedJson['updatedAt'] ?? '',
      this.category = Category.fromJSON(parsedJson['category']);
      // this.meetupCreator =
      // this.joinedPeople =
}