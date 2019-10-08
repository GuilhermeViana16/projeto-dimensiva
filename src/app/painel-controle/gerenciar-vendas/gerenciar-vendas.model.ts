export class GerenciarVendas{
    id: string
    firstName: string
    lastName: string
    email: string
    address: string
    cep: string
    pagamento: string
    total: number
    compraItems: CompraItem[] = []
}

class CompraItem {
  constructor(
    public quantity: number,
    public produtoId: string
    ) {}
}
