import 'package:flutter/material.dart';
import '../animation/delayed_animation.dart';
import 'package:google_fonts/google_fonts.dart';
import '../home_page/home_page.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'button_log_page.dart';
import 'button_auth2.dart';
import '../login_page/convert_http_request.dart';

class LoginForm extends StatefulWidget {
  const LoginForm({super.key});

  @override
  State<LoginForm> createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final GlobalKey<FormState> _emailKey = GlobalKey<FormState>();
  final GlobalKey<FormState> _pwdKey = GlobalKey<FormState>();

  String _email = '';
  String _pwd = '';
  final RegExp emailRegex = RegExp(r"[a-z0-9\._-]+@[a-z0-9\._-]+\.[a-z]+");

  bool _isSecret = true;
  @override
  Widget build(BuildContext context) {
    return Container(
            margin: const EdgeInsets.symmetric(
              horizontal: 30,
            ),
            child: Center(
              child: Column(
                children: [
                Form(
                  key: _emailKey,
                  child: DelayedAnimation(
                    delay: 1500,
                    child: TextFormField(
                      onChanged: (value) => setState(() => _email = value),
                      validator: (value) =>
                      value!.isEmpty || !emailRegex.hasMatch(value)
                        ? 'Email incorrect.'
                        : null,
                      decoration: InputDecoration(
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
                const SizedBox(height: 10),
                Form(
                  key: _pwdKey,
                  child: DelayedAnimation(
                    delay: 1500,
                    child:
                  TextFormField(
                    onChanged: (value) => setState(() => _pwd = value),
                    validator: (value) => value!.length < 6
                      ? '6 caractère minimum.'
                      : null,
                    obscureText: _isSecret,
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.white,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(15),
                        borderSide: const BorderSide(
                          width: 0,
                          style: BorderStyle.none,
                        ),
                      ),
                      hintText: 'Mot de passe',
                      suffixIcon: InkWell(
                        onTap: () => setState(() => _isSecret = !_isSecret),
                        child: Icon(
                          !_isSecret
                            ? Icons.visibility
                            : Icons.visibility_off,
                          ),
                        )
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 30),
                DelayedAnimation(
                  delay: 2500,
                  child: Text(
                    'Ou connectez-vous avec',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.poppins(
                      color: Colors.black,
                      fontSize: 16,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
                const SizedBox(height: 10),
                DelayedAnimation(
                  delay: 3000,
                  child: Container(
                    margin: const EdgeInsets.symmetric(
                      vertical: 14,
                      horizontal: 40,
                    ),
                    child: const ButtonAuth2(),
                  )
                ),
                const DelayedAnimation(delay: 3000,
                  child: ButtonPwdLost(),
                ),
                 const SizedBox(height: 20,),
                DelayedAnimation(
                  delay: 2000,
                  child: ElevatedButton(
                    onPressed: !emailRegex.hasMatch(_email) && _pwd.length < 6
                      ? null
                      : () {
                        if (_emailKey.currentState!.validate() && _pwdKey.currentState!.validate()) {
                          login();
                        }
                    },
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 15.0), backgroundColor: const Color.fromARGB(255, 28, 102, 229),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(15.0)
                      ),
                    ),
                    child: Text('Se connecter',
                      style: GoogleFonts.poppins(
                      color: Colors.white,
                      fontSize: 16,
                      fontWeight: FontWeight.w500),
                    ),
                  ),
                ),
                const SizedBox(height: 10),
                const DelayedAnimation(
                  delay: 3000,
                  child: ButtonCreateAcc(),
                ),
              ],
            ),
          ),
    );
  }
  Future<void> login() async {
    var response = await http.post(Uri.parse("http://api-area-a.fr/login"), headers: {"Content-Type": "application/json"},
    body: json.encode({
      'email': _email,
      'password': _pwd,
    }));
    if (response.statusCode == 200) {
      Album user = Album.fromJson(jsonDecode(response.body));
      // ignore: use_build_context_synchronously
      Navigator.push(context, MaterialPageRoute(
        builder: (context) => LoadingScreen(token: user.token, first_name: user.first_name, last_name: user.last_name, log_google: false,)
      ));
    } else {
      // ignore: use_build_context_synchronously
      ScaffoldMessenger.of(context)
    .showSnackBar(const SnackBar(content: Text('Email ou mot de passe incorrect.')));
    }
  }
}