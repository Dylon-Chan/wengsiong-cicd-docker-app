terraform {
  backend "s3" {
    bucket = "sctp-ce2-tfstate-bkt"
    key    = "wengsiong-docker-nodejs-app.tfstate"
    region = "ap-southeast-1"
  }
}