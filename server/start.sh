#! /bin/bash

docker build -t bradley/verb-trainer .
docker run -p 3333:3333 bradley/verb-trainer
