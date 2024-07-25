// ignore_for_file: unused_field

import 'package:flutter/material.dart';

class SearchBar extends StatefulWidget {
  const SearchBar({super.key});

  @override
  State<SearchBar> createState() => _SearchBarState();
}

class _SearchBarState extends State<SearchBar> {
  String _inputSearch = '';

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 250,
      child:
        TextFormField(
          onChanged: (value) => _inputSearch = value,
          decoration: InputDecoration(
            filled: true,
            fillColor: const Color.fromARGB(255, 189, 222, 231),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(15),
                borderSide: const BorderSide(
                  width: 0,
                  style: BorderStyle.none,
                ),
              ),
            prefixIcon: const Icon(Icons.search),
            hintText: 'Ouais tu cherches quoi ?',
          ),
      ),
    );
  }
}