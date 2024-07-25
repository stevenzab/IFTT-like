// ignore_for_file: non_constant_identifier_names, prefer_typing_uninitialized_variables

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

Future get_action(String token, String idService) async {
  var response = await http.get(Uri.parse("http://api-area-a.fr/getAction?id=$idService"),
  headers: {"Content-Type": "application/json", "Authorization": "Bearer $token"},);

  var action = response.body;
  if (response.statusCode == 200) {
    return action;
  } else {
    const Text("T'as de services bg");
  }
}