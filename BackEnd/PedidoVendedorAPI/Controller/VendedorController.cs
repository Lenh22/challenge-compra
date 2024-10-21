using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PedidoVendedorAPI.Model;

namespace PedidoVendedorAPI.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class VendedorController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetVendedores()
        {
            var jsonData = System.IO.File.ReadAllText("Mock/articulos.json");
            var vendedores = JsonConvert.DeserializeObject<List<Vendedor>>(jsonData);
            return Ok(vendedores);
        }
    }
}
