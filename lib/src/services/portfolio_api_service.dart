import 'dart:convert';
import 'package:http/http.dart' as http;
import 'dart:io' show Platform;
import 'package:portfolio_app/src/models/portfolio.dart';

class PortfolioApiService {
  final String url = Platform.isIOS ? 'http://localhost:3001/api/v1' : 'http://10.0.2.2:3001/api/v1';
  static final PortfolioApiService _singleton = PortfolioApiService._internal();

  factory PortfolioApiService() {
    return _singleton;
  }
  PortfolioApiService._internal();

  Future<List<Portfolio>> fetchPortfolios() async {
    final res = await http.get('$url/portfolios');

    final List parsedPortfolios = json.decode(res.body);
    return parsedPortfolios.map((val) => Portfolio.fromJSON(val)).toList();
  }

  Future<Portfolio> fetchPortfolioById(String id) async {
    final res = await http.get('$url/portfolios/$id');
    final parsedPortfolio = json.decode(res.body);
    return Portfolio.fromJSON(parsedPortfolio);
  }
}