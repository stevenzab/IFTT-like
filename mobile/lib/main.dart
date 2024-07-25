import 'package:flutter/material.dart';
import 'package:myapp/home_page/home_page.dart';
import 'animation/splash_page.dart';

// const color_button = const Color.fromARGB(0, 6, 125, 237);
void main() {
  runApp(const MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Area',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor:  const Color.fromARGB(255, 215, 238, 248),
      ),
      home: const SplashPage(),
    );
  }
}
