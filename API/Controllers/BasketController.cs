using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketController(StoreContext context) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if (basket == null) return NoContent();

            return basket.ToDto();

        }

        [HttpPost]
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetrieveBasket();
            basket ??= CreateBasket();
            var product = await context.Products.FindAsync(productId);
            if (product == null) return BadRequest("Problem adding the item to basket");
            basket.AddItem(product, quantity);
            var result = await context.SaveChangesAsync() > 0;

            if (result) return CreatedAtAction(nameof(GetBasket), basket.ToDto());

            return BadRequest("Problem updating basket");
        }

        private Basket CreateBasket()
        {
            var basketId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions
            {
                IsEssential = true,
                Expires = DateTime.UtcNow.AddDays(60)
            };

            Response.Cookies.Append("basketId", basketId, cookieOptions);
            var basket = new Basket { BasketId = basketId };
            context.Baskets.Add(basket);
            return basket;
        }

        private async Task<Basket?> RetrieveBasket()
        {
            return await context.Baskets
                .Include(x => x.Items)
                .ThenInclude(x => x.Product)
                .FirstOrDefaultAsync(x => x.BasketId == Request.Cookies["basketId"]);

        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            var basket = await RetrieveBasket();
            if(basket ==null) return  BadRequest("Unable to retrieve the basket");
            basket.RemoveItem(productId,quantity);
            var result = await context.SaveChangesAsync() > 0;
            if(result) return Ok();  // Return appropriate response
            return BadRequest("Problem updating basket");
        }
    }
}
