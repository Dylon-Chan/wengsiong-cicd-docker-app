#create aws ecr
resource "aws_ecr_repository" "ecr" {
  name = "wengsiong-docker-nodejs-app"
}

