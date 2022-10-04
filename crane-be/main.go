package main

import (
	"log"

	"papercrane/api"
	"papercrane/utils"
)

func main() {
	// init DB
	db := utils.InitDB("papercrane.db")

	// init server
	srv := api.NewServer(db, utils.ReactStaticFilePath())
	log.Fatal(srv.Router.Run(":8001"))
}
