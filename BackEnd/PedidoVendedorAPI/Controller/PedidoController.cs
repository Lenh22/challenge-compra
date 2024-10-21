using Microsoft.AspNetCore.Mvc;
using PedidoVendedorAPI.Model;

namespace PedidoVendedorAPI.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
        [HttpPost]
        public IActionResult CrearPedido([FromBody] Pedido pedido)
        {
            if (pedido.Productos == null || pedido.Productos.Count == 0 || string.IsNullOrEmpty(pedido.Vendedor))
            {
                return BadRequest("Tiene que haber un producto y vendedor");
            }

            return Ok("Pedido generado");
        }
    }
}
