package main

import (
    "net/http"
    "github.com/labstack/echo"
    "github.com/labstack/echo/middleware"
  )

func main() {

    e := echo.New()

    // Access-Control-Allow-Origin対応
    e.Use(middleware.CORS())

    e.GET("/", func(c echo.Context) error {
        //return c.String(http.StatusOK, "Hello, World!")
        jsonMap := map[string]interface{}{
          "name": "aaa",
        }
        return c.JSON(http.StatusOK, jsonMap)
    })

    e.GET("/users/:id", func(c echo.Context) error {
        jsonMap := map[string]string{
            "name": "okutani",
            "hoge": "piyo",
        }
        return c.JSON(http.StatusOK, jsonMap)
    })

    e.Logger.Fatal(e.Start(":1323"))
}
