import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:myapp/home_page/user_page/user_page.dart';
import 'package:myapp/services/get_act_react.dart';

class AcreaUser extends StatefulWidget {
  String acrea;
  String? id_user;
  AcreaUser({super.key, required this.acrea, required this.id_user});

  @override
  State<AcreaUser> createState() => _AcreaUserState();
}

class _AcreaUserState extends State<AcreaUser> {
  var list_acrea;

  @override
  void initState() {
    super.initState();
    list_acrea = jsonDecode(widget.acrea);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        backgroundColor:  const Color.fromARGB(255, 215, 238, 248),
        centerTitle: true,
        title: Text('Vos Areas',
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
      ),
      body: Center(
        child: Column(
          children: [
            SizedBox(height: 30,),
            Expanded(
              child: CardAcrea(list_acrea: list_acrea, id_user: widget.id_user),)
          ],
        ),
      ),
    );
  }
}

class CardAcrea extends StatefulWidget {
  var list_acrea;
  var id_user;
  CardAcrea({super.key, this.list_acrea, required this.id_user});

  @override
  State<CardAcrea> createState() => _CardAcreaState();
}

class _CardAcreaState extends State<CardAcrea> {
  @override
  Widget build(BuildContext context) {
    return GridView.count(
      crossAxisCount: 1,
      children: List.generate(widget.list_acrea["acrea"].length, (index) {
        return CustomCardAcrea(acrea: widget.list_acrea["acrea"][index], id_user: widget.id_user);
      }),
    );
  }
}

class CustomCardAcrea extends StatefulWidget {
  var acrea;
  var id_user;
  CustomCardAcrea({super.key, required this.acrea, required this.id_user});

  @override
  State<CustomCardAcrea> createState() => _CustomCardAcreaState();
}

class _CustomCardAcreaState extends State<CustomCardAcrea> {
  var list_service = ["", "Meteo", "Google", "Outlook", "Edamam", "Steam", "Discord", "Pornhub", "Catresponse", "RandomUserGen", "Dogresponse", "Ipfy", "PlaceKitten", "NumbersRand", "CatFact"];
  var list_action = ["", "Temperature", "Humidite", "Mail Outlook", "Recette", "Nombre Joueur", "Nouvelle info", "Envoie Message", "Recevoir un message", "Nouvelle vidéo catégorie", "Nouvelle vidéo pornstar", "Vidéo aléatoire", "Réponse aléatoire", "Générateur de personne", "Image aléatoire", "Ipfy", "PlaceKitten", "Nombre aléatoire", "Faits sur les chats"];
  var list_action_des = ["", "Appeler seulement si la température est supérieur à X", "Appeler seulement si l'humidité est supérieur à X", "Envoyer un mail via Outlook", "Envoyer une recette via Edamam", "Permet de savoir si plus de X joueurs sur le jeu X", "Permet de savoir quand de nouvelles info sont donnés sur le jeu X", "Evoie des messages grâce à l'API Discord", "Recevoir un messages grâce au bot Discord", "Permet de savoir si une nouvelle vidéo de X catégories est sortie aujourd'hui", "Permet de savoir si une nouvelle vidéo de X est sortie aujourd'hui", "Envoie une vidéo aléatoire sur X service", "Envoie une réponse, aléatoire sur X service", "Envoie une personne aléatoire sur X service", "Envoie une image aléatoire sur X service", "Envoie une IP sur X service", "Envoie une image de chat", "Envoie un nombre aléatoire", "Envoie un fait sur les chats"];
  var ret = false;

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.only(left: 30, right: 30, bottom: 50),
      elevation: 5,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(20.0),
      ),
      color: Colors.white,
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text("Service: ${list_service[widget.acrea["service_action_id"]]}",
              style: GoogleFonts.poppins(
                color: Colors.black,
                fontSize: 15,
                fontWeight: FontWeight.w600),
              ),
            Text("Action: ${list_action[widget.acrea["action_id"]]}",
              style: GoogleFonts.poppins(
                color: Colors.black,
                fontSize: 15,
                fontWeight: FontWeight.w600),
              ),
            Text("Action description: ${list_action_des[widget.acrea["action_id"]]}",
              style: GoogleFonts.poppins(
                color: Colors.black,
                fontSize: 15,
                fontWeight: FontWeight.w600),
              ),
            // Text("Paramètre action: ${widget.acrea["params_action"]}",
            //  style: GoogleFonts.poppins(
            //   color: Colors.black,
            //   fontSize: 10,
            //   fontWeight: FontWeight.w600),
            // ),
            Text("Service: ${list_service[widget.acrea["service_reaction_id"]]}",
             style: GoogleFonts.poppins(
              color: Colors.black,
              fontSize: 15,
              fontWeight: FontWeight.w600),
            ),
            Text("Reaction: ${list_action[widget.acrea["reaction_id"]]}",
             style: GoogleFonts.poppins(
              color: Colors.black,
              fontSize: 15,
              fontWeight: FontWeight.w600),
            ),
            Text("Reaction description: ${list_action_des[widget.acrea["reaction_id"]]}",
              style: GoogleFonts.poppins(
                color: Colors.black,
                fontSize: 15,
                fontWeight: FontWeight.w600),
              ),
            // Text("Paramètre réaction: ${widget.acrea["params_reaction"]}",
            //  style: GoogleFonts.poppins(
            //     color: Colors.black,
            //     fontSize: 10,
            //     fontWeight: FontWeight.w600),
            // ),
            Text("Date: ${widget.acrea["created_date"]}",
              style: GoogleFonts.poppins(
                color: Colors.black,
                fontSize: 15,
                fontWeight: FontWeight.w600),
            ),
            SizedBox(
              height: 50,
              child:  IconButton(
              onPressed: (){
                if (delete_acrea_user(widget.acrea["id"], widget.id_user, widget.acrea) == true) {
                  get_act_react(widget.id_user);
                }
              },
              icon: Icon(Icons.delete_forever_outlined),
              color: Colors.red
              )
            )
          ],
        ),
      ),
    );
  }
  Future<bool> delete_acrea_user(int id, String token, var acrea) async {
    var response = await http.delete(Uri.parse("http://api-area-a.fr/deleteAcreaUser?id=$id"),
    headers: {"Content-Type": "application/json", "Authorization": "Bearer ${token}"},);

    if (response.statusCode == 200) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content: Text('Area supprimée.'),
      ));
      return true;
    } else {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
        content: Text('Impossible de supprimer cette area.')
        )
      );
    }
    return false;
  }
}