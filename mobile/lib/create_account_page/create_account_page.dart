import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../animation/delayed_animation.dart';
import 'create_account_page2.dart';

class CreateAccPage extends StatelessWidget {
  const CreateAccPage({super.key});

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
                  'Inscription Gratuit',
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
                child: TextInput(),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class TextInput extends StatefulWidget {
  const TextInput({super.key});

  @override
  State<TextInput> createState() => _TextInputState();
}

class _TextInputState extends State<TextInput> {
  final GlobalKey<FormState> _nameKey = GlobalKey<FormState>();
  final GlobalKey<FormState> _surnameKey = GlobalKey<FormState>();

  String _name = '';
  String _surname = '';

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
            key: _surnameKey,
            child: DelayedAnimation(
              delay: 1500,
              child: TextFormField(
                onChanged: (value) => setState(() => _surname = value),
                validator: (value) =>
                  value!.isEmpty
                    ? 'Nom vide.'
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
                hintText: 'Nom',
              ),
            ),
          ),
        ),
        const SizedBox(height: 10),
        Form(
          key: _nameKey,
          child: DelayedAnimation(
            delay: 1500,
            child: TextFormField(
              onChanged: (value) => setState(() => _name = value),
              validator: (value) =>
                value!.isEmpty
                  ?'Prénom vide.'
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
              hintText: 'Prénom',
              ),
            ),
          ),
        ),
        const SizedBox(height: 240),
        DelayedAnimation(
                delay: 3000,
                child: ElevatedButton(
                  onPressed: _surname.isEmpty && _name.isEmpty
                    ? null
                    : () {
                      if (_surnameKey.currentState!.validate() && _nameKey.currentState!.validate()) {
                        Navigator.of(context).push(MaterialPageRoute(
                          builder: (context) => CreateAccPage2(_name, _surname)
                        ));
                      }
                  },
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 15.0), backgroundColor: const Color.fromARGB(255, 28, 102, 229),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(15.0)
                    ),
                  ),
                  child: Text('Suivant',
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
}