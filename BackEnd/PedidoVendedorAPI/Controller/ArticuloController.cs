using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PedidoVendedorAPI.Model;
using System.Reflection.PortableExecutable;

namespace PedidoVendedorAPI.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticuloController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetArticulos()
        {
            var jsonData = System.IO.File.ReadAllText("Mock/articulos.json");
            var productos = JsonConvert.DeserializeObject<List<Articulo>>(jsonData);

            // Filtra
            var productosFiltrados = productos
                .Where(p => p.Deposito == 1 && p.Precio > 0 && !ContieneCaracteresEspeciales(p.Descripcion))
                .ToList();

            return Ok(productosFiltrados);
        }

        private bool ContieneCaracteresEspeciales(string descripcion)
        {
            //regex
            return false; 
        }
    }
}
