import 'package:flutter/material.dart';
import 'package:portfolio_app/src/models/portfolio.dart';
import 'package:portfolio_app/src/services/portfolio_api_service.dart';
import 'package:portfolio_app/src/widgets/bottom_navigation.dart';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:video_player/video_player.dart';

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
          ? ListView(
              children: <Widget>[
                HeaderSection(portfolio),
                AdditionalInfoSection(portfolio),
                Divider(),
                TitleSection(portfolio),
                Padding(
                    padding:
                        EdgeInsets.only(left: 20.0, right: 20.0, bottom: 20.0),
                    child: Align(
                        alignment: Alignment.centerLeft,
                        child: Text(portfolio.description))),
                ImagesCarousel(portfolio),
                AspectRatio(
                  aspectRatio: 3.2,
                  child: VideoPlayerApp()
                )
              ],
            )
          : Container(width: 0, height: 0),
      appBar: AppBar(title: Text('Project Detail')),
      bottomNavigationBar: BottomNavigation(),
    );
  }
}

class TitleSection extends StatelessWidget {
  final Portfolio portfolio;

  TitleSection(this.portfolio);

  Widget build(BuildContext context) {
    Color color = Theme.of(context).primaryColor;
    return Padding(
        padding: EdgeInsets.all(30.0),
        child: Row(
          children: <Widget>[
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text(
                    portfolio.title,
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  Text(portfolio.shortInfo,
                      style: TextStyle(color: Colors.grey[500]))
                ],
              ),
            ),
            Icon(Icons.people, color: color),
            Text('${portfolio.joinedPeopleCount} People')
          ],
        ));
  }
}

class AdditionalInfoSection extends StatelessWidget {
  final Portfolio portfolio;

  AdditionalInfoSection(this.portfolio);

  String _capitilize(String word) {
    if (word != null && word.isNotEmpty) {
      return word[0].toUpperCase() + word.substring(1);
    }
    return '';
  }

  Widget _buildColumn(String label, String text, Color color) {
    return Padding(
      padding: EdgeInsets.only(top: 12.0),
      child: Column(
        children: <Widget>[
          Text(label,
              style: TextStyle(
                  fontSize: 13.0, fontWeight: FontWeight.w400, color: color)),
          Text(_capitilize(text),
              style: TextStyle(
                  fontSize: 25.0, fontWeight: FontWeight.w500, color: color))
        ],
      ),
    );
  }

  Widget build(BuildContext context) {
    Color color = Theme.of(context).primaryColor;
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: <Widget>[
        _buildColumn('CATEGORY', portfolio.category.name, color),
      ],
    );
  }
}

class HeaderSection extends StatelessWidget {
  final Portfolio portfolio;

  HeaderSection(this.portfolio);

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

class ImagesCarousel extends StatelessWidget {
  final Portfolio portfolio;
  final List<String> imgList = [];

  ImagesCarousel(this.portfolio) {
    imgList.add(portfolio.img1);
    imgList.add(portfolio.img2);
    imgList.add(portfolio.img3);
    imgList.add(portfolio.img4);
  }

  Widget build(BuildContext context) {
    return CarouselSlider(
      height: 375.0,
      aspectRatio: 16 / 9,
      viewportFraction: 0.8,
      initialPage: 0,
      enableInfiniteScroll: true,
      reverse: false,
      autoPlay: true,
      autoPlayInterval: Duration(seconds: 3),
      autoPlayAnimationDuration: Duration(milliseconds: 800),
      pauseAutoPlayOnTouch: Duration(seconds: 10),
      enlargeCenterPage: true,
      scrollDirection: Axis.horizontal,
      items: imgList.map(
        (url) {
          return Container(
            margin: EdgeInsets.all(5.0),
            child: ClipRRect(
              borderRadius: BorderRadius.all(Radius.circular(5.0)),
              child: Image.network(
                url,
                fit: BoxFit.cover,
                width: 1250.0,
              ),
            ),
          );
        },
      ).toList(),
    );
  }
}

class VideoPlayerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Video Player Demo',
      home: VideoPlayerScreen(),
    );
  }
}

class VideoPlayerScreen extends StatefulWidget {
  VideoPlayerScreen({Key key}) : super(key: key);

  @override
  _VideoPlayerScreenState createState() => _VideoPlayerScreenState();
}

class _VideoPlayerScreenState extends State<VideoPlayerScreen> {
  VideoPlayerController _controller;
  Future<void> _initializeVideoPlayerFuture;

  @override
  void initState() {
    // Create and store the VideoPlayerController. The VideoPlayerController
    // offers several different constructors to play videos from assets, files,
    // or the internet.
    _controller = VideoPlayerController.network(
      'https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4',
    );

    // Initialize the controller and store the Future for later use.
    _initializeVideoPlayerFuture = _controller.initialize();

    // Use the controller to loop the video.
    _controller.setLooping(true);

    super.initState();
  }

  @override
  void dispose() {
    // Ensure disposing of the VideoPlayerController to free up resources.
    _controller.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(10.0),
      child: Scaffold(
        // Use a FutureBuilder to display a loading spinner while waiting for the
        // VideoPlayerController to finish initializing.
        body: FutureBuilder(
          future: _initializeVideoPlayerFuture,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              // If the VideoPlayerController has finished initialization, use
              // the data it provides to limit the aspect ratio of the video.
              return AspectRatio(
                aspectRatio: _controller.value.aspectRatio,
                // Use the VideoPlayer widget to display the video.
                child: VideoPlayer(_controller),
              );
            } else {
              // If the VideoPlayerController is still initializing, show a
              // loading spinner.
              return Center(child: CircularProgressIndicator());
            }
          },
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            // Wrap the play or pause in a call to `setState`. This ensures the
            // correct icon is shown.
            setState(() {
              // If the video is playing, pause it.
              if (_controller.value.isPlaying) {
                _controller.pause();
              } else {
                // If the video is paused, play it.
                _controller.play();
              }
            });
          },
          // Display the correct icon depending on the state of the player.
          child: Icon(
            _controller.value.isPlaying ? Icons.pause : Icons.play_arrow,
          ),
        ), // This trailing comma makes auto-formatting nicer for build methods.
      ),
    );
  }
}