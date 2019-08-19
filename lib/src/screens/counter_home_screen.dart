import 'package:flutter/material.dart';
import 'package:portfolio_app/src/widgets/bottom_navigation.dart';

class CounterHomeScreen extends StatefulWidget {
  final String _title;
  CounterHomeScreen({String title}): _title=title;

  @override
  _CounterHomeScreenState createState() => _CounterHomeScreenState();
}

class _CounterHomeScreenState extends State<CounterHomeScreen> {
  int _counter = 0;

  _increment(){
    setState(() {
      _counter++;
    });
  }

  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Welcome to ${widget._title}, lets increment numbers!', 
                textDirection: TextDirection.ltr,
                style: TextStyle(fontSize: 12.0)
              ),
              Text(
                'Counter: $_counter', 
                textDirection: TextDirection.ltr,
                style: TextStyle(fontSize: 30.0)
              ),
              RaisedButton(
                child: Text('Go To Detail'),
                onPressed: () => Navigator.pushNamed(context, '/projectDetail'),
              )
            ],
          )
        ),
        bottomNavigationBar: BottomNavigation(),
        floatingActionButton: FloatingActionButton(
          onPressed: _increment,
          tooltip: 'Increment',
          child: Icon(Icons.add)          
        ),
        appBar: AppBar(title: Text(widget._title)),
      );
  }
}

