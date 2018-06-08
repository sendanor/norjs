#!/usr/bin/env bash
if uname -s|grep -iq Darwin; then
    pkg_root_dir="$(dirname "$(dirname "$0")")"
else
    pkg_root_dir="$(dirname "$(dirname "$(readlink -e "$0")")")"
fi
set -x
cd "$pkg_root_dir"
if test "x$ENABLE_COVERAGE" = xtrue; then
    if test -d ./lib-cov/; then
        rm -rf ./lib-cov/
    fi
    jscover ./lib ./lib-cov
    exec npm run -s test-coverage
else
    exec npm run -s test-spec
fi
