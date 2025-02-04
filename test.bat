@echo off
echo Running ESM Test...
node test\test.mjs

echo.
echo Running CJS Test...
node test\test.cjs

echo.
echo All tests completed.
pause