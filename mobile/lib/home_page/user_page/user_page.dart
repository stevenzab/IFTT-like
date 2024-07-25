// ignore_for_file: must_be_immutable, deprecated_member_use

import 'package:flutter/material.dart';
import 'package:myapp/home_page/user_page/change_pwd.dart';
import '../../services/stock_data.dart';
import '../../animation/delayed_animation.dart';
import 'package:google_fonts/google_fonts.dart';
import '../../login_page/login_page.dart';
import 'package:http/http.dart' as http;
import 'acrea_user.dart';
import '../../login_page/oauth2/google_oauth2.dart';


class UserPage extends StatefulWidget {
  Stock stock;
  UserPage({super.key, required this.stock});

  @override
  State<UserPage> createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  @override
  void initState() {
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        backgroundColor:  const Color.fromARGB(255, 215, 238, 248),
        centerTitle: true,
        title: Text('${widget.stock.first_name} ${widget.stock.last_name}',
          style: GoogleFonts.poppins(
            color: Colors.black,
            fontSize: 20,
            fontWeight: FontWeight.w600,
          ),
        ),
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
        actions: [
          GestureDetector(
            onTap: () async {
              if (widget.stock.log_google == true) {
                await GoogleSignInApi.logout();
              }
              Navigator.pushReplacement(context, MaterialPageRoute(
                builder: (context) => const LoginPage()));
            },
            child: const Icon(
              Icons.logout,
              color: Colors.black
            ),
          )
        ],
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SizedBox(height: 200,),
              GridUserPage(stock: widget.stock),
            ],
          ),
        ),
      ),
    );
  }
}

class GridUserPage extends StatefulWidget {
  Stock stock;
  GridUserPage({super.key, required this.stock});

  @override
  State<GridUserPage> createState() => _GridUserPageState();
}

class _GridUserPageState extends State<GridUserPage> {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget> [
            DelayedAnimation(
              delay: 1000,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20.0),
                  ),
                  primary: Colors.white,
                ),
                onPressed: () {
                    get_area_user(widget.stock.id_user);
                },
                child: Center(
                  child: Text("Vos Areas",
                    style: GoogleFonts.poppins(
                      color: Colors.black,
                      fontSize: 20,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                )
              ),
            ),
            const SizedBox(height: 10,),
            DelayedAnimation(delay: 1100,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20.0),
                  ),
                  primary: Colors.white,
                ),
                onPressed: () {
                  Navigator.pushReplacement(context, MaterialPageRoute(
                    builder: (context) => const ChangePwdPage()
                  ));
                },
                child: Center(
                  child: Text("Changer votre mot de passe",
                    style: GoogleFonts.poppins(
                      color: Colors.black,
                      fontSize: 20,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                )
              ),
            ),
            const SizedBox(height: 10,),
            DelayedAnimation(
              delay: 1200,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20.0),
                  ),
                  primary: Colors.white,
                ),
                onPressed: () {
                  delete_user(widget.stock.id_user,);
                },
                child: Center(
                  child: Text("Supprimer votre compte",
                    style: GoogleFonts.poppins(
                      color: Colors.redAccent,
                      fontSize: 20,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                )
              ),
            ),
          ]
        ),
      ),
    );
  }
  Future delete_user(String? token) async {
    var response = await http.delete(Uri.parse("http://api-area-a.fr/deleteUser"),
    headers: {"Content-Type": "application/json", "Authorization": "Bearer ${token}"},);

    if (response.statusCode == 200) {
      Navigator.pushReplacement(context, MaterialPageRoute(
        builder: (context) => const LoginPage()
      ));
    } else {
      const Text("Impossible de supprimer cette Acrea.");
    }
  }
  Future get_area_user(String? token) async {
    var response = await http.get(Uri.parse("http://api-area-a.fr/getAcreaUser"),
    headers: {"Content-Type": "application/json", "Authorization": "Bearer $token"},);

    if (response.statusCode == 200) {
      // ignore: use_build_context_synchronously
      Navigator.push(context, MaterialPageRoute(
          builder: (context) => AcreaUser(acrea: response.body, id_user: token,)
        ));
    } else {
      ScaffoldMessenger.of(context)
      .showSnackBar(const SnackBar(content: Text("T'as pas d'area.")));
    }
  }
}