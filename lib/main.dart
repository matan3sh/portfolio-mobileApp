import 'package:flutter/material.dart';
import 'package:portfolio_app/src/screens/counter_home_screen.dart';
import 'package:portfolio_app/src/screens/post_screen.dart';
import 'package:portfolio_app/src/screens/project_detail_screen.dart';

void main() => runApp(PortfolioApp());

class PortfolioApp extends StatelessWidget {
  final String appTitle = 'Matan Shaviro Portfolio';

  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.blue),
      // home: CounterHomeScreen(title: appTitle),
      home: PostScreen(),
      routes: {
        ProjectDetailScreen.route: (context) => ProjectDetailScreen()
      },
    );
  }
}

