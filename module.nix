self: {
   config,
   pkgs,
   lib,
   ...
}: let
   srv = builtins.path {
	name = "caek-dev-src";
	path = ./srv;
   };
in {
   services.caddy.virtualHosts."caek.dev" = {
	extraConfig = ''
		root * ${srv}
		
		file_server {
			browse ${srv}
		}
	'';
   };
}
