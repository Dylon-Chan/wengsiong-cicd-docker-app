#Output the IP address of the ECS cluster service
data "aws_network_interfaces" "all" {
  filter {
    name = "group-id"
    values = [aws_security_group.ecs-sg.id]
  }
  depends_on = [aws_security_group.ecs-sg]
}

data "aws_network_interface" "all" {
  for_each = toset(data.aws_network_interfaces.all.ids)
    id = each.key

  depends_on = [data.aws_network_interfaces.all]
}

output "all_access_urls" {
  value = {
    for k, v in data.aws_network_interface.all : k => "http://${v.association[0].public_ip}:8080"
  }
}