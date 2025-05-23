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
  services.caddy.virtualHosts = {
    "caek.dev".extraConfig = ''
      root * ${srv}
      file_server
    '';

    "files.caek.dev".extraConfig = ''
      root * /data/srv
      file_server
    '';
  };
}
