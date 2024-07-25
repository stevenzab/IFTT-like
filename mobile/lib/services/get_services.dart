// ignore_for_file: non_constant_identifier_names

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

Future get_services(String token) async {
  String services;

  var response = await http.get(Uri.parse("http://api-area-a.fr/getService"),
    headers: {"Content-Type": "application/json", "Authorization": "Bearer $token",});
  services = response.body.toString();

  if (response.statusCode == 200) {
    return services;
  } else {
    const Text("T'as de services bg");
  }
}