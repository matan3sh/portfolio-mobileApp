import 'package:flutter/material.dart';
import 'package:portfolio_app/src/models/portfolio.dart';
import 'package:portfolio_app/src/screens/portfolio_detail_screen.dart';
import 'package:portfolio_app/src/services/portfolio_api_service.dart';

class PortfolioDetailArguments {
  final String id;

  PortfolioDetailArguments({this.id});
}

class PortfolioHomeScreen extends StatefulWidget {
  final PortfolioApiService _api = PortfolioApiService();

  @override
  State<StatefulWidget> createState() => PortfolioHomeScreenState();
}

class PortfolioHomeScreenState extends State<PortfolioHomeScreen> {
  List<Portfolio> portfolios = [];

  @override
  initState() {
    super.initState();
    _fetchPortfolios();
  }

  _fetchPortfolios() async {
    final portfolios = await widget._api.fetchPortfolios();
    setState(() {
      this.portfolios = portfolios;
    });
  }

  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          _PortfolioTitle(),
          _PortfolioList(portfolios: portfolios)
        ],
      ),
      appBar: AppBar(
        title: Text('Home')
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {},
      ),
    );
  }
}

class _PortfolioTitle extends StatelessWidget {
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.centerLeft,
      padding: EdgeInsets.all(20.0),
      child: Text('Featured Portfolio', style: TextStyle(fontSize: 22.0, fontWeight: FontWeight.bold)),
    );
  }
}

class _PortfolioCard extends StatelessWidget {
  final Portfolio portfolio;

  _PortfolioCard({@required this.portfolio});

  Widget build(BuildContext context) {
    return Card(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          ListTile(
            leading: CircleAvatar(
              radius: 25.0,
              backgroundImage: NetworkImage(portfolio.image),
            ),
            title: Text(portfolio.title),
            subtitle: Text(portfolio.description)
          ),
          ButtonTheme.bar(
            child: ButtonBar(
              children: <Widget>[
                FlatButton(
                  child: Text('Read More'),
                  onPressed: () {
                    Navigator.pushNamed(context, PortfolioDetailScreen.route, arguments: PortfolioDetailArguments(id: portfolio.id));
                  }
                ),
                FlatButton(
                  child: Text('Favorite'),
                  onPressed: () {},
                )
              ],
            ),
          )
        ],
      )
    );
  }
}

class _PortfolioList extends StatelessWidget {
  final List<Portfolio> portfolios ;

  _PortfolioList({@required this.portfolios});

  Widget build(BuildContext context){
    return Expanded(
      child: ListView.builder(
        itemCount: portfolios.length * 2,
        itemBuilder: (BuildContext context, int i) {
          if (i.isOdd) return Divider();
          final index = i ~/2;
          
          return _PortfolioCard(portfolio: portfolios[index]);
        },
      )
    );
  }
}