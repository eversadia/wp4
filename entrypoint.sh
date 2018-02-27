#!/bin/bash
# filter zone number from hostname and export it as environment variables

mkdir -p /logs/qt-backoffice-ui/

/bin/ln -sf /usr/share/nginx/html/content/config/$APP_ENV /usr/share/nginx/html/content/config/env

if [ "$1" = 'nginx' ]; then
    exec gosu root "$@" -g "daemon off;" -c /etc/nginx/nginx.conf
fi

exec "$@"
