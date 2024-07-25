// ignore_for_file: non_constant_identifier_names

class Album {
  final int? id;
  final String token;
  final String first_name;
  final String last_name;

  const Album({
    required this.id,
    required this.token,
    required this.first_name,
    required this.last_name,
  });

  factory Album.fromJson(Map<String, dynamic> json) {
    return Album(
      id: json['id'],
      token: json['ID Token'],
      first_name: json['first_name'],
      last_name: json['last_name'],
    );
  }
}