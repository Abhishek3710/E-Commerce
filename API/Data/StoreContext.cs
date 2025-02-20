using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        // Constructor for DbContext
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        // Define the DbSet for the Product entity
        public required DbSet<Product> Products { get; set; }
        public required DbSet<Basket> Baskets { get; set; }
    }
}
