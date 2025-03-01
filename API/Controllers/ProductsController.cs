using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // [Route("api/[controller]")] //https:/localhost:5001/api/products
    // [ApiController]
    public class ProductsController(StoreContext context) : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProduct()
        {
            return await context.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await context.Products.FindAsync(id);
            if(product==null) return NotFound();
            return product;
        }
    }
}
