import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../animation/delayed_animation.dart';
import 'package:http/http.dart' as http;
import '../home_page/home_page.dart';
import '../login_page/convert_http_request.dart';

// ignore: must_be_immutable
class CreateAccPage2 extends StatelessWidget {
  final String _name;
  final String _surname;
  const CreateAccPage2(this._name, this._surname, {super.key});

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
        child: Center(
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
                    'Inscription Gratuit',
                    textAlign: TextAlign.center,
                    style: GoogleFonts.poppins(
                      color: Colors.black,
                      fontSize: 20,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
                const SizedBox(height: 30),
                DelayedAnimation(
                  delay: 1500,
                  child: TextInput2(name: _name, surname: _surname),
                ),
              ],
          ),
        ),
      ),
    );
  }
}

class TextInput2 extends StatefulWidget {
  final String name;
  final String surname;
  const TextInput2({super.key, required this.name, required this.surname});

  @override
  // ignore: library_private_types_in_public_api, no_logic_in_create_state
  // ignore: library_private_types_in_public_api, no_logic_in_create_state
  _TextInput2State createState() => _TextInput2State(name, surname);
}

class _TextInput2State extends State<TextInput2> {
  final GlobalKey<FormState> _emailKey = GlobalKey<FormState>();
  final GlobalKey<FormState> _pwdKey = GlobalKey<FormState>();

  final String _name;
  final String _surname;

  _TextInput2State(this._name, this._surname);

  String _email = '';
  String _pwd = '';
  // ignore: unused_field
  String _pwdconfirm = '';
  bool _isSecret = true;
  bool _isSecret2 = true;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 30,
      ),
      child: Column(
        children: [
          Form(
          key: _emailKey,
          child: DelayedAnimation(
            delay: 1500,
            child: TextFormField(
              onChanged: (value) => setState(() => _email = value),
              validator: (value) =>
                value!.isEmpty
                  ?'Email vide.'
                  : null,
              decoration: InputDecoration(
                prefixIcon: const Icon(
                  Icons.mail,
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
        const SizedBox(height: 10),
        Form(
          key: _pwdKey,
          child: DelayedAnimation(
            delay: 1500,
            child: TextFormField(
              onChanged: (value) => setState(() => _pwd = value),
              validator: (value) =>
                value!.isEmpty
                  ?'Mot de passe vide.'
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
                prefixIcon: const Icon(
                    Icons.lock,
                    color: Colors.blueAccent,
                    ),
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
        const SizedBox(height: 10),
        Form(
          child: DelayedAnimation(
            delay: 1500,
            child: TextFormField(
              onChanged: (value) => setState(() => _pwdconfirm = value),
              validator: (value) =>
                value!.isEmpty
                  ?'Mot de passe confirmer vide.'
                  : null,
              obscureText: _isSecret2,
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
                hintText: 'Confirmer mot de passe',
                prefixIcon: const Icon(
                    Icons.lock,
                    color: Colors.blueAccent,
                    ),
                suffixIcon: InkWell(
                  onTap: () => setState(() => _isSecret2 = !_isSecret2),
                  child: Icon(
                    !_isSecret2
                      ? Icons.visibility
                      : Icons.visibility_off,
                    ),
                  )
              ),
            ),
          ),
        ),
        const SizedBox(height: 170),
                DelayedAnimation(
                delay: 3000,
                child: ElevatedButton(
                  onPressed: _surname.isEmpty && _name.isEmpty
                    ? null
                    : () {
                      if (_emailKey.currentState!.validate() && _pwdKey.currentState!.validate()) {
                        register();
                      }
                  },
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 15.0), backgroundColor: const Color.fromARGB(255, 28, 102, 229),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(15.0)
                    ),
                  ),
                  child: Text('Créer votre compte',
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
  Future<void> register() async {
    var response = await http.post(Uri.parse("http://api-area-a.fr/register"), headers: {"Content-Type": "application/json"},
    body: json.encode({
      'first_name': _name,
      'last_name': _surname,
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
    .showSnackBar(const SnackBar(content: Text('Impossible de créer le compte.')));
    }
  }
}