// ignore_for_file: prefer_typing_uninitialized_variables, non_constant_identifier_names

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:myapp/services/stock_data.dart';

import '../services/act_react_page.dart';

// ignore: must_be_immutable
class ListCard extends StatefulWidget {
  Stock stock;
  ListCard({super.key, required this.stock});

  @override
  State<ListCard> createState() => _ListCardState();
}

class _ListCardState extends State<ListCard> {
  int aze = 0;
  @override
  Widget build(BuildContext context) {
    return GridView.count(
        crossAxisCount: 2,
        mainAxisSpacing: 10,
        children: List.generate(widget.stock.list_services.length, (index) {
          if (index != 1) {
            return CustomCard(service: widget.stock.list_services[index], id_user: widget.stock.id_user, id_service: widget.stock.id_services[index], stock: widget.stock,);
          }
          return Container();
        }
      ),
    );
  }
}

// ignore: must_be_immutable
class CustomCard extends StatelessWidget {
  var service;
  var id_user;
  var id_service;
  Stock stock;
  CustomCard({super.key, required this.service, required this.id_user, required this.id_service, required this.stock});

  @override
  Widget build(BuildContext context) {
    return Center (
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget> [
          cardNotSelect(service: service, id_user: id_user, id_service: id_service, stock: stock),
        ]
      )
    );
  }
}

// ignore: must_be_immutable, camel_case_types
class cardNotSelect extends StatelessWidget {
  var service;
  var id_user;
  var id_service;
  Stock stock;
  cardNotSelect({super.key, required this.service, required this.id_user, required this.id_service, required this.stock});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Column(
          children: [
            if (stock.first_service_name != "," && stock.first_service_name == service) ... {
              Card(
                elevation: 5,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20.0),
                  side: BorderSide(
                    color: Colors.orange,
                    width: 3,
                  )
                ),
                child: Column(
                  children: [
                    InkWell(
                      splashColor: Colors.blue.withAlpha(30),
                      onTap: () {
                        Navigator.push(context, MaterialPageRoute(
                          builder: (context) => LoadingSrceenAct(service: service, id_user: id_user, id_service: id_service, stock: stock,),
                        ));
                      },
                      child: SizedBox(
                        width: 150,
                        height: 180,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            SizedBox(
                              height: 50,
                              child: Image.asset("images/logo $service.png"),
                            ),
                            const SizedBox(height: 40,),
                            Text("$service",
                            style: GoogleFonts.poppins(
                              color: Colors.black,
                              fontSize: 15,
                              fontWeight: FontWeight.w800),
                            ),
                          ],
                        )
                      ),
                    ),
                  ]
                )
              )
            } else ... {
              Card(
                elevation: 5,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20.0),
                ),
                child: Column(
                  children: [
                    InkWell(
                      splashColor: Colors.blue.withAlpha(30),
                      onTap: () {
                        Navigator.push(context, MaterialPageRoute(
                          builder: (context) => LoadingSrceenAct(service: service, id_user: id_user, id_service: id_service, stock: stock,),
                        ));
                      },
                      child: SizedBox(
                        width: 150,
                        height: 180,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            SizedBox(
                              height: 50,
                              child: Image.asset("images/logo $service.png"),
                            ),
                            const SizedBox(height: 40,),
                            Text("$service",
                            style: GoogleFonts.poppins(
                              color: Colors.black,
                              fontSize: 15,
                              fontWeight: FontWeight.w800),
                            ),
                          ],
                        )
                      ),
                    ),
                  ]
                )
              )
            },
          ]
        )
      )
    );
  }
}