import 'package:flutter/material.dart';
import 'forgot_pwd_page.dart';
import '../create_account_page/create_account_page.dart';

class ButtonCreateAcc extends StatelessWidget {
  const ButtonCreateAcc({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        TextButton(
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(
              builder: (context) => const CreateAccPage()
              ));
          },
          child: const Text(
            'Créer un compte',
            style: TextStyle(
              color:  Color.fromARGB(255, 28, 102, 229),
              decoration: TextDecoration.underline,
              ),
          ),
        ),
      ],
    );
  }
}

class ButtonPwdLost extends StatelessWidget {
  const ButtonPwdLost({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextButton(
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(
              builder: (context) => const ForgotPwdPage()
              ));
          },
          child: const Text(
            'Mot de passe oublié ?',
            style: TextStyle(
              color:  Color.fromARGB(255, 28, 102, 229),
              decoration: TextDecoration.underline,
              ),
          ),
        ),
      ],
    );
  }
}