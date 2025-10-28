package handler

import (
	"encoding/json"
	"net/http"
	"os"

	"github.com/madsfranzen/mixfolio/backend/internal/model"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var req model.LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	if ValidateCredentials(req.Username, req.Password) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Login successful!"))
	} else {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
	}
}

func ValidateCredentials(username, password string) bool {
	adminUser := os.Getenv("ADMIN_USERNAME")
	adminPass := os.Getenv("ADMIN_PASSWORD")
	return username == adminUser && password == adminPass
}
