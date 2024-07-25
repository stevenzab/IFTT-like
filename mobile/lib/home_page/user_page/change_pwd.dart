// ignore_for_file: prefer_is_not_empty

import 'package:flutter/material.dart';
import 'package:myapp/login_page/login_page.dart';
import '/animation/delayed_animation.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';


class ChangePwdPage extends StatelessWidget {
  const ChangePwdPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        backgroundColor:  const Color.fromARGB(255, 215, 238, 248),
        leading: IconButton(
          icon: const Icon(
            Icons.arrow_back_ios,
            color: Color.fromARGB(255, 28, 102, 229),
            size: 30,
          ),
          onPressed: () {
            Navigator.pop(context);
          },
          ),
      ),
      body: SingleChildScrollView(
        child: Center (
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget> [
              const Padding(
                padding: EdgeInsets.only(
                  top: 40
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
                  'Changer votre mot de passe.',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.poppins(
                    color: Colors.black,
                    fontSize: 20,
                    fontWeight: FontWeight.w800,
                  ),
                ),
              ),
              const DelayedAnimation(
                delay: 2000,
                child: ForgotPwdTextField(),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class ForgotPwdTextField extends StatefulWidget {
  const ForgotPwdTextField({super.key});

  @override
  State<ForgotPwdTextField> createState() => _ForgotPwdTextFieldState();
}

class _ForgotPwdTextFieldState extends State<ForgotPwdTextField> {
  final GlobalKey<FormState> _emailKey = GlobalKey<FormState>();
  final GlobalKey<FormState> _newPwdKey = GlobalKey<FormState>();

  String _email = '';
  String _newPwd = '';

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 30,
      ),
      child: Column(
        children: [
          const SizedBox(
            height: 30,
          ),
          Form(
            key: _emailKey,
            child: DelayedAnimation(
              delay: 1500,
              child: TextFormField(
                onChanged: (value) => setState(() => _email = value),
                validator: (value) =>
                  value!.isEmpty
                    ? 'Email vide.'
                    : null,
                decoration: InputDecoration(
                  prefixIcon: const Icon(
                    Icons.person,
                    color: Colors.blueAccent,
                    ),
                  filled: true,
                  fillColor: Colors.white,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15),
                  borderSide: const BorderSide(
                    width: 0,
                    style: BorderStyle.none,
                  ),
                ),
                hintText: 'Email',
              ),
            ),
          ),
        ),
        const SizedBox(height: 10,),
        Form(
            key: _newPwdKey,
            child: DelayedAnimation(
              delay: 1500,
              child: TextFormField(
                onChanged: (value) => setState(() => _newPwd = value),
                validator: (value) =>
                  value!.isEmpty
                    ? 'Nouveau mot de passe vide.'
                    : null,
                decoration: InputDecoration(
                  prefixIcon: const Icon(
                    Icons.person,
                    color: Colors.blueAccent,
                    ),
                  filled: true,
                  fillColor: Colors.white,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15),
                  borderSide: const BorderSide(
                    width: 0,
                    style: BorderStyle.none,
                  ),
                ),
                hintText: 'Nouveau mot de passe',
              ),
            ),
          ),
        ),
        const SizedBox(height: 240,),
        DelayedAnimation(
                  delay: 2000,
                  child: ElevatedButton(
                    onPressed: !_email.isEmpty && _newPwd.length < 6
                      ? null
                      : () {
                        if (_emailKey.currentState!.validate() && _newPwdKey.currentState!.validate()) {
                          updatePwd();
                        }
                    },
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 15.0), backgroundColor: const Color.fromARGB(255, 28, 102, 229),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(15.0)
                      ),
                    ),
                    child: Text('Envoyer',
                      style: GoogleFonts.poppins(
                      color: Colors.white,
                      fontSize: 16,
                      fontWeight: FontWeight.w500),
                    ),
                  ),
                ),
        ],
      ),
    );
  }
   Future<void> updatePwd() async {
    var response = await http.post(Uri.parse("http://api-area-a.fr/forgotPassword"), headers: {"Content-Type": "application/json"},
    body: json.encode({
      'email': _email,
      'password': _newPwd
    }));
    if (response.statusCode == 200) {
      // ignore: use_build_context_synchronously
      Navigator.pop(context);
    } else {
      // ignore: use_build_context_synchronously
      ScaffoldMessenger.of(context)
    .showSnackBar(const SnackBar(content: Text('Email incorrect.')));
    }
  }
}