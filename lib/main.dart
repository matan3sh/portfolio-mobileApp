import 'package:flutter/material.dart';
import 'package:portfolio_app/src/screens/portfolio_home_screen.dart';
import 'package:portfolio_app/src/screens/portfolio_detail_screen.dart';

void main() => runApp(PortfolioApp());

class PortfolioApp extends StatelessWidget {
  final String appTitle = 'Matan Shaviro Portfolio';

  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.blue),
      // home: CounterHomeScreen(title: appTitle),
      home: PortfolioHomeScreen(),
      // routes: {
      //   PortfolioDetailScreen.route: (context) => PortfolioDetailScreen()
      // },
      onGenerateRoute: (RouteSettings settings) {
        if (settings.name == PortfolioDetailScreen.route){
          final PortfolioDetailArguments arguments = settings.arguments;
          
          return MaterialPageRoute(
            builder: (contex) => PortfolioDetailScreen(portfolioId: arguments.id)
          );
        }
      }
    );
  }
}

