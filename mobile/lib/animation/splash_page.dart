import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../login_page/login_page.dart';
import 'delayed_animation.dart';
import 'dart:async';


class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<StatefulWidget> createState() {
    return StartState();
  }
}

class StartState extends State<SplashPage> {
  @override
  void initState() {
    super.initState();
    startTimer();
  }

  startTimer() async {
    var duration = const Duration(seconds: 4);
    return Timer(duration, route);
  }

  route() {
    Navigator.pushReplacement(context, MaterialPageRoute(
      builder: (context) => const LoginPage()
    ));
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center (
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget> [
            DelayedAnimation(
              delay: 1000,
              child: Image.asset(
                'images/logo_area.png',
                height: 100,
                width: 100,
                ),
            ),
            const Padding(
              padding: EdgeInsets.only(
                top: 50
              ),
            ),
            DelayedAnimation(
              delay: 1000,
              child: Text(
                'Attends wesh',
                textAlign: TextAlign.center,
                style: GoogleFonts.poppins(
                  color: Colors.grey,
                  fontSize: 16,
                  ),
                ),
              ),
            const Padding(
              padding: EdgeInsets.only(
                top: 20
              )),
            const DelayedAnimation(
              delay: 1000,
              child: CircularProgressIndicator(
                backgroundColor: Colors.white,
                strokeWidth: 1,
              ),
            ),
          ],
        )
      ),
    );
  }
}