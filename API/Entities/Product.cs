namespace API.Entities; //logical namespace,  if we create a class inside Controllers(dfferent folder) with same name it will not conflict?

public class Product
{
    public int Id { get; set; } // must be public, entity framework access? didnt get it
    public required string Name { get; set; } // we could initial to empty "" but we dont want that either
    public required string Description { get; set; }
    public long Price { get; set; }
    public required string PictureUrl { get; set; }
    public required string Type { get; set; }
    public required string Brand { get; set; }
    public int QuantityInStock { get; set; }

}
