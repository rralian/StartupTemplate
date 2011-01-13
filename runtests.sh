#!/bin/bash

if [[ "$OSTYPE" =~ darwin.+ ]]
then export PYTHONPATH=/Applications/GoogleAppEngineLauncher.app/Contents/Resources/GoogleAppEngine-default.bundle/Contents/Resources/google_appengine:$PYTHONPATH
fi

python runtests.py