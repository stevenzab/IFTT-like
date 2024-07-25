import '../home_page/home_page.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'oauth2/google_oauth2.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class ButtonAuth2 extends StatefulWidget {
  const ButtonAuth2({super.key});

  @override
  State<ButtonAuth2> createState() => _ButtonAuth2State();
}

class _ButtonAuth2State extends State<ButtonAuth2> {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget> [
          ElevatedButton(
          onPressed: signIn,
          style: ElevatedButton.styleFrom(
            padding: const EdgeInsets.symmetric(horizontal: 15.0, vertical: 15.0), backgroundColor: Colors.white,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(15.0)
            ),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset('images/logo Google.png',
                height: 20,
                width: 20,
              ),
              const SizedBox(
                width: 10,
              ),
              Text(
                'Google',
                style: GoogleFonts.poppins(
                  color: Colors.black,
                  fontSize: 16,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
  Future signIn() async {
    final user = await GoogleSignInApi.login();

    if (user == null) {
      // ignore: use_build_context_synchronously
      ScaffoldMessenger.of(context)
          .showSnackBar(const SnackBar(content: Text('Echec de connection.')));
    } else {
      String name = user.displayName.toString();
      final fullname = name.split(' ');
      var response = await http.post(Uri.parse("http://api-area-a.fr/createTokenUser"), headers: {"Content-Type": "application/json"},
        body: json.encode({
          'email': user.email,
          'token_service': user.id,
          'last_name': fullname[0],
          'first_name': fullname[1],
          'service_name': "Google"
      }));
      var info = jsonDecode(response.body);

      if (response.statusCode == 200) {
        // ignore: use_build_context_synchronously
        Navigator.of(context).pushReplacement(MaterialPageRoute(
          builder: (context) => LoadingScreen(token: info["ID Token"], first_name: fullname[0], last_name: fullname[1], log_google: true),
        ));
      }
    }
  }
}