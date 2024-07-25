import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../animation/delayed_animation.dart';
import 'login_form.dart';


class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Center (
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget> [
              const Padding(
                padding: EdgeInsets.only(
                  top: 150
                ),
              ),
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
                  top: 20
                ),
              ),
              DelayedAnimation(
                delay: 1000,
                child: Text(
                  'Se connecter',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.poppins(
                    color: Colors.black,
                    fontSize: 20,
                    fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
              const SizedBox(height: 30),
              const LoginForm(),
            ],
          )
        )
      )
    );
  }
}