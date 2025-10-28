package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/joho/godotenv"
	"github.com/madsfranzen/mixfolio/backend/internal/handler"
	"github.com/madsfranzen/mixfolio/backend/internal/middleware"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	r := chi.NewRouter()

	r.Use(middleware.CORSMiddleware)
	r.Use(middleware.LoggingMiddleware)

	r.Route("/login", func(r chi.Router) {
		r.Post("/", handler.LoginHandler)
	})

	fmt.Println("Server running on http://localhost:8080")
	if err := http.ListenAndServe(":8080", r); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
