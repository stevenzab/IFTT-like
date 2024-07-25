#!/bin/sh

flask crontab add
flask crontab show > value.txt
a=$(cat value.txt | cut -d' ' -f1)
b=$(echo $a | cut -d' ' -f2)
flask crontab run $b
flask run --host=0.0.0.0 --port=8080