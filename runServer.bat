@echo off

rmdir /S /Q C:\xampp\htdocs
mkdir C:\xampp\htdocs
xcopy /E /C /Q /Y . C:\xampp\htdocs