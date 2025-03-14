using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext(DbContextOptions<StoreContext> options) : IdentityDbContext<User>(options)
    {

        // Define the DbSet for the Product entity
        public required DbSet<Product> Products { get; set; }
        public required DbSet<Basket> Baskets { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<IdentityRole>().HasData(
                new IdentityRole {Id="d8be9756-73a2-49b9-9ae4-1d6413981a1a", Name="Member", NormalizedName="MEMBER"},
                new IdentityRole {Id="43109b5b-a867-4dbe-a874-5b90813a0c17", Name="Admin", NormalizedName="ADMIN"}
            );
        }

    }

}
