import 'package:flutter/material.dart';
import 'package:portfolio_app/src/widgets/bottom_navigation.dart';

class PortfolioDetailScreen extends StatelessWidget {
  static final String route = '/portfolioDetail';
  final String portfolioId;

  PortfolioDetailScreen({this.portfolioId});

  Widget build(BuildContext context) {
    return Scaffold(
      body: Text(portfolioId),
      appBar: AppBar(title: Text('Project Detail')),
      bottomNavigationBar: BottomNavigation(),
    );
  }
}