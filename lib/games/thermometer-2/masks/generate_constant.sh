#!/bin/bash
#
#
printf "const shapeConst = {\n" >> ./shapeConstants.js
find . -type f -name "*.txt" -exec sh -c '
  # read the contents of the file and append "const test" at the start
  contents="$(cat $@)"

  dir=${1#*/}
  dir=${dir#*/}
  dir=${dir%.*}

  if [ -n "$contents" ]; then
      printf "${dir//\//_} : %s,\n" "$contents" >> ./shapeConstants.js
  fi

' sh {} \;
printf "}" >> ./shapeConstants.js
