export class SistemaLogin {
    static login (autenticavel, senha) {
        if (SistemaLogin.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }

        return false;
    }

    static ehAutenticavel (autenticavel) {
        return "autenticar" in autenticavel  && autenticavel.autenticar instanceof Function;
    }
}