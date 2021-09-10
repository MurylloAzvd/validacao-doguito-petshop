const cpfInput = document.querySelector('[data-tipo = "cpf"]')
cpfInput.addEventListener('input', (event) => event.target.value = mCPF(event.target.value))

const mCPF = (cpf) => {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}