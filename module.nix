self: {
  config,
  pkgs,
  lib,
  ...
}: let
  srv = builtins.path {
    name = "caek-dev-srv";
    path = ./srv;
  };
in {
  services.matrix-synapse = {
    enable = true;
  };

  services.caddy.virtualHosts = {
    "caek.dev".extraConfig = ''
      root * ${srv}
      file_server
    '';

    "matrix.caek.dev".extraConfig = ''
      reverse_proxy /_matrix/* localhost:8008
      		reverse_proxy /_synapse/client/* localhost:8008
    '';

    "example.com:8448".extraConfig = ''
      reverse_proxy /_matrix/* localhost:8008
    '';
  };
}
