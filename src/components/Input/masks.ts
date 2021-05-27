export function cep(e:React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    // impedir a digitação de caracteres que não sejam números (D)
    value = value.replace(/\D/g, '');
    // dividir em dois "blocos", um de 5 caracteres e o restante, inserir um - entre os dois blocos
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    e.currentTarget.value = value;

    return e;
}

export function currency(e:React.FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, '');
    // para inserir a vírgula ao final 
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    // para inserir o ponto a cada três dígitos
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');    
    e.currentTarget.value = value;

    return e;
}

export function cpf(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;
    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
      e.currentTarget.value = value;
    }
    return e;
  }

  export function cnpj(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 18;
    let value = e.currentTarget.value;
    if (!value.match(/^(\d{2}).(\d{3}).(\d{3}).(\d{4})-(\d{2})$/)) {
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{2})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1/$2");
      value = value.replace(/(\d{4})(\d{2})$/, "$1-$2");
      e.currentTarget.value = value;
    }
    return e;
  }

  export function tel(e: React.FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;
    if (!value.match(/^(\d{2}).(\d{4}).(\d{4})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1)$2");
        value = value.replace(/(\d{4})(\d{4})$/, "$1-$2");
        e.currentTarget.value = value;
    }
    else if (!value.match(/^(\d{2}).(\d{5}).(\d{4})$/)) {
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{2})(\d)/, "($1)$2");
      value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");
      e.currentTarget.value = value;
    } 
    
    return e;
  }


