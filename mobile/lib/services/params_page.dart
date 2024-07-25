import 'package:flutter/material.dart';
import 'package:myapp/home_page/home_page.dart';
import '../services/stock_data.dart';
import '../animation/delayed_animation.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class ParamsPage extends StatefulWidget {
  Stock stock;
  var params;
  ParamsPage({super.key, required this.stock, required this.params});

  @override
  State<ParamsPage> createState() => _ParamsPageState();
}

class _ParamsPageState extends State<ParamsPage> {
  List<TextEditingController> controller = [];

  @override
  void initState() {
    var tmp = widget.params;
    for (int i = 0; i < widget.params.length; i++) {
      widget.params[i] = tmp[i].replaceAll("name_params", "");
      if (widget.params[i].contains("number_params") == true) {
        widget.params.remove(widget.params[i].toString());
      }
    }
    for (int i = 0; i < widget.params.length; i++) {
      controller.add(TextEditingController());
    }
  }

  void create_params(var s) {
    if (widget.stock.first_params_action.isEmpty) {
      for (int i = 0; i < widget.params.length; i++) {
        widget.stock.first_params_action.add(s[i].text);
      }
      Navigator.push(context, MaterialPageRoute(
        builder: (context) => HomePage(stock: widget.stock,)
    ),);
    } else {
      for (int i = 0; i < widget.params.length; i++) {
        widget.stock.second_params_action.add(s[i].text);
      }
      create_act_react(widget.stock);
    }
  }
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
      body: Container(
        margin: const EdgeInsets.symmetric(
          horizontal: 30,
        ),
        child: Center(
          child: Column(
            children: [
              DelayedAnimation(
                delay: 1000,
                child: Text(
                  'Paramètre',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.poppins(
                    color: Colors.black,
                    fontSize: 20,
                    fontWeight: FontWeight.w800,
                  ),
                ),
              ),
              SizedBox(height: 100,),
              for (int i = 0; i < widget.params.length; i++) ... [
                DelayedAnimation(
                  delay: 1500,
                  child: TextField(
	                  controller: controller[i],
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
	                    labelText: widget.params[i].toString(),
	                  ),
                  ),
                ),
                SizedBox(height: 10,),
                ],
                DelayedAnimation(
                  delay: 2000,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      ElevatedButton(
                        onPressed: () {
                          create_params(controller);
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
                    ]
                  )
                ),
              ],
            )
          ),
      ),
    );
  }
  Future<void> create_act_react(Stock stock) async {
    var response = await http.post(Uri.parse("http://api-area-a.fr/createAcrea"), headers: {"Content-Type": "application/json", "Authorization": "Bearer ${stock.id_user}"},
    body: json.encode({
      'id_service_action': stock.first_id_service,
      'id_service_reaction': stock.second_id_service,
      'id_action': stock.first_id_action,
      'id_reaction': stock.second_id_action,
      'params_action': stock.first_params_action,
      'params_reaction': stock.second_params_action,
    }));
    if (response.statusCode == 200) {
      stock.first_id_service = ",";
      stock.first_id_action = ",";
      stock.first_service_name = ",";
      stock.first_action_name = ",";
      stock.first_params_action = [];
      stock.second_id_service = ",";
      stock.second_id_action = ",";
      stock.second_service_name = ",";
      stock.second_action_name = ",";
      stock.second_params_action = [];
      for (int i = 0; i < stock.params.length; i++)
        stock.params[i].clear;

      ScaffoldMessenger.of(context)
        .showSnackBar(const SnackBar(content: Text('Area créé')));
      // ignore: use_build_context_synchronously
      Navigator.push(context, MaterialPageRoute(
        builder: (context) => HomePage(stock: stock)
      ));
    } else {
      // ignore: use_build_context_synchronously
      ScaffoldMessenger.of(context)
        .showSnackBar(const SnackBar(content: Text('Echec de la création de Area')));
      }
  }
}