using System;
using API.Entities;

namespace API.Extensions;

public static class ProductExtension
{
    public static IQueryable<Product> Sort(this IQueryable<Product> query, string? OrderBy)
    {
        query = OrderBy switch
            {
                
                "price"=> query.OrderBy(x=>x.Price),
                "priceDesc"=> query.OrderByDescending(x=>x.Price),
                _=>query.OrderBy(x=>x.Name)
            };
        return query;
    }

    public static IQueryable<Product> Search(this IQueryable<Product> query ,  string? searchTerm)
    {
        if(string.IsNullOrEmpty(searchTerm)) return query;

        var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

        return query.Where(x=>x.Name.ToLower().Contains(lowerCaseSearchTerm));
    }

    public static IQueryable<Product> Filter(this IQueryable<Product> query, string? brands, string? types)
    {
        var brandList = new List<string>();
        var typeList = new List<string>();

        if(!string.IsNullOrEmpty(brands))
        {
            brandList = brands.ToLower().Split(",").ToList();
        }
        if(!string.IsNullOrEmpty(types))
        {
            typeList = types.ToLower().Split(",").ToList();
        }

        query = query.Where(x=> brandList.Count==0 || brandList.Contains(x.Brand.ToLower()));
        query = query.Where(x=> typeList.Count==0 || typeList.Contains(x.Type.ToLower()));

        return query;

    }
}
