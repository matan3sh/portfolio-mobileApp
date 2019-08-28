import 'package:flutter/material.dart';
import 'package:portfolio_app/src/models/portfolio.dart';
import 'package:portfolio_app/src/services/portfolio_api_service.dart';
import 'package:portfolio_app/src/widgets/bottom_navigation.dart';

class PortfolioDetailScreen extends StatefulWidget {
  static final String route = '/portfolioDetail';
  final String portfolioId;
  final PortfolioApiService api = PortfolioApiService();

  PortfolioDetailScreen({this.portfolioId});

  @override
  PortfolioDetailScreenState createState() => PortfolioDetailScreenState();
}

class PortfolioDetailScreenState extends State<PortfolioDetailScreen> {
  Portfolio portfolio;

  initState() {
    super.initState();
    _fetchPortfolio();
  }

  _fetchPortfolio() async {
    final portfolio = await widget.api.fetchPortfolioById(widget.portfolioId);
    setState(() => this.portfolio = portfolio);
  }

  Widget build(BuildContext context) {
    return Scaffold(
      body: portfolio != null
          ? Column(
              children: <Widget>[HeaderSection(portfolio: portfolio)],
            )
          : Container(width: 0, height: 0),
      appBar: AppBar(title: Text('Project Detail')),
      bottomNavigationBar: BottomNavigation(),
    );
  }
}

class HeaderSection extends StatelessWidget {
  final Portfolio portfolio;

  HeaderSection({this.portfolio});

  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    return Stack(
      alignment: AlignmentDirectional.bottomStart,
      children: <Widget>[
        Image.network(portfolio.image,
            width: width, height: 240.0, fit: BoxFit.cover),
        Container(
            width: width,
            decoration: BoxDecoration(color: Colors.black.withOpacity(0.3)),
            child: Padding(
              padding: EdgeInsets.only(top: 20.0, bottom: 20.0),
              child: ListTile(
              leading: CircleAvatar(
                radius: 30.0,
                backgroundImage: NetworkImage(
                    'https://cdn1.vectorstock.com/i/thumb-large/82/55/anonymous-user-circle-icon-vector-18958255.jpg'),
              ),
              title: Text(portfolio.title,
                  style: TextStyle(
                      fontSize: 20.0,
                      fontWeight: FontWeight.bold,
                      color: Colors.white)),
              subtitle: Text(portfolio.shortInfo,
                  style: TextStyle(
                      fontSize: 17.0,
                      fontWeight: FontWeight.bold,
                      color: Colors.white)),
            )))
      ],
    );
  }
}
