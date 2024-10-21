namespace PedidoVendedorAPI.Model
{
    public class Articulo
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }
        public int Deposito { get; set; }
    }
}
