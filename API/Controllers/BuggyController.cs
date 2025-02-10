using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]
    public IActionResult GetNotFound()
    {
        return NotFound();
    }

    
    [HttpGet("bad-request")]
    public IActionResult GetBadRequest()
    {
        return BadRequest("Bad Request!");
    }

    [HttpGet("unauthorized")]
    public IActionResult GetUnauthorized()
    {
        return Unauthorized();
    }

    [HttpGet("validation-error")]
    public IActionResult GetValidationError()
    {
        ModelState.AddModelError("problem1", "First Error!");
        ModelState.AddModelError("problem2", "Second Error!");
        return ValidationProblem();
    }

    [HttpGet("server-error")]
    public IActionResult GetServerError()
    {
        throw new Exception("This is a server error");
    }
}
