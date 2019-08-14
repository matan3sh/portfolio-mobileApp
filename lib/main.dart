import 'package:flutter/material.dart';

void main() => runApp(PortfolioApp());

class PortfolioApp extends StatelessWidget {
  final String appTitle = 'Matan Shaviro Portfolio';

  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.blue),
      home: Scaffold(
        body: Center(
          child:
              Text(
                'Welcome to $appTitle!', 
                textDirection: TextDirection.ltr
          ),
        ),
        appBar: AppBar(title: Text('$appTitle')),
      ),
    );
  }
}
