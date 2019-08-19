import 'package:flutter/material.dart';
import 'package:portfolio_app/src/widgets/bottom_navigation.dart';

class ProjectDetailScreen extends StatelessWidget {
  static final String route = '/projectDetail';

  Widget build(BuildContext context) {
    return Scaffold(
      body: Text('I am Project Detail Screen'),
      appBar: AppBar(title: Text('Project Detail')),
      bottomNavigationBar: BottomNavigation(),
    );
  }
}