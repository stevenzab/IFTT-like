// ignore_for_file: non_constant_identifier_names

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:myapp/services/get_services.dart';
import '../home_page/search_bar.dart';
import '../animation/delayed_animation.dart';
import '../home_page/list_card.dart';
import '../services/stock_data.dart';
import 'user_page/user_page.dart';

class LoadingScreen extends StatefulWidget {
  LoadingScreen({super.key, required this.token, required this.first_name, required this.last_name, required this.log_google});

  final String token;
  final String first_name;
  final String last_name;
  final bool log_google;
  @override
  // ignore: library_private_types_in_public_api
  _LoadingScreenState createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {
  List<String> _services = [];
  List<String> _id_service = [];
  final Stock _stock = Stock();

  var services = "";
  Future<void> foo() async {
    services = await get_services(widget.token);
    getNbServices(services);
  }

  void getNbServices(String services) {
    var tmp = "";

    tmp = services.replaceAll(RegExp('[^A-Za-z]'), '');
    tmp = tmp.replaceAll(RegExp("name"), "");
    tmp = tmp.replaceAll(RegExp("id"), ",");
    tmp = tmp.replaceAll(RegExp("services"), "");
    tmp = tmp.replaceAll(RegExp("service"), "");
    tmp = tmp.replaceAll(RegExp("Google"), "");

    _services = tmp.split(',');
    _services.remove("");
    tmp = services.replaceAll(RegExp('[^0-9,]'), '');
    _id_service = tmp.split(',');
    for (int i = 0; i < _id_service.length; i++) {
      _id_service.remove("");
    }
    // _services.removeAt(1);
    stockData();
  }

   void stockData() {
    _stock.first_name = widget.first_name;
    _stock.last_name = widget.last_name;
    _stock.id_user = widget.token;
    _stock.list_services = _services;
    _stock.id_services = _id_service;
    _stock.log_google = widget.log_google;
  }

  void navigationPage() async {
    await foo();
    // ignore: use_build_context_synchronously
    Navigator.pushReplacement(context, MaterialPageRoute(
      builder: (context) => HomePage(stock: _stock,),
    ));
  }

  @override
  void initState() {
    super.initState();
    navigationPage();
  }

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: CircularProgressIndicator(),
    );
  }
}

// ignore: must_be_immutable
class HomePage extends StatefulWidget {
  Stock stock = Stock();

  HomePage({super.key, required this.stock});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(100.0),
        child: DelayedAnimation(
          delay: 1000,
          child: AppBar(
            actions: [
              GestureDetector(
                onTap: () {
                  Navigator.push(context, MaterialPageRoute(
                    builder: (context) => UserPage(stock: widget.stock,)
                  ));
                },
                child: const Icon(
                  Icons.person,
                  color: Colors.black
                ),
              )
            ],
            automaticallyImplyLeading: false,
            elevation: 0,
            backgroundColor:  const Color.fromARGB(255, 215, 238, 248),
            centerTitle: false,
            titleSpacing: 0.0,
            title:  Transform(
              transform:  Matrix4.translationValues(30.0, 15.0, 0.0),
              child: Text('Nos Services',
                style: GoogleFonts.poppins(
                  color: Colors.black,
                  fontSize: 30,
                  fontWeight: FontWeight.w800,
                ),
              ),
            ),
          ),
        ),
      ),
      body: Column(
        children: [
          const DelayedAnimation(delay: 1500, child: SearchBar(),),
          const SizedBox(height: 30,),
          Expanded(
            child: DelayedAnimation(delay: 1600, child: ListCard(stock: widget.stock),)
          ),
        ],
      )
    );
  }
}