function verificarCPF(c)
{
    let i;
    const s = c;

    const c = s.substr(0,9);
    const dv = s.substr(9,2);

    let d1 = 0;
    let v = false;
    
    for (i = 0; i < 9; i++)
    {
        d1 += c.charAt(i)*(10-i);
    }

    if (d1 == 0)
    {
        alert("CPF Inválido")
        v = true;
        return false;
    }

    d1 = 11 - (d1 % 11);

    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1){
        alert("CPF Inválido")
        v = true;
        return false;
    }
 
    d1 *= 2;
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(11-i);
    }

    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1)
    {
        alert("CPF Inválido")
        v = true;
        return false;
    }

    if (!v) 
    {
        alert("CPF Válido")
    }
}

function valida()
{
    alert('FORMULÁRIO ENVIADO COM SUCESSO!!!');
    return true;
}