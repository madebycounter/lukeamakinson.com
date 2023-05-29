@echo off

echo Building site...
call npm run clean
call npm run build

echo Pushing to AWS (s3://%1)...
aws s3 sync .\public\ s3://%1 --delete

echo Done.