class Compra {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public zip: number,
    public date: Date,
    public total: number,
    public address: string,
    public payment: string,
    public id?: number,
    public compraItems: CompraItem[] = []
  ){}
}

class CompraItem {
  constructor(
    public quantity: number,
    public produtoId: string
    ) {}
}

export {Compra, CompraItem}
