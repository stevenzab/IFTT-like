// ignore_for_file: depend_on_referenced_packages, must_be_immutable, non_constant_identifier_names, prefer_typing_uninitialized_variables, unnecessary_null_comparison, use_build_context_synchronously

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:myapp/home_page/home_page.dart';
import 'get_action.dart';
import 'package:quiver/iterables.dart';
import '../services/stock_data.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'params_page.dart';

class LoadingSrceenAct extends StatefulWidget {
  String service = "";
  String id_user = "";
  String id_service = "";
  Stock stock;

  LoadingSrceenAct({super.key, required this.service, required this.id_user, required this.id_service, required this.stock});

  @override
  State<LoadingSrceenAct> createState() => _LoadingSrceenActState();
}

class _LoadingSrceenActState extends State<LoadingSrceenAct> {
  var str;
  var _list;
  var params;

  @override
  void initState() {
    super.initState();
    navigationPage();
  }

  Future<void> foo() async {
    str = await get_action(widget.id_user, widget.id_service);
    getAction(str);
  }

  bool isNumeric(String s) {
    if(s == null) {
      return false;
    }
    final number = num.tryParse(s);
    if (number == null) {
      return false;
    }

    return true;
  }

  void getAction(String str) {
    var tmp = str;
    var test = [];
    var s = [];
    int i = 0;

    tmp = tmp.replaceAll('Acrea', '');
    tmp = tmp.replaceAll(RegExp("u00e9"), 'é');
    tmp = tmp.replaceAll(RegExp("u00e0"), 'à');
    tmp = tmp.replaceAll(RegExp("u00e2"), 'â');
    tmp = tmp.replaceAll('acrea_name', '');
    tmp = tmp.replaceAll(RegExp('"id":'), "");
    tmp = tmp.replaceAll('acrea_description', '');
    tmp = tmp.replaceAll(RegExp("[^a-zA-Z0-9 _',éàèçâ]"), '');
    test = tmp.split((','));
    for (int i = 0; i < test.length; i++) {
      if (isNumeric(test[i]) == true) {
        s.add(test[i - 2]);
        s.add(test[i - 1]);
        s.add(test[i]);
        test.remove(test[i - 2]);
        test.remove(test[i - 2]);
        test.remove(test[i - 2]);
      }
    }
    _list = partition(s, 3);
    for (i = 0; i < test.length; i++) {
      if (test[i].contains('number_params')) {
        widget.stock.params = partition(test, i + 1).toList();
        break;
      }
    }
  }

  void navigationPage() async {
    await foo();
    // ignore: use_build_context_synchronously
    Navigator.pushReplacement(context, MaterialPageRoute(
      builder: (context) => ActReactPopUp(service: widget.service, id_user: widget.id_user, id_service: widget.id_service, action: _list, stock: widget.stock)
    ));
  }
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}

class ActReactPopUp extends StatefulWidget {
  var service;
  var id_user;
  var id_service;
  var action;
  Stock stock;

  ActReactPopUp({super.key, required this.service, required this.id_user, required this.id_service, required this.action, required this.stock});

  @override
  State<ActReactPopUp> createState() => _ActReactPopUpState();
}

class _ActReactPopUpState extends State<ActReactPopUp> {
  bool second_action = false;

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
      body: Center(
        child: Column(
          children: [
            const SizedBox(height: 10,),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (widget.stock.first_params_action.isNotEmpty) ... {
                  Image.asset('images/logo ${widget.stock.first_service_name}.png', height: 70, width: 70,),
                  SizedBox(width: 20,),
                  Icon(
                    Icons.arrow_right_alt,
                    size: 50
                  ),
                  SizedBox(width: 20,),
                  Image.asset('images/logo ${widget.service}.png', height: 70, width: 70,),
                } else ... {
                  Image.asset('images/logo ${widget.service}.png', height: 70, width: 70,),
                },
              ],
            ),
            const SizedBox(height: 60,),
            Expanded(
              child: ListActReact(action: widget.action, id_user: widget.id_user, service_name: widget.service, id_service: widget.id_service, stock: widget.stock),
            )
          ]
        ),
      )
    );
  }
}

class ListActReact extends StatefulWidget {
  var action;
  var id_user;
  var service_name;
  var id_service;
  var params;
  Stock stock;

  ListActReact({super.key, required this.action, required this.id_user, required this.service_name, required this.id_service, required this.stock});
  @override
  State<ListActReact> createState() => _ListActReactState();
}

class _ListActReactState extends State<ListActReact> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: GridView.count(
        crossAxisCount: 2,
        children: List.generate(widget.action.length, (index) {
          return CustomCardAction(action_name: widget.action.elementAt(index)[1], action_des: widget.action.elementAt(index)[0], id_action: widget.action.elementAt(index)[2], service_name: widget.service_name, id_service: widget.id_service, stock: widget.stock, list_params: widget.stock.params.elementAt(index),);
        }),
      ),
    );
  }
}

class CustomCardAction extends StatefulWidget {
  final String action_name;
  final String action_des;
  final String id_action;
  final String service_name;
  final String id_service;
  var list_params;
  Stock stock;
  CustomCardAction({super.key, required this.action_name, required this.action_des, required this.id_action, required this.service_name, required this.id_service, required this.stock, required this.list_params});

  @override
  State<CustomCardAction> createState() => _CustomCardActionState();
}

class _CustomCardActionState extends State<CustomCardAction> {
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(20.0),
      ),
      child: Column(
        children: [
          InkWell(
            splashColor: Colors.blue.withAlpha(30),
            onTap: () {
              if (widget.stock.first_action_name != ",") {
                widget.stock.second_action_name = widget.action_name;
                widget.stock.second_id_action = widget.id_action;
                widget.stock.second_service_name = widget.service_name;
                widget.stock.second_id_service = widget.id_service;
                } else {
                widget.stock.first_action_name = widget.action_name;
                widget.stock.first_id_action = widget.id_action;
                widget.stock.first_service_name = widget.service_name;
                widget.stock.first_id_service = widget.id_service;
              }
              Navigator.push(context, MaterialPageRoute(
                builder: (context) => ParamsPage(stock: widget.stock, params: widget.list_params)
              ));
            },
            child: SizedBox(
              width: 150,
              height: 180,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(widget.action_name,
                  style: GoogleFonts.poppins(
                    color: Colors.black,
                    fontSize: 15,
                    fontWeight: FontWeight.w800),
                  ),
                  Text(widget.action_des,
                  style: GoogleFonts.poppins(
                    color: Colors.blueGrey,
                    fontSize: 12,
                    fontWeight: FontWeight.w500),
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}